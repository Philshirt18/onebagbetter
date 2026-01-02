'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  formatter?: (value: number) => string;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  className,
  formatter,
  suffix,
  prefix,
}: AnimatedCounterProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value === 0) {
      setAnimatedValue(0);
      return;
    }

    setIsAnimating(true);
    const steps = 60; // 60 FPS
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Ease out quart animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(value * easeOutQuart);
      
      setAnimatedValue(currentValue);

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValue(value);
        setIsAnimating(false);
      }
    }, stepDuration);

    return () => {
      clearInterval(timer);
      setIsAnimating(false);
    };
  }, [value, duration]);

  const formatValue = (val: number): string => {
    if (formatter) {
      return formatter(val);
    }
    return val.toLocaleString();
  };

  return (
    <span className={cn('tabular-nums', className)}>
      {prefix}
      <span className={cn('transition-all duration-100', isAnimating && 'text-lime-400')}>
        {formatValue(animatedValue)}
      </span>
      {suffix}
    </span>
  );
}