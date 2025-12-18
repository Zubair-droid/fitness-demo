import React from 'react'
import './App.css';

// function App() {
//   return (
//     <div className="App">
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }*/

import { CheckCircle, Phone, ArrowRight, Star } from 'lucide-react';

// ==========================================
// ⚡️ EDIT THIS SECTION FOR EACH CLIENT
// ==========================================
const config = {
  trainerName: "ELITE FITNESS", // Change this to the lead's name
  tagline: "Premier Training", // Change location
  heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", // Generic Gym Image
  accentColor: "text-yellow-400" // Gold color for premium feel
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* 1. HERO SECTION: The First Impression */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={config.heroImage} 
            alt="Trainer Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[-50px]">
          <p className={`font-bold tracking-[0.2em] mb-4 ${config.accentColor} uppercase animate-fade-in-up`}>
            {config.tagline}
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-tight">
            Build Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Dream Physique</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Stop guessing. Start transforming. Premium 1:1 online coaching tailored to your lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center gap-2`}>
              Start Transformation <ArrowRight size={20} />
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 text-white font-semibold py-4 px-10 rounded-full transition-all">
              View Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* 2. THE "WHY ME" SECTION: Trust & Authority */}
      <section className="py-24 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl translate-y-8" alt="Gym" />
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl" alt="Training" />
            </div>

            {/* Right: Copy */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Not Just Another <span className={config.accentColor}>Workout Plan.</span></h2>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Most generic plans fail because they don't fit your life. I build systems that work specifically for your schedule, your food preferences, and your goals.
              </p>
              
              <div className="space-y-6">
                {[
                  "Customized Nutrition (No Starving)", 
                  "Daily WhatsApp Support & Accountability", 
                  "Video Form Correction Analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-slate-900 p-2 rounded-full text-yellow-500 border border-slate-800">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION: WhatsApp Focus (Crucial for India) */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} className="text-yellow-500 fill-yellow-500" />)}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to train with {config.trainerName}?</h2>
          <p className="text-slate-400 mb-10 text-xl">
            We only take 5 new clients per month to ensure quality.
          </p>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-bold text-xl py-5 px-12 rounded-full transition-all shadow-lg hover:shadow-green-500/20"
          >
            <Phone size={24} />
            Chat on WhatsApp
          </a>
          <p className="mt-6 text-sm text-slate-500">No pressure call. Let's discuss your goals.</p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 text-center text-slate-600 border-t border-slate-900">
        <div className="flex justify-center gap-6 mb-4">
          {/* <Instagram className="cursor-pointer hover:text-white transition-colors" /> */}
        </div>
        <p>© 2025 {config.trainerName}. All rights reserved.</p>
      </footer>

    </div>
  );
}


export default App;
