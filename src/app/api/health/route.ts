import { NextRequest, NextResponse } from 'next/server';
import { checkDatabaseConnection } from '@/lib/database';

// GET /api/health - Health check endpoint
export async function GET(request: NextRequest) {
  try {
    const dbHealthy = await checkDatabaseConnection();
    
    const response = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        database: dbHealthy ? 'healthy' : 'unhealthy',
      },
    };

    const statusCode = dbHealthy ? 200 : 503;
    return NextResponse.json(response, { status: statusCode });
  } catch (error) {
    console.error('Health check error:', error);

    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        services: {
          database: 'unhealthy',
        },
        error: 'Health check failed',
      },
      { status: 503 }
    );
  }
}