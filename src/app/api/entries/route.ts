import { NextRequest, NextResponse } from 'next/server';
import { createCollectionEntry, getCollectionEntries } from '@/lib/database';
import { validateCreateEntryRequest, validatePaginationParams } from '@/lib/validations';
import { ZodError } from 'zod';

// GET /api/entries - Retrieve all entries with pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paginationParams = validatePaginationParams({
      page: searchParams.get('page') || '1',
      limit: searchParams.get('limit') || '10',
    });

    const result = await getCollectionEntries(paginationParams.page, paginationParams.limit);

    const response = {
      data: result.entries.map(entry => ({
        id: entry.id,
        amount: entry.amount,
        unit: entry.unit,
        createdAt: entry.createdAt.toISOString(),
        updatedAt: entry.updatedAt.toISOString(),
        location: entry.location,
        name: entry.name,
      })),
      pagination: {
        page: paginationParams.page,
        limit: paginationParams.limit,
        total: result.total,
        totalPages: result.totalPages,
        hasNext: result.hasNext,
        hasPrev: result.hasPrev,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('GET /api/entries error:', error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: 'Invalid pagination parameters',
          code: 'VALIDATION_ERROR',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: 'Failed to retrieve entries',
        code: 'SERVER_ERROR',
      },
      { status: 500 }
    );
  }
}

// POST /api/entries - Create new collection entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = validateCreateEntryRequest(body);

    const entry = await createCollectionEntry({
      amount: validatedData.amount,
      unit: validatedData.unit,
      location: validatedData.location || undefined,
      name: validatedData.name || undefined,
    });

    const response = {
      id: entry.id,
      amount: entry.amount,
      unit: entry.unit,
      createdAt: entry.createdAt.toISOString(),
      updatedAt: entry.updatedAt.toISOString(),
      location: entry.location,
      name: entry.name,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('POST /api/entries error:', error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: 'Invalid entry data',
          code: 'VALIDATION_ERROR',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: 'Failed to create entry',
        code: 'SERVER_ERROR',
      },
      { status: 500 }
    );
  }
}