'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Modal from '@/components/Modal';
import CollectionEntryForm from '@/components/CollectionEntryForm';
import ActivityFeed from '@/components/ActivityFeed';
import StatsDashboard from '@/components/StatsDashboard';
import MilestoneAlert from '@/components/MilestoneAlert';
import WelcomeBanner from '@/components/WelcomeBanner';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';
import { getGlobalStats } from '@/lib/api';

export default function Home() {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [stats, setStats] = useState({
    totalCollected: 0,
    totalEntries: 0,
  });
  const [previousStats, setPreviousStats] = useState({
    totalCollected: 0,
    totalEntries: 0,
  });
  const [refreshActivityFeed, setRefreshActivityFeed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showMilestoneAlert, setShowMilestoneAlert] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);

  // Check if user has seen welcome banner before
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcomeBanner');
    if (!hasSeenWelcome) {
      setShowWelcomeBanner(true);
    }
  }, []);

  // Load initial stats
  useEffect(() => {
    const loadStats = async () => {
      try {
        const globalStats = await getGlobalStats();
        const newStats = {
          totalCollected: globalStats.totalAmountKg,
          totalEntries: globalStats.totalEntries,
        };
        setStats(newStats);
        setPreviousStats(newStats); // Initialize previous stats
      } catch (error) {
        console.error('Failed to load stats:', error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const handleAddCollection = () => {
    setIsFormOpen(true);
  };

  const handleFormSuccess = async (entry: any) => {
    setIsFormOpen(false);
    
    // Store previous stats for milestone detection
    setPreviousStats(stats);
    
    // Trigger activity feed refresh
    setRefreshActivityFeed(prev => prev + 1);
    
    // Reload stats from server to get accurate totals
    try {
      const globalStats = await getGlobalStats();
      const newStats = {
        totalCollected: globalStats.totalAmountKg,
        totalEntries: globalStats.totalEntries,
      };
      setStats(newStats);
      
      // Check for milestone achievement
      setShowMilestoneAlert(true);
    } catch (error) {
      console.error('Failed to reload stats:', error);
      // Fallback to optimistic update
      setStats(prev => ({
        totalCollected: prev.totalCollected + entry.amount,
        totalEntries: prev.totalEntries + 1,
      }));
    }
    
    console.log('Entry created successfully:', entry);
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
  };

  const handleMilestoneClose = () => {
    setShowMilestoneAlert(false);
  };

  const handleWelcomeBannerClose = () => {
    setShowWelcomeBanner(false);
    // Remember that user has seen the welcome banner
    localStorage.setItem('hasSeenWelcomeBanner', 'true');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Language Switcher - positioned in top-left */}
      <div className="fixed top-6 left-6 z-50">
        <LanguageSwitcher />
      </div>
      
      <HeroSection
        totalCollected={stats.totalCollected}
        totalEntries={stats.totalEntries}
        onAddCollection={handleAddCollection}
        loading={loading}
      />
      
      {/* Statistics Dashboard Section */}
      {!loading && stats.totalEntries > 0 && (
        <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {t('mainPage.impactDashboard')}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {t('mainPage.impactDescription')}
              </p>
            </div>
            <StatsDashboard
              totalKg={stats.totalCollected}
              totalEntries={stats.totalEntries}
            />
          </div>
        </section>
      )}
      
      {/* Activity Feed Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ActivityFeed 
            key={refreshActivityFeed}
            limit={8}
            showPagination={true}
          />
        </div>
      </section>
      
      {/* Collection Entry Modal */}
      <Modal isOpen={isFormOpen} onClose={handleFormCancel}>
        <CollectionEntryForm
          onSuccess={handleFormSuccess}
          onCancel={handleFormCancel}
        />
      </Modal>
      
      {/* Milestone Alert */}
      {showMilestoneAlert && (
        <MilestoneAlert
          totalKg={stats.totalCollected}
          previousTotalKg={previousStats.totalCollected}
          onClose={handleMilestoneClose}
        />
      )}
      
      {/* Welcome Banner */}
      {showWelcomeBanner && (
        <WelcomeBanner onClose={handleWelcomeBannerClose} />
      )}
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-display text-lg font-bold mb-2">One Bag Better</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <a 
              href="/privacy" 
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              {t('footer.privacyPolicy')}
            </a>
            <a 
              href="/terms" 
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              {t('footer.termsConditions')}
            </a>
            <a 
              href="/legal" 
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              {t('footer.legalNotice')}
            </a>
            <a 
              href="https://www.instagram.com/onebagbetter/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              @onebagbetter
            </a>
          </div>
          
          <div className="text-xs text-gray-400">
            <p>{t('footer.noDataCollection')}</p>
            <p className="mt-1">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}