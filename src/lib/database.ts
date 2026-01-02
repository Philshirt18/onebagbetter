/**
 * Database service functions for the Trash Collection Tracker
 */
import { prisma } from './prisma';
import { convertToKg } from './validations';
import type { CollectionEntry, GlobalStats, CreateCollectionEntryInput } from '../types';
import type { Unit } from '@prisma/client';

// Collection Entry operations
export async function createCollectionEntry(
  data: CreateCollectionEntryInput
): Promise<CollectionEntry> {
  // Convert amount to kg for consistent storage
  const amountInKg = convertToKg(data.amount, data.unit);

  // Create the entry
  const entry = await prisma.collectionEntry.create({
    data: {
      amount: data.amount,
      unit: data.unit as Unit,
      location: data.location || null,
      name: data.name || null,
    },
  });

  // Update global stats
  await updateGlobalStats(amountInKg, 1);

  return {
    id: entry.id,
    amount: entry.amount,
    unit: entry.unit,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
    location: entry.location || undefined,
    name: entry.name || undefined,
  };
}

export async function getCollectionEntries(
  page: number = 1,
  limit: number = 10
): Promise<{
  entries: CollectionEntry[];
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}> {
  const skip = (page - 1) * limit;

  const [entries, total] = await Promise.all([
    prisma.collectionEntry.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.collectionEntry.count(),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    entries: entries.map((entry) => ({
      id: entry.id,
      amount: entry.amount,
      unit: entry.unit,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
      location: entry.location || undefined,
      name: entry.name || undefined,
    })),
    total,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
}

export async function getCollectionEntryById(id: string): Promise<CollectionEntry | null> {
  const entry = await prisma.collectionEntry.findUnique({
    where: { id },
  });

  if (!entry) return null;

  return {
    id: entry.id,
    amount: entry.amount,
    unit: entry.unit,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
    location: entry.location || undefined,
    name: entry.name || undefined,
  };
}

// Global Stats operations
export async function getGlobalStats(): Promise<GlobalStats> {
  let stats = await prisma.globalStats.findFirst();

  if (!stats) {
    // Create initial stats if they don't exist
    stats = await prisma.globalStats.create({
      data: {
        totalAmountKg: 0,
        totalEntries: 0,
      },
    });
  }

  return {
    id: stats.id,
    totalAmountKg: stats.totalAmountKg,
    totalEntries: stats.totalEntries,
    lastUpdated: stats.lastUpdated,
  };
}

export async function updateGlobalStats(
  amountKgToAdd: number,
  entriesToAdd: number
): Promise<GlobalStats> {
  // Get or create stats
  let stats = await prisma.globalStats.findFirst();

  if (!stats) {
    stats = await prisma.globalStats.create({
      data: {
        totalAmountKg: amountKgToAdd,
        totalEntries: entriesToAdd,
      },
    });
  } else {
    stats = await prisma.globalStats.update({
      where: { id: stats.id },
      data: {
        totalAmountKg: stats.totalAmountKg + amountKgToAdd,
        totalEntries: stats.totalEntries + entriesToAdd,
      },
    });
  }

  return {
    id: stats.id,
    totalAmountKg: stats.totalAmountKg,
    totalEntries: stats.totalEntries,
    lastUpdated: stats.lastUpdated,
  };
}

// Utility functions
export async function getTotalCollectionCount(): Promise<number> {
  return await prisma.collectionEntry.count();
}

export async function getRecentEntries(limit: number = 5): Promise<CollectionEntry[]> {
  const entries = await prisma.collectionEntry.findMany({
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

  return entries.map((entry) => ({
    id: entry.id,
    amount: entry.amount,
    unit: entry.unit,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
    location: entry.location || undefined,
    name: entry.name || undefined,
  }));
}

// Database health check
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    // Use a simple count query instead of raw SQL
    const result = await prisma.globalStats.findMany({ take: 1 });
    console.log('Database health check successful:', result);
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
    });
    return false;
  }
}

// Seed function for development
export async function seedDatabase(): Promise<void> {
  // Check if data already exists
  const existingEntries = await prisma.collectionEntry.count();
  if (existingEntries > 0) {
    console.log('Database already seeded');
    return;
  }

  // Create sample entries
  const sampleEntries = [
    { amount: 2.5, unit: 'kg' as const, location: 'Central Park' },
    { amount: 1.8, unit: 'kg' as const, location: 'Beach Cleanup' },
    { amount: 3.2, unit: 'lbs' as const, location: 'Neighborhood Walk' },
    { amount: 5.0, unit: 'kg' as const, location: 'River Trail' },
    { amount: 1.5, unit: 'lbs' as const, location: 'School Grounds' },
  ];

  for (const entry of sampleEntries) {
    await createCollectionEntry(entry);
  }

  console.log('Database seeded with sample data');
}