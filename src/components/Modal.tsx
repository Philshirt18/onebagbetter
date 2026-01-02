'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className }: ModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div
        className={cn(
          'relative z-10 w-full max-w-lg mx-2 sm:mx-4',
          'max-h-[95vh] sm:max-h-[90vh] overflow-y-auto',
          'animate-in fade-in-0 duration-200',
          // Mobile: slide up from bottom, Desktop: zoom in from center
          'slide-in-from-bottom-4 sm:zoom-in-95',
          // Mobile: full width with rounded top corners, Desktop: normal rounded corners
          'sm:rounded-xl rounded-t-xl sm:rounded-b-xl',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile: Add a drag handle */}
        <div className="sm:hidden flex justify-center pt-2 pb-1">
          <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        {children}
      </div>
    </div>
  );
}