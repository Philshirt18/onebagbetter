'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface WelcomeBannerProps {
  onClose?: () => void;
}

export default function WelcomeBanner({ onClose }: WelcomeBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show banner after a short delay for smooth animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before calling onClose
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300',
        'bg-black/60 backdrop-blur-sm',
        isVisible && !isClosing ? 'opacity-100' : 'opacity-0',
        !isVisible && 'pointer-events-none'
      )}
    >
      <div
        className={cn(
          'bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-center transition-all duration-300',
          isVisible && !isClosing 
            ? 'scale-100 translate-y-0' 
            : 'scale-95 translate-y-4'
        )}
      >
        {/* Icon */}
        <div className="text-6xl mb-6">🌱</div>
        
        {/* Welcome message */}
        <h2 className="text-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Welcome to <span className="whitespace-nowrap">One Bag Better!</span>
        </h2>
        
        {/* Privacy statement */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          This site doesn't collect personal data or payments. We only collect rubbish—so together we can win time for what matters.
        </p>
        
        {/* Action button */}
        <button
          onClick={handleClose}
          className={cn(
            'btn-adventure text-lg px-8 py-4 font-bold w-full sm:w-auto',
            'hover:scale-105 transition-all duration-200',
            'shadow-lg hover:shadow-xl'
          )}
        >
          Let's Go! 🚀
        </button>
        
        {/* Small disclaimer */}
        <p className="text-gray-400 text-sm mt-4">
          Join the cleanup community and make a difference, one bag at a time.
        </p>
        
        {/* Legal links */}
        <div className="flex justify-center gap-4 mt-3 text-xs">
          <a href="/privacy" className="text-gray-500 hover:text-lime-600 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-500 hover:text-lime-600 transition-colors">
            Terms & Conditions
          </a>
          <a href="/legal" className="text-gray-500 hover:text-lime-600 transition-colors">
            Legal Notice
          </a>
        </div>
      </div>
    </div>
  );
}