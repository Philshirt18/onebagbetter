/**
 * Validation schemas using Zod for type-safe validation
 */
import { z } from 'zod';

// Base schemas
export const unitSchema = z.enum(['bags', 'kg', 'lbs'], {
  message: 'Unit must be bags, kg, or lbs',
});

export const positiveNumberSchema = z
  .number({
    message: 'Amount must be a number',
  })
  .positive('Amount must be greater than 0')
  .max(10000, 'Amount cannot exceed 10,000 kg/lbs');

// Collection Entry schemas
export const createCollectionEntrySchema = z.object({
  amount: positiveNumberSchema,
  unit: unitSchema,
  location: z
    .string()
    .max(255, 'Location cannot exceed 255 characters')
    .optional()
    .or(z.literal('')),
  name: z
    .string()
    .max(100, 'Name cannot exceed 100 characters')
    .optional()
    .or(z.literal('')),
});

export const collectionEntrySchema = createCollectionEntrySchema.extend({
  id: z.string().uuid('Invalid entry ID'),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Global Stats schema
export const globalStatsSchema = z.object({
  id: z.number().int().positive(),
  totalAmountKg: z.number().min(0, 'Total amount cannot be negative'),
  totalEntries: z.number().int().min(0, 'Total entries cannot be negative'),
  lastUpdated: z.date(),
});

// API request schemas
export const createEntryRequestSchema = z.object({
  amount: z
    .union([z.string(), z.number()])
    .transform((val) => typeof val === 'string' ? parseFloat(val) : val)
    .pipe(positiveNumberSchema),
  unit: unitSchema,
  location: z.string().max(255).optional().or(z.literal('')),
  name: z.string().max(100).optional().or(z.literal('')),
});

// File upload validation
export const photoFileSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, 'File size must be less than 5MB')
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      'File must be JPEG, PNG, or WebP format'
    ),
});

// Pagination schema
export const paginationSchema = z.object({
  page: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().int().min(1, 'Page must be at least 1'))
    .default(1),
  limit: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().int().min(1).max(100, 'Limit cannot exceed 100'))
    .default(10),
});

// Type exports for use in components
export type CreateCollectionEntryInput = z.infer<typeof createCollectionEntrySchema>;
export type CollectionEntry = z.infer<typeof collectionEntrySchema>;
export type GlobalStats = z.infer<typeof globalStatsSchema>;
export type CreateEntryRequest = z.infer<typeof createEntryRequestSchema>;
export type PhotoFile = z.infer<typeof photoFileSchema>;
export type PaginationParams = z.infer<typeof paginationSchema>;

// Validation helper functions
export function validateCollectionEntry(data: unknown): CollectionEntry {
  return collectionEntrySchema.parse(data);
}

export function validateCreateEntryRequest(data: unknown): CreateEntryRequest {
  return createEntryRequestSchema.parse(data);
}

export function validatePhotoFile(file: File): PhotoFile {
  return photoFileSchema.parse({ file });
}

export function validatePaginationParams(params: unknown): PaginationParams {
  return paginationSchema.parse(params);
}

// Unit conversion utilities
export function convertToKg(amount: number, unit: 'bags' | 'kg' | 'lbs'): number {
  if (unit === 'lbs') {
    return amount * 0.453592; // Convert lbs to kg
  }
  if (unit === 'bags') {
    return amount * 1.0; // Rule of thumb: 1 bag (30L) ≈ 1kg of plastic packaging
  }
  return amount;
}

export function formatDisplayAmount(totalKg: number): {
  amount: string;
  unit: string;
} {
  // Convert back to bags for display (1kg = 1 bag)
  const totalBags = totalKg / 1.0;
  
  if (totalBags >= 1000) {
    const thousands = totalBags / 1000;
    return {
      amount: thousands.toFixed(1),
      unit: 'k bags',
    };
  }
  return {
    amount: totalBags.toFixed(1),
    unit: 'bags',
  };
}