import { NextRequest, NextResponse } from 'next/server';
import { getGlobalStats } from '@/lib/database';
import { formatDisplayAmount } from '@/lib/validations';

// GET /api/stats - Get global statistics
export async function GET(request: NextRequest) {
  try {
    const stats = await getGlobalStats();
    const displayAmount = formatDisplayAmount(stats.totalAmountKg);

    const response = {
      totalAmountKg: stats.totalAmountKg,
      totalEntries: stats.totalEntries,
      lastUpdated: stats.lastUpdated.toISOString(),
      displayAmount: displayAmount.amount,
      displayUnit: displayAmount.unit,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('GET /api/stats error:', error);

    return NextResponse.json(
      {
        message: 'Failed to retrieve statistics',
        code: 'SERVER_ERROR',
      },
      { status: 500 }
    );
  }
}