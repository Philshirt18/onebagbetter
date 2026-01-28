'use client';

import { cn } from '@/lib/utils';
import { getMilestoneProgress } from '@/lib/utils';
import { formatDisplayAmount } from '@/lib/validations';
import { useTranslation } from '@/hooks/useTranslation';

interface MilestoneProgressProps {
  totalKg: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function MilestoneProgress({
  totalKg,
  className,
  size = 'md',
}: MilestoneProgressProps) {
  const { t } = useTranslation();
  const { current, next, progress } = getMilestoneProgress(totalKg);
  
  if (!next) {
    // All milestones achieved!
    return (
      <div className={cn('text-center', className)}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🏆</span>
          <span className={cn(
            'font-bold text-lime-600',
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-base',
            size === 'lg' && 'text-lg'
          )}>
            {t('milestones.allAchieved')}
          </span>
        </div>
        <p className={cn(
          'text-gray-600',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-sm',
          size === 'lg' && 'text-base'
        )}>
          {t('milestones.allAchievedDescription')}
        </p>
      </div>
    );
  }

  const totalBags = totalKg / 0.5;
  const remainingBags = next - totalBags;

  return (
    <div className={cn('', className)}>
      <div className="flex items-center justify-between mb-2">
        <span className={cn(
          'font-medium',
          className?.includes('text-white') ? 'text-white/90' : 'text-gray-700',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-sm',
          size === 'lg' && 'text-base'
        )}>
          {t('milestones.nextMilestone')}
        </span>
        <span className={cn(
          'font-bold',
          className?.includes('text-white') ? 'text-lime-300' : 'text-lime-600',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-sm',
          size === 'lg' && 'text-base'
        )}>
          {next} bags
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className={cn(
        'bg-gray-200 rounded-full overflow-hidden',
        size === 'sm' && 'h-2',
        size === 'md' && 'h-3',
        size === 'lg' && 'h-4'
      )}>
        <div
          className="bg-gradient-to-r from-lime-400 to-lime-500 h-full transition-all duration-1000 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <span className={cn(
          className?.includes('text-white') ? 'text-white/70' : 'text-gray-500',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-xs',
          size === 'lg' && 'text-sm'
        )}>
          {progress.toFixed(1)}% {t('milestones.complete')}
        </span>
        <span className={cn(
          className?.includes('text-white') ? 'text-white/70' : 'text-gray-500',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-xs',
          size === 'lg' && 'text-sm'
        )}>
          {remainingBags.toFixed(1)} {t('stats.bags')} {t('milestones.toGo')}
        </span>
      </div>
    </div>
  );
}