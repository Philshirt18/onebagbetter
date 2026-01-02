/**
 * Application constants
 */

// API endpoints
export const API_ENDPOINTS = {
  ENTRIES: '/api/entries',
  STATS: '/api/stats',
  UPLOAD: '/api/upload',
} as const;

// File upload constraints
export const FILE_CONSTRAINTS = {
  MAX_SIZE_MB: 5,
  MAX_SIZE_BYTES: 5 * 1024 * 1024,
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.webp'],
} as const;

// Validation constraints
export const VALIDATION_CONSTRAINTS = {
  AMOUNT: {
    MIN: 0.1,
    MAX: 10000,
  },
  LOCATION: {
    MAX_LENGTH: 255,
  },
  PAGINATION: {
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
  },
} as const;

// Units and conversion
export const UNITS = {
  BAGS: 'bags',
  KG: 'kg',
  LBS: 'lbs',
} as const;

export const CONVERSION_RATES = {
  LBS_TO_KG: 0.453592,
  KG_TO_LBS: 2.20462,
  BAGS_TO_KG: 0.5, // Average trash bag weight
  KG_TO_BAGS: 2.0,
} as const;

// Milestones (in bags)
export const MILESTONES = [50, 100, 250, 500, 1000, 2500, 5000] as const;

// Display thresholds
export const DISPLAY_THRESHOLDS = {
  THOUSANDS_THRESHOLD: 1000, // Show in k bags when >= 1000 bags
} as const;

// Animation durations (in ms)
export const ANIMATION_DURATIONS = {
  COUNTER: 2000,
  CARD_HOVER: 300,
  BUTTON_HOVER: 200,
  PAGE_TRANSITION: 500,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_AMOUNT: 'Please enter a valid amount between 0.1 and 10,000',
  INVALID_UNIT: 'Please select a valid unit (kg or lbs)',
  INVALID_FILE_TYPE: 'Please upload a JPEG, PNG, or WebP image',
  FILE_TOO_LARGE: 'File size must be less than 5MB',
  UPLOAD_FAILED: 'Failed to upload image. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  ENTRY_CREATED: 'Great job! Your trash collection has been recorded.',
  MILESTONE_REACHED: 'Congratulations! You\'ve reached a new milestone!',
  PHOTO_UPLOADED: 'Photo uploaded successfully',
} as const;

// UI text
export const UI_TEXT = {
  HERO: {
    TITLE: 'CLEAN UP THE WORLD',
    SUBTITLE: 'Join the community fighting litter',
    CTA: 'ADD YOUR COLLECTION',
  },
  FORM: {
    AMOUNT_LABEL: 'Amount Collected',
    AMOUNT_PLACEHOLDER: 'Enter amount',
    UNIT_LABEL: 'Unit',
    PHOTO_LABEL: 'Photo (Optional)',
    PHOTO_PLACEHOLDER: 'Drag and drop or click to upload',
    LOCATION_LABEL: 'Location (Optional)',
    LOCATION_PLACEHOLDER: 'Where did you collect trash?',
    SUBMIT_BUTTON: 'Record Collection',
    SUBMITTING_BUTTON: 'Recording...',
  },
  STATS: {
    TOTAL_COLLECTED: 'Total Collected',
    TOTAL_ENTRIES: 'Collection Entries',
    LAST_UPDATED: 'Last Updated',
  },
  NAVIGATION: {
    HOME: 'Home',
    ADD_ENTRY: 'Add Entry',
    COMMUNITY: 'Community',
    STATS: 'Stats',
  },
} as const;

// Theme colors (matching CSS variables)
export const THEME_COLORS = {
  PRIMARY_GREEN: '#84cc16',
  DARK_OVERLAY: 'rgba(0, 0, 0, 0.6)',
  TEXT_PRIMARY: '#1f2937',
  TEXT_SECONDARY: '#6b7280',
  BACKGROUND: '#ffffff',
} as const;

// Responsive breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;