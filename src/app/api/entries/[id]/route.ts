import { NextRequest, NextResponse } from 'next/server';
import { getCollectionEntryById } from '@/lib/database';

// GET /api/entries/[id] - Get single entry by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          message: 'Entry ID is required',
          code: 'MISSING_ID',
        },
        { status: 400 }
      );
    }

    const entry = await getCollectionEntryById(id);

    if (!entry) {
      return NextResponse.json(
        {
          message: 'Entry not found',
          code: 'NOT_FOUND',
        },
        { status: 404 }
      );
    }

    const response = {
      id: entry.id,
      amount: entry.amount,
      unit: entry.unit,
      createdAt: entry.createdAt.toISOString(),
      updatedAt: entry.updatedAt.toISOString(),
      location: entry.location,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`GET /api/entries/${(await params).id} error:`, error);

    return NextResponse.json(
      {
        message: 'Failed to retrieve entry',
        code: 'SERVER_ERROR',
      },
      { status: 500 }
    );
  }
}