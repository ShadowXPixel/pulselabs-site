export const services = [
  {
    slug: 'mc-status-bot',
    name: 'Minecraft Status Bot',
    description: 'Displays live Minecraft server status inside Discord.',
    cta: 'View Details',
    link: '/mc-status-bot',
  },
  {
    slug: 'custom-discord-bot',
    name: 'Custom Discord Bot',
    description: 'Tailored Discord bots built for specific community needs.',
    cta: 'Contact PulseLabs',
    link: 'https://discord.com/users/1399341822383489024',
  },
];

export const productDetails: { [key: string]: any } = {
  'mc-status-bot': {
    name: 'Minecraft Status Bot',
    description: 'A PulseLabs bot that displays live Minecraft server status directly in your Discord community, keeping your members updated effortlessly.',
    features: [
      'Core functionality overview for live server status.',
      'Automation features for periodic server monitoring.',
      'Customization options for commands and notifications.',
      'Performance and reliability focus for 24/7 uptime.',
    ],
    pricing: {
      free: {
        name: 'Free',
        features: [
          'Limited usage or manual actions', 
          'Basic access to status commands'
        ],
        cta: 'Get Access',
      },
      premium: {
        name: 'Premium',
        features: [
          'Automation or advanced features', 
          'Persistent setup with full automation', 
          'Priority support from PulseLabs'
        ],
        cta: 'Buy / Get Access',
      },
    },
    setupNote: 'You will be redirected to Discord to complete setup with PulseLabs.',
    contactLink: 'https://discord.com/users/1399341822383489024'
  },
};
