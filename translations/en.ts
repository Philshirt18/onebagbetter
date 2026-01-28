export const en = {
  // Navigation
  navigation: {
    home: "Home",
    addEntry: "Add Entry",
    community: "Community",
    stats: "Stats",
    toggleMenu: "Toggle menu"
  },

  // Stats Dashboard
  stats: {
    totalCollected: "Total Collected",
    collectionEntries: "Collection Entries",
    milestonesAchieved: "Milestones Achieved",
    weightEquivalent: "Weight Equivalent",
    milestoneProgress: "MILESTONE PROGRESS",
    achievedMilestones: "ACHIEVED MILESTONES",
    environmentalImpact: "ENVIRONMENTAL IMPACT",
    plasticBottlesEquivalent: "Plastic Bottles Equivalent",
    garbageTrucks: "Garbage Trucks",
    planetSavingActions: "Planet-Saving Actions",
    plasticBottlesDescription: "Approximate plastic bottles prevented from polluting",
    garbageTrucksDescription: "Garbage truck capacity filled (10m³ ≈ 330 bags)",
    planetSavingDescription: "Each collection entry represents one action to save our planet",
    keepMomentumGoing: "KEEP THE MOMENTUM GOING!",
    keepMomentumDescription: "Every piece of trash collected makes our planet cleaner. Post your cleanup photos on Instagram with #onebagbetter and inspire others to join the movement!",
    followInstagram: "Follow @onebagbetter on Instagram",
    truck: "truck",
    trucks: "trucks",
    bags: "bags"
  },

  // Collection Entry Form
  form: {
    title: "ADD YOUR COLLECTION",
    labels: {
      amount: "Amount Collected *",
      unit: "Unit *",
      name: "Your Name (Optional)",
      location: "Location (Optional)"
    },
    placeholders: {
      amount: "Enter amount",
      name: "Enter your name",
      location: "Where did you collect trash?"
    },
    units: {
      bags: "Trash Bags",
      bagsShort: "Bags",
      kg: "Kilograms",
      kgShort: "kg",
      lbs: "Pounds",
      lbsShort: "lbs"
    },
    validation: {
      amountRequired: "Amount is required",
      amountInvalid: "Please enter a valid amount between 0.1 and 10,000",
      unitInvalid: "Please select a valid unit"
    },
    buttons: {
      cancel: "Cancel",
      submit: "Record Collection",
      submitting: "Recording..."
    },
    success: {
      title: "Great job!",
      description: "Your trash collection has been recorded.",
      shareTitle: "📸 Share your cleanup photos on Instagram with #onebagbetter!",
      twitter: "Twitter",
      instagram: "Instagram",
      facebook: "Facebook",
      hashtag: "Use hashtag: #onebagbetter"
    },
    tips: {
      ruleOfThumb: "💡 Rule of thumb: 1 bag (30L) ≈ 1kg of plastic packaging",
      nameCredit: "👤 Add your name to get credit for your cleanup efforts",
      locationShare: "💡 Add location to share more details on social media"
    },
    helperText: "Every piece of trash collected makes a difference! 🌱",
    helperTextInstagram: "Post your cleanup photos on Instagram with #onebagbetter",
    shareText: "Just collected {amount} {unit} of trash{location}{name}! 🌱 Join the movement to clean up our planet! #onebagbetter"
  },

  // Activity Feed
  activity: {
    title: "RECENT ACTIVITY",
    loading: "Loading activity...",
    error: "Failed to load activity feed",
    tryAgain: "Try Again",
    noActivity: "No collections yet!",
    noActivityDescription: "Be the first to record a trash collection and start making a difference.",
    collected: "Collected {amount}",
    collectedBy: "{name} collected {amount}",
    shareHint: "Share your cleanup with",
    shareHintShort: "Share with",
    pagination: {
      page: "Page {current} of {total}",
      previous: "Previous",
      next: "Next"
    },
    refresh: "Refresh activity"
  },

  // Milestone Progress
  milestones: {
    nextMilestone: "Next Milestone",
    complete: "complete",
    toGo: "to go",
    allAchieved: "ALL MILESTONES ACHIEVED!",
    allAchievedDescription: "You're a true environmental champion! 🌍"
  },

  // Milestone Alert
  alerts: {
    milestoneTitle: "🎉 {milestone} BAGS MILESTONE!",
    milestoneMessage: "Amazing! You've contributed to collecting {milestone} bags of trash. Every bag makes our planet cleaner!",
    awesome: "Awesome!",
    share: "🐦 Share",
    close: "Close milestone alert",
    shareText: "🎉 Just reached the {milestone} bags milestone in trash collection! Join the movement to clean up our planet! #onebagbetter"
  },

  // Legal Pages
  legal: {
    title: "Legal Notice / Aviso Legal",
    lastUpdated: "Last updated:",
    environmentalInitiative: "🌱 Environmental Initiative",
    environmentalDescription: "This website is operated for non-commercial, environmental purposes to encourage community cleanup efforts.",
    
    operatorInfo: {
      title: "Website Operator Information",
      operator: "Operator:",
      basedIn: "Based in:",
      email: "Email:"
    },
    
    purpose: {
      title: "Purpose and Nature",
      description: "One Bag Better is a non-commercial environmental initiative designed to:",
      points: [
        "Encourage community participation in environmental cleanup efforts",
        "Track collective impact of trash collection activities",
        "Provide motivation and recognition for environmental stewardship",
        "Build awareness about environmental responsibility"
      ],
      noCommercial: "This website operates without commercial intent and does not generate revenue."
    },
    
    law: {
      title: "Applicable Law and Jurisdiction",
      description: "This website is operated from Spain and complies with Spanish law, including:",
      lssi: "LSSI-CE (Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico)",
      gdpr: "GDPR (General Data Protection Regulation)",
      spanish: "Spanish Data Protection Law (LOPDGDD)"
    },
    
    intellectualProperty: {
      title: "Intellectual Property",
      description: "The content, design, and functionality of this website are owned by the operator. The environmental mission and community data are shared for the common good of environmental protection."
    },
    
    liability: {
      title: "Limitation of Liability",
      description: "This website is provided \"as is\" for environmental and educational purposes. The operator makes no warranties regarding the accuracy of community-submitted data and is not liable for any damages arising from the use of this website."
    },
    
    contact: {
      title: "Contact Information",
      description: "For questions about this legal notice or the website's operation, please contact:",
      instagram: "Instagram:"
    },
    
    relatedDocs: {
      title: "Related Legal Documents",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    },
    
    backButton: "Back to One Bag Better"
  },

  // Privacy Policy
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated:",
    promise: {
      title: "🌱 Our Privacy Promise",
      description: "We don't collect personal data or payments. We only collect rubbish—so together we can win time for what matters."
    },
    
    infoCollected: {
      title: "1. Information We Collect",
      description: "One Bag Better is designed with privacy in mind. We collect minimal, non-personal information:",
      doCollect: "What We DO Collect:",
      doCollectItems: [
        "Trash Collection Data: Amount collected (bags, kg, lbs)",
        "Optional Location: General location if you choose to share (e.g., \"Berlin\", \"Central Park\")",
        "Optional Name: First name or nickname if you want credit for your cleanup",
        "Timestamps: When collection entries are created",
        "Local Storage: Your welcome banner preference (stored in your browser only)"
      ],
      dontCollect: "What We DON'T Collect:",
      dontCollectItems: [
        "❌ Email addresses",
        "❌ Phone numbers",
        "❌ Payment information",
        "❌ Personal identification documents",
        "❌ Tracking cookies",
        "❌ IP addresses for tracking",
        "❌ Device fingerprinting",
        "❌ Third-party analytics",
        "❌ Advertising data"
      ]
    },
    
    howWeUse: {
      title: "2. How We Use Your Information",
      description: "The minimal data we collect is used exclusively for:",
      items: [
        "Displaying community statistics (total bags collected, entries, etc.)",
        "Showing recent community activity in the activity feed",
        "Calculating environmental impact estimates (bottles saved, garbage trucks filled)",
        "Providing milestone celebrations and progress tracking",
        "Generating shareable social media content (only when you choose to share)"
      ]
    },
    
    dataStorage: {
      title: "3. Data Storage & Security",
      description: "Your collection data is stored securely on our servers with the following protections:",
      items: [
        "Data is stored in a secure database with access controls",
        "No personal identifiers are linked to collection entries",
        "Data is used solely for community statistics and motivation",
        "We do not create user profiles or track individual behavior",
        "Local storage (browser-based) is used only for UI preferences"
      ]
    },
    
    dataSharing: {
      title: "4. Data Sharing",
      noSharing: "We do not share, sell, or distribute your data to third parties.",
      onlySharing: "The only \"sharing\" that occurs is:",
      items: [
        "Community statistics displayed publicly on the website (aggregated, anonymous)",
        "Recent activity feed showing optional names/locations you chose to provide",
        "Social media sharing features that YOU control and initiate"
      ]
    },
    
    socialMedia: {
      title: "5. Social Media Integration",
      description: "Our platform includes optional social media features:",
      items: [
        "Share buttons generate text based on your collection entry",
        "You control what gets posted to your social media accounts",
        "We link to our Instagram account @onebagbetter for community building",
        "No automatic posting or data sharing with social media platforms"
      ]
    },
    
    cookies: {
      title: "6. Cookies & Tracking",
      description: "We use minimal browser storage:",
      items: [
        "Local Storage: Remembers if you've seen the welcome banner",
        "No Tracking Cookies: We don't use cookies to track your behavior",
        "No Third-Party Analytics: No Google Analytics, Facebook Pixel, etc.",
        "No Advertising: No ad networks or marketing pixels"
      ]
    },
    
    rights: {
      title: "7. Your Rights",
      description: "Since we collect minimal, non-personal data, your rights are straightforward:",
      items: [
        "Transparency: This policy explains exactly what we collect",
        "Control: You choose what optional information to provide",
        "Access: Community data is visible to everyone on the platform",
        "No Account Required: Use the service without creating accounts"
      ]
    },
    
    children: {
      title: "8. Children's Privacy",
      description: "Our service is safe for all ages since we don't collect personal information. However, we recommend adult supervision for children participating in cleanup activities."
    },
    
    changes: {
      title: "9. Changes to This Policy",
      description: "We may update this privacy policy to reflect changes in our service. Any changes will be posted on this page with an updated date."
    },
    
    contact: {
      title: "10. Contact Us",
      description: "Questions about privacy? Reach out to us on Instagram"
    },
    
    backButton: "Back to One Bag Better"
  },

  // Terms & Conditions
  terms: {
    title: "Terms & Conditions",
    lastUpdated: "Last updated:",
    
    about: {
      title: "1. About One Bag Better",
      description: "One Bag Better is a community platform that tracks trash collection efforts to inspire environmental action. We believe in transparency and simplicity - we don't collect personal data or payments, we only collect rubbish data."
    },
    
    whatWeCollect: {
      title: "2. What We Collect",
      description: "When you use our service, we only collect:",
      items: [
        "Amount of trash collected (in bags, kg, or lbs)",
        "Optional location information (if you choose to provide it)",
        "Optional name (if you choose to provide it for credit)",
        "Timestamp of when the entry was created"
      ],
      dontCollect: "We do NOT collect: Email addresses, phone numbers, payment information, personal identification, tracking cookies, or any other personal data."
    },
    
    howWeUse: {
      title: "3. How We Use Your Information",
      description: "The minimal information we collect is used solely to:",
      items: [
        "Display community statistics and progress",
        "Show recent collection activities (if you provide a name/location)",
        "Calculate environmental impact metrics",
        "Motivate the community with milestone achievements"
      ]
    },
    
    dataStorage: {
      title: "4. Data Storage",
      description: "Your collection data is stored locally on our servers solely for the purpose of displaying community statistics. We do not share, sell, or distribute this information to third parties."
    },
    
    socialMedia: {
      title: "5. Social Media Integration",
      description: "Our platform includes social media sharing features that help you share your environmental impact. When you use these features:",
      items: [
        "We generate shareable text based on your collection entry",
        "You control what gets shared on your social media accounts",
        "We encourage use of the hashtag #onebagbetter to build community",
        "We may link to our Instagram account @onebagbetter"
      ]
    },
    
    responsibilities: {
      title: "6. User Responsibilities",
      description: "By using One Bag Better, you agree to:",
      items: [
        "Provide accurate information about your trash collection activities",
        "Use the platform for its intended environmental purpose",
        "Respect the community and avoid spam or inappropriate content",
        "Take responsibility for your own safety during cleanup activities"
      ]
    },
    
    disclaimer: {
      title: "7. Disclaimer",
      description: "One Bag Better is provided \"as is\" for community motivation and environmental awareness. We are not responsible for:",
      items: [
        "Safety during trash collection activities",
        "Accuracy of user-submitted data",
        "Availability of the service at all times",
        "Environmental impact calculations (these are estimates)"
      ]
    },
    
    changes: {
      title: "8. Changes to Terms",
      description: "We may update these terms occasionally to reflect changes in our service. Continued use of the platform constitutes acceptance of any changes."
    },
    
    contact: {
      title: "9. Contact",
      description: "Questions about these terms? Reach out to us on Instagram"
    },
    
    backButton: "Back to One Bag Better"
  },

  // Hero Section
  hero: {
    subtitle: "Track your environmental impact and inspire others to join the cleanup movement",
    totalCollected: "Total Collected",
    collectionEntries: "Collection Entries",
    addCollection: "ADD YOUR COLLECTION",
    motivationalText: "Every piece of trash collected makes a difference. Share your environmental impact and inspire others to join the movement."
  },

  // Main Page Sections
  mainPage: {
    impactDashboard: "IMPACT DASHBOARD",
    impactDescription: "See the collective impact we're making together in cleaning up our planet"
  },

  // Footer
  footer: {
    tagline: "Small actions, big change—join the cleanup community.",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    legalNotice: "Legal Notice",
    noDataCollection: "We don't collect personal data or payments. We only collect rubbish.",
    copyright: "© {year} One Bag Better. Making the world cleaner, one bag at a time."
  },

  // Language Switcher
  languageSwitcher: {
    label: "Language",
    english: "English",
    spanish: "Spanish",
    switchTo: "Switch to {language}",
    currentLanguage: "Current language: {language}"
  },

  // Common elements
  common: {
    loading: "Loading...",
    error: "An error occurred",
    retry: "Try again",
    close: "Close",
    back: "Back",
    next: "Next",
    previous: "Previous",
    save: "Save",
    cancel: "Cancel",
    submit: "Submit",
    edit: "Edit",
    delete: "Delete",
    confirm: "Confirm",
    yes: "Yes",
    no: "No"
  }
};

export type TranslationKeys = typeof en;