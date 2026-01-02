'use client';

import { cn } from '@/lib/utils';
import WeightCounter from './WeightCounter';
import AnimatedCounter from './AnimatedCounter';
import MilestoneProgress from './MilestoneProgress';

interface HeroSectionProps {
  totalCollected?: number;
  totalEntries?: number;
  onAddCollection?: () => void;
  loading?: boolean;
}

export default function HeroSection({
  totalCollected = 0,
  totalEntries = 0,
  onAddCollection,
  loading = false,
}: HeroSectionProps) {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Main headline */}
        <h1 className="text-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          One Bag{' '}
          <span className="text-lime-400">Better</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium">
          Small actions, big change—join the cleanup community.
        </p>

        {/* Stats display */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          {/* Total collected */}
          <div className="text-center">
            <WeightCounter 
              totalKg={totalCollected} 
              size="lg"
              className="mb-2"
            />
            <div className="text-gray-300 text-lg font-medium">
              TOTAL COLLECTED
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-gray-400" />
          <div className="md:hidden w-16 h-px bg-gray-400" />

          {/* Total entries */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <AnimatedCounter 
                value={totalEntries}
                className="font-bold text-white"
              />
            </div>
            <div className="text-gray-300 text-lg font-medium">
              COLLECTION ENTRIES
            </div>
          </div>
        </div>

        {/* Milestone Progress */}
        {!loading && totalCollected > 0 && (
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <MilestoneProgress 
                totalKg={totalCollected}
                size="md"
                className="text-white"
              />
            </div>
          </div>
        )}

        {/* Call to action */}
        <button
          onClick={onAddCollection}
          className={cn(
            'btn-adventure text-lg md:text-xl px-8 py-4 font-bold',
            'hover:scale-105 transition-all duration-200',
            'shadow-lg hover:shadow-xl'
          )}
        >
          ADD YOUR COLLECTION
        </button>

        {/* Motivational text */}
        <p className="mt-8 text-gray-300 text-lg max-w-2xl mx-auto">
          Every piece of trash collected makes a difference. 
          Share your environmental impact and inspire others to join the movement.
        </p>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-lime-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-lime-300 rounded-full animate-pulse opacity-40 animation-delay-1000" />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-50 animation-delay-2000" />
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-lime-400 rounded-full animate-pulse opacity-30 animation-delay-3000" />
    </section>
  );
}