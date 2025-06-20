import React from 'react';
import { Twitter, MessageSquare, Instagram, Youtube, Lock, Check, Star, Zap, Crown, ExternalLink } from 'lucide-react';

function Pricing() {
  const platforms = [
    {
      name: 'X (Twitter)',
      icon: Twitter,
      price: 750,
      color: 'blue',
      features: [
        'Monitor up to 600 accounts',
        'Custom embed for bullish tweets',
        'Speeds starting at 0.2ms',
        'Embedded videos and images',
        'Websocket & Webhook notifications',
        'Real-time tweet alerts',
        'Profile change monitoring',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Truth Social',
      icon: MessageSquare,
      price: 350,
      color: 'cyan',
      features: [
        'Real-time post notifications (0.35ms)',
        'Retruth monitoring',
        'Quote retruth tracking',
        'Profile picture updates',
        'Video embedding support',
        'Image embedding support',
        'Clickable @mentions',
        'Article & link embedding'
      ]
    },
    {
      name: 'Instagram',
      icon: Instagram,
      price: 300,
      color: 'purple',
      features: [
        'Photo posts (0.5ms speed)',
        'Collaborator detection',
        'Caption display',
        'Story monitoring',
        'Reels & video support',
        'Clickable accounts',
        'Media embedding',
        'Real-time alerts'
      ]
    },
    {
      name: 'YouTube',
      icon: Youtube,
      price: 250,
      color: 'red',
      features: [
        'New video alerts',
        'Live stream monitoring',
        'Channel updates',
        'Video metadata tracking',
        'Thumbnail extraction',
        'Description monitoring',
        'Upload notifications',
        'Community posts'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500/10 to-blue-600/5',
        border: 'border-blue-500/30',
        hoverBorder: 'hover:border-blue-400/60',
        text: 'text-blue-400',
        button: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
        shadow: 'hover:shadow-blue-500/25',
        icon: 'text-blue-400'
      },
      cyan: {
        bg: 'from-cyan-500/10 to-cyan-600/5',
        border: 'border-cyan-500/30',
        hoverBorder: 'hover:border-cyan-400/60',
        text: 'text-cyan-400',
        button: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
        shadow: 'hover:shadow-cyan-500/25',
        icon: 'text-cyan-400'
      },
      purple: {
        bg: 'from-purple-500/10 to-purple-600/5',
        border: 'border-purple-500/30',
        hoverBorder: 'hover:border-purple-400/60',
        text: 'text-purple-400',
        button: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
        shadow: 'hover:shadow-purple-500/25',
        icon: 'text-purple-400'
      },
      red: {
        bg: 'from-red-500/10 to-red-600/5',
        border: 'border-red-500/30',
        hoverBorder: 'hover:border-red-400/60',
        text: 'text-red-400',
        button: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
        shadow: 'hover:shadow-red-500/25',
        icon: 'text-red-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 p-4 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Crown className="h-16 w-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Platform</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Select the monitoring services that align with your trading strategy. Bundle multiple platforms for enhanced coverage and priority access.
          </p>
          
          <div className="bg-gradient-to-r from-blue-500/10 via-black/50 to-cyan-500/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Star className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-semibold text-white">Bundle Discount Available</span>
              <Star className="h-6 w-6 text-yellow-400" />
            </div>
            <p className="text-slate-300">
              Bundling monitors gets you cheaper pricing and all groups get priority access to new features and platforms
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => {
              const colors = getColorClasses(platform.color);
              const Icon = platform.icon;
              
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm p-8 rounded-3xl border ${colors.border} ${colors.hoverBorder} transition-all duration-300 hover:scale-105 hover:bg-black/60 group`}
                >
                  {platform.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`bg-black/40 p-4 rounded-2xl border ${colors.border} mb-6 inline-block group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className={`h-12 w-12 ${colors.icon}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">${platform.price}</span>
                      <span className="text-slate-400">/month</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`h-5 w-5 ${colors.icon} mt-0.5 flex-shrink-0`} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="https://discord.gg/TrenchTrackers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${colors.button} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg ${colors.shadow} flex items-center justify-center space-x-2 group-hover:shadow-xl`}
                  >
                    <span>Get Started</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-600/30 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-50"></div>
            <div className="relative z-10">
              <div className="bg-slate-700/50 p-6 rounded-2xl mb-8 inline-block">
                <Lock className="h-16 w-16 text-slate-400" />
              </div>
              <h3 className="text-4xl font-bold text-slate-300 mb-4">More Platforms Coming Soon</h3>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                We're constantly expanding our monitoring capabilities. Stay tuned for exciting new platform integrations that will enhance your trading arsenal.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                  <span className="text-blue-400 font-medium">TikTok</span>
                </div>
                <div className="bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
                  <span className="text-cyan-400 font-medium">LinkedIn</span>
                </div>
                <div className="bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                  <span className="text-purple-400 font-medium">Reddit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Bundle <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Benefits</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Maximize your trading potential with our bundle packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-200">
              <div className="bg-yellow-500/20 p-3 rounded-lg mb-6 inline-block">
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Discounted Pricing</h3>
              <p className="text-slate-300">Save significantly when you bundle multiple platform monitors together</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-200">
              <div className="bg-blue-500/20 p-3 rounded-lg mb-6 inline-block">
                <Crown className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Priority Access</h3>
              <p className="text-slate-300">Get first access to new features, platforms, and beta testing opportunities</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
              <div className="bg-purple-500/20 p-3 rounded-lg mb-6 inline-block">
                <Star className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Enhanced Support</h3>
              <p className="text-slate-300">Receive premium support with faster response times and dedicated assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-black/50 to-cyan-500/10 backdrop-blur-sm p-12 rounded-3xl border border-blue-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Monitoring?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join our Discord community to discuss pricing, bundles, and get started with your custom monitoring setup
            </p>
            <div className="flex justify-center">
              <a 
                href="https://discord.gg/TrenchTrackers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <img 
                  src="/ChatGPT Image May 23, 2025, 01_42_34 AM copy.png" 
                  alt="Trench Trackers Logo" 
                  className="h-5 w-5 rounded-full"
                />
                <span>Join Our Discord</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;