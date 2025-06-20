import React from 'react';
import { MessageSquare, Users, Clock, Zap, ExternalLink, HelpCircle, Settings, BookOpen } from 'lucide-react';

function Support() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-500/10 p-4 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <HelpCircle className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">Support</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Our dedicated support team is here to help you get the most out of Trench Trackers. Join our Discord community for instant assistance and connect with fellow traders.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://discord.gg/TrenchTrackers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-3"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Join Our Discord</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Discord Support</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience unparalleled support through our active Discord community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-200 hover:scale-105 text-center">
              <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/30 mb-6 inline-block">
                <Clock className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Availability</h3>
              <p className="text-slate-300">Our community and support team are active around the clock to assist you</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105 text-center">
              <div className="bg-cyan-500/10 p-4 rounded-2xl border border-cyan-500/30 mb-6 inline-block">
                <Zap className="h-12 w-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Instant Responses</h3>
              <p className="text-slate-300">Get quick answers to your questions from our knowledgeable community</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20 hover:border-blue-300/50 transition-all duration-200 hover:scale-105 text-center">
              <div className="bg-blue-400/10 p-4 rounded-2xl border border-blue-400/30 mb-6 inline-block">
                <Users className="h-12 w-12 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Active Community</h3>
              <p className="text-slate-300">Connect with thousands of traders sharing tips, strategies, and insights</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-300/50 transition-all duration-200 hover:scale-105 text-center">
              <div className="bg-cyan-400/10 p-4 rounded-2xl border border-cyan-400/30 mb-6 inline-block">
                <Settings className="h-12 w-12 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Setup Assistance</h3>
              <p className="text-slate-300">Get help configuring your monitors, webhooks, and custom alerts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              How to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Help</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Follow these simple steps to get the support you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30 backdrop-blur-sm">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Join Our Discord</h3>
              <p className="text-slate-300">Click the link below to join our Discord server and become part of the Trench Trackers community</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30 backdrop-blur-sm">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Create a Ticket</h3>
              <p className="text-slate-300">Use our ticket system to get personalized support for your specific needs and questions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-400/30 backdrop-blur-sm">
                <span className="text-2xl font-bold text-blue-300">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Assistance</h3>
              <p className="text-slate-300">Our team will help you with setup, configuration, troubleshooting, and any other questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">How fast are the notifications?</h3>
              <p className="text-slate-300">Our monitoring speeds range from 0.2ms for X (Twitter) to 0.5ms for Instagram, making us the fastest in the market.</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Can I customize which accounts to monitor?</h3>
              <p className="text-slate-300">Absolutely! You can set up custom monitoring for specific accounts, keywords, and even create custom embeds for bullish signals.</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20">
              <h3 className="text-xl font-semibold text-white mb-4">Do you offer bundle discounts?</h3>
              <p className="text-slate-300">Yes! Bundling multiple platform monitors gets you cheaper pricing and priority access to new features and platforms.</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20">
              <h3 className="text-xl font-semibold text-white mb-4">What notification methods do you support?</h3>
              <p className="text-slate-300">We support both Webhook and Websocket notifications, allowing seamless integration with Discord, Telegram, and other platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-black/50 to-cyan-500/10 backdrop-blur-sm p-12 rounded-3xl border border-blue-500/20">
            <div className="flex justify-center mb-6">
              <img 
                src="/ChatGPT Image May 23, 2025, 01_42_34 AM copy.png" 
                alt="Trench Trackers Logo" 
                className="h-16 w-16 rounded-full border-2 border-blue-400/50"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help? We're Here for You
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join our Discord community where our team and thousands of traders are ready to help you succeed
            </p>
            <div className="flex justify-center">
              <a 
                href="https://discord.gg/TrenchTrackers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
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

export default Support;