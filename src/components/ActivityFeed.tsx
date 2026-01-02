'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { formatRelativeTime, formatAmount } from '@/lib/utils';
import { getCollectionEntries } from '@/lib/api';
import type { CollectionEntryResponse } from '@/types';

interface ActivityFeedProps {
  className?: string;
  limit?: number;
  showPagination?: boolean;
}

export default function ActivityFeed({
  className,
  limit = 10,
  showPagination = true,
}: ActivityFeedProps) {
  const [entries, setEntries] = useState<CollectionEntryResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const loadEntries = async (page: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await getCollectionEntries(page, limit);
      
      setEntries(response.data);
      setCurrentPage(response.pagination.page);
      setTotalPages(response.pagination.totalPages);
      setHasNext(response.pagination.hasNext);
      setHasPrev(response.pagination.hasPrev);
    } catch (err) {
      setError('Failed to load activity feed');
      console.error('Activity feed error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEntries(1);
  }, [limit]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      loadEntries(newPage);
    }
  };

  const handleRefresh = () => {
    loadEntries(currentPage);
  };

  if (loading && entries.length === 0) {
    return (
      <div className={cn('card-adventure p-6', className)}>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lime-500"></div>
          <span className="ml-3 text-gray-600">Loading activity...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn('card-adventure p-6', className)}>
        <div className="text-center py-12">
          <div className="text-red-500 text-xl mb-2">⚠️</div>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="btn-adventure px-4 py-2 text-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className={cn('card-adventure p-6', className)}>
        <h2 className="text-display text-xl font-bold text-gray-800 mb-4">
          RECENT ACTIVITY
        </h2>
        <div className="text-center py-12">
          <div className="text-gray-400 text-4xl mb-4">🌱</div>
          <p className="text-gray-600 mb-2">No collections yet!</p>
          <p className="text-gray-500 text-sm">
            Be the first to record a trash collection and start making a difference.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('card-adventure p-6', className)}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-display text-xl font-bold text-gray-800">
          RECENT ACTIVITY
        </h2>
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="text-lime-600 hover:text-lime-700 transition-colors disabled:opacity-50"
          title="Refresh activity"
        >
          <svg
            className={cn('w-5 h-5', loading && 'animate-spin')}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>

      {/* Activity Grid */}
      <div className="space-y-3 sm:space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-600 text-sm sm:text-lg">🗑️</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                      {entry.name ? (
                        <>
                          <span className="text-lime-600">{entry.name}</span> collected {formatAmount(entry.amount, entry.unit)}
                        </>
                      ) : (
                        <>Collected {formatAmount(entry.amount, entry.unit)}</>
                      )}
                    </p>
                    {entry.location && (
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        📍 {entry.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <p className="text-xs sm:text-sm text-gray-500">
                  {formatRelativeTime(entry.createdAt)}
                </p>
              </div>
            </div>
            
            {/* Social sharing hint */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 flex items-center gap-1 flex-wrap">
                <span>📱</span>
                <span className="hidden sm:inline">Share your cleanup with</span>
                <span className="sm:hidden">Share with</span>
                <span className="font-mono text-lime-600 break-all">#onebagbetter</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-6 border-t border-gray-200 gap-4 sm:gap-0">
          <div className="text-sm text-gray-600 order-2 sm:order-1">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-2 order-1 sm:order-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!hasPrev || loading}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[80px]"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!hasNext || loading}
              className="px-3 py-2 text-sm bg-lime-500 text-white rounded-lg hover:bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[80px]"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Loading overlay for pagination */}
      {loading && entries.length > 0 && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-lime-500"></div>
        </div>
      )}
    </div>
  );
}