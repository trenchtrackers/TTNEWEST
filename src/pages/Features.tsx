import React from 'react';
import { Twitter, MessageSquare, Instagram, Youtube, Zap, Bell, Users, BarChart3, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

function Features() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">Features</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-16">
            Discover the powerful capabilities of each platform monitor and how they can enhance your trading strategy
          </p>
        </div>
      </section>

      {/* Trench Trackers - X */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                  <Twitter className="h-12 w-12 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">Trench Trackers - X</h2>
                  <p className="text-blue-400 text-lg">Lightning-fast Twitter monitoring</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400/20 p-2 rounded-lg mt-1">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Monitor up to 600 accounts</h3>
                    <p className="text-slate-300">Track new Tweets, follows, and any profile changes from your selected accounts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400/20 p-2 rounded-lg mt-1">
                    <MessageCircle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Embed for Bullish Tweets</h3>
                    <p className="text-slate-300">Set specific @mentions (Elon Musk, Trump, White House etc.) for priority alerts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400/20 p-2 rounded-lg mt-1">
                    <Zap className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Speeds starting at 0.2ms and below</h3>
                    <p className="text-slate-300">Unmatched speed ensures you're first to know about market-moving tweets</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400/20 p-2 rounded-lg mt-1">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Embedded videos and images</h3>
                    <p className="text-slate-300">Media content posted below tweets for quick copying and viewing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400/20 p-2 rounded-lg mt-1">
                    <Bell className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Websocket and Webhook Notifications</h3>
                    <p className="text-slate-300">Choose your preferred notification method for seamless integration</p>
                  </div>
                </div>
                
                <div className="text-blue-400 font-medium text-lg">and more...</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-black/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20">
              <div className="bg-black/60 rounded-xl p-6 border border-blue-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Twitter className="h-6 w-6 text-blue-400" />
                  <span className="text-white font-medium">Live X Monitor</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-slate-300 mb-3">🚀 @elonmusk just tweeted about $DOGE</p>
                <p className="text-sm text-slate-400 mb-4">"To the moon! 🌙 #DogeArmy"</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-400">Speed: 0.15ms</span>
                  <span className="text-slate-400">Just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trench Trackers - Truth Social */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-cyan-500/10 to-black/50 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 lg:order-1">
              <div className="bg-black/60 rounded-xl p-6 border border-cyan-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-cyan-400" />
                  <span className="text-white font-medium">Truth Social Monitor</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-slate-300 mb-3">📈 New Truth from @realDonaldTrump</p>
                <p className="text-sm text-slate-400 mb-4">"The market is looking very strong! 💪"</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-cyan-400">Speed: 0.32ms</span>
                  <span className="text-slate-400">2 min ago</span>
                </div>
              </div>
            </div>
            
            <div className="lg:order-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-cyan-500/10 p-4 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
                  <MessageSquare className="h-12 w-12 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">Trench Trackers - Truth Social</h2>
                  <p className="text-cyan-400 text-lg">Comprehensive Truth Social tracking</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-400/20 p-2 rounded-lg mt-1">
                    <Zap className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time notifications for posts</h3>
                    <p className="text-slate-300">Lightning-fast alerts ranging from 0.35ms and below</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-400/20 p-2 rounded-lg mt-1">
                    <ArrowRight className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time notifications for retruths</h3>
                    <p className="text-slate-300">Track when accounts share or amplify content</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-400/20 p-2 rounded-lg mt-1">
                    <MessageCircle className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time notifications for quote retruths</h3>
                    <p className="text-slate-300">Monitor quoted shares with additional commentary</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-400/20 p-2 rounded-lg mt-1">
                    <Users className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Profile picture updates</h3>
                    <p className="text-slate-300">Get notified when monitored accounts change their profile images</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-400/20 p-2 rounded-lg mt-1">
                    <BarChart3 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Full media support</h3>
                    <p className="text-slate-300">Video embedding, image embedding, article and link embedding support with clickable @mentions and posts</p>
                  </div>
                </div>
                
                <div className="text-cyan-400 font-medium text-lg">and more...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trench Trackers - Instagram */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-blue-300/10 p-4 rounded-2xl border border-blue-300/30 backdrop-blur-sm">
                  <Instagram className="h-12 w-12 text-blue-300" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">Trench Trackers - Instagram</h2>
                  <p className="text-blue-300 text-lg">Complete Instagram monitoring suite</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-300/20 p-2 rounded-lg mt-1">
                    <Zap className="h-5 w-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Photo posts monitoring</h3>
                    <p className="text-slate-300">Supports photo posts ranging from 0.5ms and below</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-300/20 p-2 rounded-lg mt-1">
                    <Users className="h-5 w-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Collaborator detection</h3>
                    <p className="text-slate-300">Detects posts where a monitored account is a collaborator</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-300/20 p-2 rounded-lg mt-1">
                    <MessageCircle className="h-5 w-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Caption display</h3>
                    <p className="text-slate-300">Captions are shown with clickable accounts and posts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-300/20 p-2 rounded-lg mt-1">
                    <BarChart3 className="h-5 w-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Stories monitoring</h3>
                    <p className="text-slate-300">Displays story images and videos from monitored accounts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-300/20 p-2 rounded-lg mt-1">
                    <ExternalLink className="h-5 w-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reels and video support</h3>
                    <p className="text-slate-300">Supports reels and video posts with full media embedding</p>
                  </div>
                </div>
                
                <div className="text-blue-300 font-medium text-lg">and more...</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-300/10 to-black/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-300/20">
              <div className="bg-black/60 rounded-xl p-6 border border-blue-300/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Instagram className="h-6 w-6 text-blue-300" />
                  <span className="text-white font-medium">Instagram Monitor</span>
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                </div>
                <p className="text-slate-300 mb-3">📸 New post from @cryptoinfluencer</p>
                <p className="text-sm text-slate-400 mb-4">"Just spotted this gem! 💎 #CryptoGems"</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-300">Speed: 0.48ms</span>
                  <span className="text-slate-400">5 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-black/50 to-cyan-500/10 backdrop-blur-sm p-12 rounded-3xl border border-blue-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join our Discord community and start monitoring the platforms that matter most to your trading strategy
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

export default Features;