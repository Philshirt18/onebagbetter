/**
 * Client-side API functions for the Trash Collection Tracker
 */
import { API_ENDPOINTS } from './constants';
import type {
  CollectionEntryResponse,
  CollectionEntriesResponse,
  GlobalStatsResponse,
  CreateCollectionEntryInput,
  ApiError,
} from '../types';

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData: ApiError = await response.json().catch(() => ({
          message: 'An unexpected error occurred',
          code: 'UNKNOWN_ERROR',
        }));
        
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error occurred');
    }
  }

  // Collection Entries API
  async getEntries(page: number = 1, limit: number = 10): Promise<CollectionEntriesResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    
    return this.request<CollectionEntriesResponse>(
      `${API_ENDPOINTS.ENTRIES}?${params}`
    );
  }

  async getEntry(id: string): Promise<CollectionEntryResponse> {
    return this.request<CollectionEntryResponse>(`${API_ENDPOINTS.ENTRIES}/${id}`);
  }

  async createEntry(data: CreateCollectionEntryInput): Promise<CollectionEntryResponse> {
    return this.request<CollectionEntryResponse>(API_ENDPOINTS.ENTRIES, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Global Statistics API
  async getStats(): Promise<GlobalStatsResponse> {
    return this.request<GlobalStatsResponse>(API_ENDPOINTS.STATS);
  }

  // Health Check API
  async healthCheck(): Promise<{ status: string; services: Record<string, string> }> {
    return this.request('/api/health');
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Convenience functions
export const getCollectionEntries = (page?: number, limit?: number) =>
  apiClient.getEntries(page, limit);

export const getCollectionEntry = (id: string) =>
  apiClient.getEntry(id);

export const createCollectionEntry = (data: CreateCollectionEntryInput) =>
  apiClient.createEntry(data);

export const getGlobalStats = () =>
  apiClient.getStats();

export const checkApiHealth = () =>
  apiClient.healthCheck();

// Error handling utilities
export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'code' in error
  );
}

export function getApiErrorMessage(error: unknown): string {
  if (isApiError(error)) {
    return error.message;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unexpected error occurred';
}