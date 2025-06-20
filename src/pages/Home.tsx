import React from 'react';
import { TrendingUp, Zap, Twitter, Instagram, Youtube, MessageSquare, ArrowRight, Users, Bell, BarChart3, ExternalLink, Lock, MessageCircle } from 'lucide-react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-500/10 p-4 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <img 
                src="/ChatGPT Image May 23, 2025, 01_42_34 AM copy.png" 
                alt="Trench Trackers Logo" 
                className="h-16 w-16 rounded-full border-2 border-blue-400/50"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Track the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">Trenches</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced Discord & Telegram bot that monitors X, Truth Social, Instagram, YouTube, and more 
            to deliver real-time crypto insights directly to your trading channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://discord.gg/TrenchTrackers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2"
            >
              <span>Join Our Discord</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-200 hover:bg-black/60">
              <Users className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">10K+ Traders</h3>
              <p className="text-slate-300">Active community using our signals</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-200 hover:bg-black/60">
              <BarChart3 className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-slate-300">Continuous platform surveillance</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-300/50 transition-all duration-200 hover:bg-black/60">
              <Zap className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Instant Alerts</h3>
              <p className="text-slate-300">Real-time notifications to your channels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Monitor <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">Every Platform</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Track crypto signals across all major social media platforms and stay ahead of market movements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-200 hover:scale-105 hover:bg-black/70">
              <Twitter className="h-12 w-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-2xl font-semibold text-white mb-3">X (Twitter)</h3>
              <p className="text-slate-300">Monitor influential crypto accounts, trending hashtags, and breaking news</p>
            </div>
            
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105 hover:bg-black/70">
              <MessageSquare className="h-12 w-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-2xl font-semibold text-white mb-3">Truth Social</h3>
              <p className="text-slate-300">Track posts from key financial influencers and market makers</p>
            </div>
            
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20 hover:border-blue-300/50 transition-all duration-200 hover:scale-105 hover:bg-black/70">
              <Instagram className="h-12 w-12 text-blue-300 mb-6 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-2xl font-semibold text-white mb-3">Instagram</h3>
              <p className="text-slate-300">Follow crypto stories, reels, and posts from top traders</p>
            </div>
            
            <div className="group bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-300/50 transition-all duration-200 hover:scale-105 hover:bg-black/70">
              <Youtube className="h-12 w-12 text-cyan-300 mb-6 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-2xl font-semibold text-white mb-3">YouTube</h3>
              <p className="text-slate-300">Monitor crypto channels, market analysis, and live streams</p>
            </div>

            {/* Coming Soon Platform */}
            <div className="group bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 hover:border-blue-400/40 transition-all duration-200 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative z-10">
                <div className="bg-slate-700/50 p-3 rounded-lg mb-6 flex items-center justify-center">
                  <Lock className="h-12 w-12 text-slate-400 group-hover:text-blue-400 transition-colors duration-200" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-400 group-hover:text-white mb-3 transition-colors duration-200">Coming Soon</h3>
                <p className="text-slate-500 group-hover:text-slate-300 transition-colors duration-200">More platforms being added to expand your crypto signal coverage</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="text-xs font-medium text-blue-400">Unlock Soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* And More Text */}
          <div className="text-center mt-12">
            <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-blue-400 to-cyan-400">
              ...and more platforms coming soon
            </p>
            <p className="text-slate-400 mt-2">Stay tuned for exciting new integrations</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">Tek</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge technology designed specifically for crypto traders and portfolio managers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30 backdrop-blur-sm">
                  <MessageCircle className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Discord and Telegram Integration</h3>
                  <p className="text-slate-300">Seamlessly integrate with your existing Discord servers and Telegram channels. We're always seeking feedback from our community to continuously improve our platform and deliver the features you need most.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
                  <Bell className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Alerts</h3>
                  <p className="text-slate-300">Set the accounts you want to track and forget about it</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400/10 p-3 rounded-lg border border-blue-400/30 backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast Speed</h3>
                  <p className="text-slate-300">Unmatched performance with speeds that leave competitors in the dust - we deliver signals faster than anyone else in the market</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-black/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
              <div className="bg-black/60 rounded-lg p-6 mb-6 border border-blue-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Live Signal</span>
                </div>
                <p className="text-slate-300 mb-2">🚀 $BTC mentioned by @CryptoWhale on X</p>
                <p className="text-sm text-slate-400">"Major accumulation phase detected. 📈"</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-blue-400 text-sm">Sentiment: Bullish</span>
                  <span className="text-slate-400 text-sm">2 min ago</span>
                </div>
              </div>
              
              <div className="bg-black/60 rounded-lg p-6 border border-cyan-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Platform Alert</span>
                </div>
                <p className="text-slate-300 mb-2">📺 New YouTube video from CoinBureau</p>
                <p className="text-sm text-slate-400">"Top 5 Altcoins for Q2 2025"</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-cyan-400 text-sm">Priority: High</span>
                  <span className="text-slate-400 text-sm">5 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Started in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">2 Simple Steps</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30 backdrop-blur-sm">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Join our Discord Server</h3>
              <p className="text-slate-300">Join Trench Trackers and create a ticket where we can further assist you</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30 backdrop-blur-sm">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Configure Alerts</h3>
              <p className="text-slate-300">Either using Webhook or Websocket, we will help you! Set up your custom CT Tracker for your favorite coins, influencers, and trading signals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-black/50 to-cyan-500/10 backdrop-blur-sm p-12 rounded-3xl border border-blue-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Level Up Your Trading?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of traders who are already using Trench Trackers to stay ahead of the market
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
    </>
  );
}

export default Home;