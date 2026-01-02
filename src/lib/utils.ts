/**
 * Utility functions for the Trash Collection Tracker
 */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind CSS class merging utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date formatting utilities
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  }

  return formatDate(d);
}

// Number formatting utilities
export function formatNumber(num: number, decimals: number = 1): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatAmount(amount: number, unit: 'bags' | 'kg' | 'lbs'): string {
  return `${formatNumber(amount)} ${unit}`;
}

// File utilities
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function isValidImageType(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  return validTypes.includes(file.type);
}

export function isValidFileSize(file: File, maxSizeMB: number = 5): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}

// Error handling utilities
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unexpected error occurred';
}

// Validation utilities
export function isValidAmount(amount: string): boolean {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0 && num <= 10000;
}

export function isValidUnit(unit: string): unit is 'bags' | 'kg' | 'lbs' {
  return unit === 'bags' || unit === 'kg' || unit === 'lbs';
}

// Animation utilities
export function generateCounterAnimation(
  start: number,
  end: number,
  duration: number = 2000
): (progress: number) => number {
  return (progress: number) => {
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    return Math.round(start + (end - start) * easeOutQuart);
  };
}

// Milestone utilities
export function getMilestones(totalKg: number): number[] {
  // Convert kg to bags for milestone calculation
  const totalBags = totalKg / 0.5;
  const milestones = [50, 100, 250, 500, 1000, 2500, 5000]; // in bags
  return milestones.filter(milestone => totalBags >= milestone);
}

export function getNextMilestone(totalKg: number): number | null {
  // Convert kg to bags for milestone calculation
  const totalBags = totalKg / 0.5;
  const milestones = [50, 100, 250, 500, 1000, 2500, 5000]; // in bags
  return milestones.find(milestone => totalBags < milestone) || null;
}

export function getMilestoneProgress(totalKg: number): {
  current: number;
  next: number | null;
  progress: number;
} {
  // Convert kg to bags for milestone calculation
  const totalBags = totalKg / 0.5;
  const achieved = getMilestones(totalKg);
  const current = achieved[achieved.length - 1] || 0;
  const next = getNextMilestone(totalKg);
  
  let progress = 0;
  if (next) {
    progress = ((totalBags - current) / (next - current)) * 100;
  } else if (totalBags > 0) {
    progress = 100; // All milestones achieved
  }
  
  return { current, next, progress };
}