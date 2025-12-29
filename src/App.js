import React from 'react';
import './App.css';
import { MapPin, CheckCircle, Phone, ArrowRight, Zap, Dumbbell, Users, Clock } from 'lucide-react';

// ==========================================
// ⚡️ EDIT THIS FOR EACH GYM IN SALEM
// ==========================================
const config = {
    gymName: "I Fitness", // Change to Target Gym Name
    location: "Omalur Main Rd, Salem", // Change Location
    tagline: "Salem's Premium Fitness Destination",
    // Gym Interior Image (Wide shot)
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    accentColor: "text-red-500", // Red looks aggressive/energetic for Gyms
    buttonColor: "bg-red-600 hover:bg-red-500"
};

const whatsappLink = "https://wa.me/918883324555?text=Hi%20I%20Fitness,%20I%20want%20to%20know%20about%20membership%20plans.";

function App() {

    // ⚡️ ADD THIS STYLE BLOCK BEFORE THE RETURN
    const marqueeStyle = {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        animation: 'scrollText 20s linear infinite',
    };

    // ⚡️ INJECT THIS CSS KEYFRAME INTO THE HEAD
    // You can paste this right inside your main <div> or return block
    const styles = `
  @keyframes scrollText {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;


    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-red-500 selection:text-white">

            {/* 1. HERO SECTION: Facility Focus */}
            <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={config.heroImage}
                        alt="Gym Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-20px]">

                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                        <MapPin size={16} className="text-red-500" />
                        <span className="text-sm font-semibold tracking-wide uppercase text-slate-300">{config.gymName + ", " }{config.location}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-tight">
                        TRAIN LIKE A <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse">BEAST</span>
                    </h1>

                    <div className="font-beast py-3 text-2xl tracking-widest text-red-500 mb-2">
                        SALEM'S #1 FITNESS GYM
                    </div>

                    <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        <b className='text-red-500'>{config.gymName}</b> offers the best equipment, certified trainers, and fully AC floor in Salem. Stop waiting. Start lifting.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#membership_details" className={`${config.buttonColor} text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-red-900/20`}>
                            Get Membership Rates <ArrowRight size={20} />
                        </a>
                        <a href="#gallery" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-full transition-all">
                            View Gallery
                        </a>
                    </div>
                </div>
            </div>


            {/* Marque section */}
            {/* ⚡️ INFINITE SCROLL STRIP */}
            <div className="bg-red-600 py-3 overflow-hidden border-y-4 border-black relative z-20 rotate-[-1deg] scale-105 origin-left">

                {/* Inject the keyframes here */}
                <style>{styles}</style>

                {/* Apply the style object directly */}
                <div style={marqueeStyle}>

                    {/* ⚠️ IMPORTANT: We repeat the text TWICE to make the loop seamless */}
                    {/* SET 1 */}
                    <span className="text-black font-beast text-3xl font-bold tracking-widest mx-4">
                        • STRENGTH • CARDIO • CROSSFIT • POWERLIFTING • ZUMBA • PERSONAL TRAINING • STEAM BATH
                    </span>

                    {/* SET 2 (Duplicate) */}
                    <span className="text-black font-beast text-3xl font-bold tracking-widest mx-4">
                        • STRENGTH • CARDIO • CROSSFIT • POWERLIFTING • ZUMBA • PERSONAL TRAINING • STEAM BATH
                    </span>

                    {/* SET 3 (Triplicate for safety on wide screens) */}
                    <span className="text-black font-beast text-3xl font-bold tracking-widest mx-4">
                        • STRENGTH • CARDIO • CROSSFIT • POWERLIFTING • ZUMBA • PERSONAL TRAINING • STEAM BATH
                    </span>

                    {/* SET 4 (Quadruplicate for safety) */}
                    <span className="text-black font-beast text-3xl font-bold tracking-widest mx-4">
                        • STRENGTH • CARDIO • CROSSFIT • POWERLIFTING • ZUMBA • PERSONAL TRAINING • STEAM BATH
                    </span>

                </div>
            </div>

            {/* 2. AMENITIES GRID: What Customers Pay For */}
            <section className="py-20 bg-slate-950 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Are <span className={config.accentColor}>#1 In Salem</span></h2>
                        <p className="text-slate-400">Everything you need to crush your fitness goals.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-colors">
                            <Dumbbell size={40} className="text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Pro Equipment</h3>
                            <p className="text-slate-400 text-sm">Imported Hammer Strength & Life Fitness machines.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-colors">
                            <Zap size={40} className="text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Fully AC Floor</h3>
                            <p className="text-slate-400 text-sm">Temperature controlled environment for peak performance.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-colors">
                            <Users size={40} className="text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                            <p className="text-slate-400 text-sm">Certified coaches available on floor 24/7 to guide you.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-colors">
                            <Clock size={40} className="text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Open All Days</h3>
                            <p className="text-slate-400 text-sm">5:00 AM - 10:00 PM. Sunday Open. Valet Parking available.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VISUAL PROOF SECTION */}
            <section id='gallery' className="py-20 bg-slate-900/50 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">A Space Built For <span className={config.accentColor}>Results.</span></h2>
                        <div className="space-y-4">
                            {[
                                "Separate Cardio & Strength Zones",
                                "Hygienic Steam & Shower Rooms",
                                "Crossfit & Functional Training Area",
                                "Personal Training Packages Available"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-red-500" />
                                    <span className="text-slate-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-800">
                            <p className="text-sm text-slate-500 mb-2">Monthly Plans starting at</p>
                            <p className="font-beast text-5xl  text-white">₹1,500<span className="text-lg text-slate-500 font-normal">/month</span></p>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div  className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop" className="rounded-xl shadow-2xl" alt="Weights" />
                        <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" className="rounded-xl shadow-2xl mt-8" alt="Cardio" />
                    </div>
                </div>
            </section>

            {/* TRAINER SPOTLIGHT */}
            <section className="py-20 bg-slate-900 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <img
                        src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800" // Replace with Owner's photo
                        alt="Head Coach"
                        className="w-64 h-64 object-cover rounded-2xl shadow-red-500/20 shadow-2xl"
                    />
                    <div>
                        <h3 className="text-red-500 font-bold tracking-widest mb-2 uppercase">Head Coach</h3>
                        <h2 className="text-4xl font-bold text-white mb-4">Master Your Fitness</h2>
                        <p className="text-slate-400 text-lg mb-6">
                            "At {config.gymName}, we don't just provide machines. We provide results.
                            With 7+ years of experience in Salem, I personally oversee every member's progress."
                        </p>
                        <p className="font-bold text-white">- [Owner Name]</p>
                    </div>
                </div>
            </section>

            {/* 4. FOOTER: WhatsApp CTA */}
            <section id='membership_details' className="py-12 bg-slate-950 border-t border-slate-900 text-center px-6">
                <h2 className="text-2xl font-bold mb-6">Join {config.gymName} Today</h2>


                {/* <a 
                    href="#" 
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full transition-all"
                    >
                    <Phone size={20} />
                    WhatsApp: 98765-XXXXX
                    </a> */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-10 rounded-full items-center gap-2"
                >
                    <Phone size={20} />
                    <span className='font-beast text-xl'> Get Membership Details </span>
                </a>
            </section>



            {/* LOCATION SECTION */}
            <section className="py-10 bg-slate-950 text-center">
                <h2 className="text-3xl font-bold mb-8 text-white">Visit <span className="text-red-500">{config.gymName}</span></h2>

                <div className="max-w-4xl mx-auto px-6 h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                    {/* PASTE THE GOOGLE MAP IFRAME HERE */}
                    <iframe
                        title='Location'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.9237490417427!2d78.13095537481905!3d11.676587088532314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf12398dd8fa5%3A0xc0c6b382895c0aff!2sI%20Fitness%20Gym!5e1!3m2!1sen!2sin!4v1767031440147!5m2!1sen!2sin" // <-- Paste his map link here
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>


                    
                </div>

                <p className="mt-6 text-slate-400 text-lg w-4/5 m-auto">
                    📍1st Floor Jayarathna Complex Omalur Main Rd, SIDCO Industrial Estate, Narasothipatti, Salem, Tamil Nadu 636004.
                </p>
            </section>

            <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center px-6">
                <p className="mt-8 text-slate-600 text-sm">© 2025 {config.gymName} • Built with 💪</p>
            </footer>

        </div>
    );
}

export default App;