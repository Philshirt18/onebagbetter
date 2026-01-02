/**
 * Core data types for the Trash Collection Tracker
 */

export type Unit = 'bags' | 'kg' | 'lbs';

export interface CollectionEntry {
  id: string;
  amount: number;
  unit: Unit;
  createdAt: Date;
  updatedAt: Date;
  location?: string;
  name?: string;
}

export interface GlobalStats {
  id: number;
  totalAmountKg: number;
  totalEntries: number;
  lastUpdated: Date;
}

export interface CreateCollectionEntryInput {
  amount: number;
  unit: Unit;
  location?: string;
  name?: string;
}

export interface CollectionEntryResponse {
  id: string;
  amount: number;
  unit: Unit;
  createdAt: string; // ISO string for API responses
  updatedAt: string; // ISO string for API responses
  location?: string;
  name?: string;
}

export interface GlobalStatsResponse {
  totalAmountKg: number;
  totalEntries: number;
  lastUpdated: string; // ISO string for API responses
  displayAmount: string; // Formatted display string (e.g., "1.2 tons", "500 kg")
  displayUnit: string; // Display unit ("kg" or "tons")
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export type CollectionEntriesResponse = PaginatedResponse<CollectionEntryResponse>;

// Error types
export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}

// Form validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormErrors {
  amount?: string;
  unit?: string;
  photo?: string;
  general?: string;
}