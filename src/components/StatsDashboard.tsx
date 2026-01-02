'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { formatDisplayAmount } from '@/lib/validations';
import { getMilestones, getNextMilestone } from '@/lib/utils';
import AnimatedCounter from './AnimatedCounter';
import MilestoneProgress from './MilestoneProgress';

interface StatsDashboardProps {
  totalKg: number;
  totalEntries: number;
  className?: string;
}

export default function StatsDashboard({
  totalKg,
  totalEntries,
  className,
}: StatsDashboardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievedMilestones = getMilestones(totalKg);
  const nextMilestone = getNextMilestone(totalKg);
  const displayAmount = formatDisplayAmount(totalKg);

  // Calculate environmental impact estimates
  const totalBags = totalKg / 1.0; // Convert kg back to bags (1 bag = 1kg)
  const estimatedBottles = Math.floor(totalKg / 0.02); // Assuming 20g per plastic bottle
  const garbageTruckProgress = (totalBags / 330).toFixed(2); // 330 bags = 1 garbage truck (10m³)

  const stats = [
    {
      label: 'Total Collected',
      value: `${displayAmount.amount} ${displayAmount.unit}`,
      icon: '🗑️',
      color: 'lime',
      component: <div className="text-3xl font-bold text-lime-600">{displayAmount.amount} {displayAmount.unit}</div>,
    },
    {
      label: 'Collection Entries',
      value: totalEntries,
      icon: '📊',
      color: 'blue',
      component: <AnimatedCounter value={totalEntries} className="text-3xl font-bold text-gray-800" />,
    },
    {
      label: 'Milestones Achieved',
      value: achievedMilestones.length,
      icon: '🏆',
      color: 'yellow',
      component: <AnimatedCounter value={achievedMilestones.length} className="text-3xl font-bold text-gray-800" />,
    },
    {
      label: 'Weight Equivalent',
      value: `${(totalKg).toFixed(1)}kg`,
      icon: '⚖️',
      color: 'green',
      component: <AnimatedCounter value={Math.round(totalKg)} className="text-3xl font-bold text-gray-800" suffix="kg" />,
    },
  ];

  const impactStats = [
    {
      label: 'Plastic Bottles Equivalent',
      value: `~${estimatedBottles.toLocaleString()}`,
      icon: '🍶',
      description: 'Approximate plastic bottles prevented from polluting',
    },
    {
      label: 'Garbage Trucks',
      value: totalBags >= 330 ? `${Math.floor(totalBags / 330)} truck${Math.floor(totalBags / 330) > 1 ? 's' : ''}` : `${garbageTruckProgress} trucks`,
      icon: '🚛',
      description: 'Garbage truck capacity filled (10m³ ≈ 330 bags)',
    },
    {
      label: 'Planet-Saving Actions',
      value: `${totalEntries}`,
      icon: '🌍',
      description: 'Each collection entry represents one action to save our planet',
    },
  ];

  return (
    <div className={cn('space-y-6', className)}>
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              'card-adventure p-4 sm:p-6 text-center transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
            <div className="mb-2">
              {stat.component}
            </div>
            <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Milestone Progress */}
      {nextMilestone && (
        <div className="card-adventure p-4 sm:p-6">
          <h3 className="text-display text-lg font-bold text-gray-800 mb-4 text-center">
            MILESTONE PROGRESS
          </h3>
          <MilestoneProgress totalKg={totalKg} size="lg" />
        </div>
      )}

      {/* Achieved Milestones */}
      {achievedMilestones.length > 0 && (
        <div className="card-adventure p-4 sm:p-6">
          <h3 className="text-display text-lg font-bold text-gray-800 mb-4 text-center">
            ACHIEVED MILESTONES
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {achievedMilestones.map((milestone) => {
              return (
                <div
                  key={milestone}
                  className="bg-lime-100 text-lime-800 px-3 py-2 rounded-full text-sm font-bold flex items-center gap-1"
                >
                  <span>🏆</span>
                  {milestone} bags
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Environmental Impact */}
      <div className="card-adventure p-4 sm:p-6">
        <h3 className="text-display text-lg font-bold text-gray-800 mb-4 text-center">
          ENVIRONMENTAL IMPACT
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {impactStats.map((impact, index) => (
            <div
              key={impact.label}
              className={cn(
                'text-center p-4 bg-gray-50 rounded-lg transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="text-2xl mb-2">{impact.icon}</div>
              <div className="text-xl font-bold text-gray-800 mb-1">
                {impact.label === 'Planet-Saving Actions' ? (
                  <AnimatedCounter value={totalEntries} className="text-xl font-bold text-gray-800" />
                ) : (
                  impact.value
                )}
              </div>
              <div className="text-sm font-medium text-gray-700 mb-2">{impact.label}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="card-adventure p-4 sm:p-6 text-center bg-gradient-to-r from-lime-50 to-green-50 border-lime-200">
        <div className="text-4xl mb-3">🌍</div>
        <h3 className="text-display text-lg font-bold text-gray-800 mb-2">
          KEEP THE MOMENTUM GOING!
        </h3>
        <p className="text-gray-600 mb-4 max-w-md mx-auto">
          Every piece of trash collected makes our planet cleaner. Post your cleanup photos on Instagram with #onebagbetter and inspire others to join the movement!
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm font-medium">
            #onebagbetter
          </span>
        </div>
        
        {/* Instagram link */}
        <div className="text-center">
          <a 
            href="https://www.instagram.com/onebagbetter/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-lime-600 transition-colors text-sm font-medium"
          >
            <img src="/instagram-icon.png" alt="Instagram" className="w-5 h-5" />
            Follow @onebagbetter on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}