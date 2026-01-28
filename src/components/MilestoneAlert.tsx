'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getMilestones, getNextMilestone, getMilestoneProgress } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface MilestoneAlertProps {
  totalKg: number;
  previousTotalKg?: number;
  onClose?: () => void;
  className?: string;
}

export default function MilestoneAlert({
  totalKg,
  previousTotalKg = 0,
  onClose,
  className,
}: MilestoneAlertProps) {
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);
  const [achievedMilestone, setAchievedMilestone] = useState<number | null>(null);

  useEffect(() => {
    // Check if a new milestone was reached
    const currentMilestones = getMilestones(totalKg);
    const previousMilestones = getMilestones(previousTotalKg);
    
    if (currentMilestones.length > previousMilestones.length) {
      // New milestone achieved!
      const newMilestone = currentMilestones[currentMilestones.length - 1];
      setAchievedMilestone(newMilestone);
      setShowAlert(true);
      
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setShowAlert(false);
        setTimeout(() => {
          onClose?.();
        }, 300);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [totalKg, previousTotalKg, onClose]);

  const handleClose = () => {
    setShowAlert(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  if (!achievedMilestone) return null;

  const getMilestoneMessage = (milestone: number) => {
    return {
      title: t('alerts.milestoneTitle', { milestone }),
      message: t('alerts.milestoneMessage', { milestone }),
      emoji: '🗑️',
    };
  };

  const milestoneInfo = getMilestoneMessage(achievedMilestone);

  return (
    <div
      className={cn(
        'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md mx-4 transition-all duration-300',
        showAlert ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none',
        className
      )}
    >
      <div className="bg-gradient-to-r from-lime-400 to-green-500 text-white rounded-xl shadow-2xl p-6 border border-lime-300">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl animate-bounce">{milestoneInfo.emoji}</div>
              <h3 className="text-display text-lg font-bold">
                {milestoneInfo.title}
              </h3>
            </div>
            <p className="text-lime-50 text-sm leading-relaxed mb-4">
              {milestoneInfo.message}
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors"
              >
                {t('alerts.awesome')}
              </button>
              <button
                onClick={() => {
                  // Share milestone achievement
                  const shareText = t('alerts.shareText', { milestone: achievedMilestone });
                  const url = encodeURIComponent(window.location.origin);
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${url}`, '_blank');
                }}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
              >
                {t('alerts.share')}
              </button>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white transition-colors ml-2"
            aria-label={t('alerts.close')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}