'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedCounter from './AnimatedCounter';

interface WeightCounterProps {
  totalKg: number;
  className?: string;
  showUnit?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function WeightCounter({
  totalKg,
  className,
  showUnit = true,
  size = 'lg',
}: WeightCounterProps) {
  const [displayData, setDisplayData] = useState({
    amount: 0,
    unit: 'KG',
    rawValue: 0,
  });

  useEffect(() => {
    if (totalKg >= 1000) {
      const tons = totalKg / 1000;
      setDisplayData({
        amount: parseFloat(tons.toFixed(1)),
        unit: 'TONS',
        rawValue: tons,
      });
    } else {
      setDisplayData({
        amount: parseFloat(totalKg.toFixed(1)),
        unit: 'KG',
        rawValue: totalKg,
      });
    }
  }, [totalKg]);

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl',
  };

  const unitSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl lg:text-5xl',
  };

  const formatAmount = (value: number): string => {
    return value.toFixed(1);
  };

  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <AnimatedCounter
        value={displayData.rawValue}
        className={cn('font-bold text-lime-400', sizeClasses[size])}
        formatter={formatAmount}
      />
      {showUnit && (
        <span className={cn('text-lime-300 font-bold', unitSizeClasses[size])}>
          {displayData.unit}
        </span>
      )}
    </div>
  );
}