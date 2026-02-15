import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Star, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

/**
 * ============================================
 * 🎯 CUSTOMIZATION SECTION - EDIT HERE
 * ============================================
 * Update your logo, links, and contact info below
 */

const CONFIG = {
  // Logo Configuration
  logo: {
    // Option 1: Use an image file (recommended)
    // Put your logo in the /public folder and reference it like: "/logo.png"
    imageUrl: "src/logo/Delta-Logo.png", // Change this to your logo path
    // Option 2: Use text logo (if imageUrl is empty, text will be used)
    text: "",
    // Show image or text? Set to true to use image, false to use text
    useImage: true, // Set to true when you add your logo image
  },

  // Enrollment/Course Links
  courses: {
    elevateLink: "https://app.thedelta.co.in/learn/Scaler-NSET-Elevate-Track",
    achieversLink: "https://app.thedelta.co.in/learn/Scaler-NSET-Achiever-Track",
    eliteLink: "https://app.thedelta.co.in/learn/Scaler-NSET-Elite-Track",
  },

  // Social Media Links
  social: {
    linkedin: "https://www.linkedin.com/company/the-delta-education",
    instagram: "https://www.instagram.com/_delta_education_/",
    facebook: "https://facebook.com/yourpage",
  },

  // Contact Information
  contact: {
    email: "support@thedelta.co.in",
    phone: "+91 9901716335",
    address: "14, 3rd cross, Parappana Agrahar, Electronic City Rd, Electronic City Phase I, Electronic City, Bengaluru, Karnataka 560100",
  },

  // Additional Links
  links: {
    studentPortal: "https://app.thedelta.co.in/learn",
    freeGuide: "https://www.youtube.com/@DeltaEducation-18",
    sstPatterns: "https://www.scaler.com/school-of-technology/application/?rce=efdb36467c61&rcy=1",
    scholarship: "https://spoo.me/interviewprepdoc",
    privacy: "https://app.thedelta.co.in/learn/pages/privacy-policy.html",
    terms: "https://app.thedelta.co.in/learn/pages/terms-of-service.html"
  },

  // Mentors/Founders Configuration
  mentors: [
    {
      name: "Shreshtha Sharma",
      role: "Co-Founder & Head of Operations",
      photo: "src/founder-images/Shreshtha.webp", // Replace with your photo URL or /photo1.jpg
      linkedin: "https://www.linkedin.com/in/shreshthaaaa/",
    },
    {
      name: "Hemkesh Kantawala",
      role: "Co-Founder & Head of Finance",
      photo: "src/founder-images/hemkesh.jpg",
      linkedin: "https://www.linkedin.com/in/hemkesh-kantawala",
    },
    {
      name: "Shrimay Somani",
      role: "Co-Founder & Head of Growth",
      photo: "src/founder-images/Shrimay.webp",
      linkedin: "https://www.linkedin.com/in/shrimay-somani-9769a12a2/",
    },
    {
      name: "Sourashis Sarkar",
      role: "Co-Founder & CEO",
      photo: "src/founder-images/Sourashis.webp",
      linkedin: "https://www.linkedin.com/in/sarkar-sourashis/",
    },
    {
      name: "Krishna Patidar",
      role: "Co-Founder & CTO",
      photo: "src/founder-images/krishna.jpeg",
      linkedin: "https://www.linkedin.com/in/krishna-rp/",
    },
  ],

  // Testimonials Configuration
  testimonials: [
    {
      name: "Pratyoosh Bhatia",
      tag: "Scaler School of Technology '29",
      photo: "src/testimonial-images/pratyoosh.jpg", // Replace with your photo URL or /testimonial1.jpg
      quote: "The combination of test papers and mock interviews gave me clarity on where I stood. The preparation felt focused and result-oriented.",
    },
    {
      name: "Shwetank Gupta",
      tag: "Scaler School of Technology '29",
      photo: "src/testimonial-images/shwetank.jpg", // Replace with your photo URL or /testimonial2.jpg
      quote: "The test series and interview prep combo was perfect. Practicing under timed conditions made a huge difference. Delta genuinely focuses on results.",
    },
    {
      name: "Sejal Pednekar",
      tag: "Scaler School of Technology '29",
      photo: "src/testimonial-images/sejal.jpg",
      quote: "The mock interviews felt exactly like the real thing. The feedback was brutally honest and extremely helpful. Elevate helped me walk into my interview fully confident.",
    },
  ],
};

/**
 * ============================================
 * END OF CUSTOMIZATION SECTION
 * ============================================
 */

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Logo Component
  const Logo = () => (
    <div className="flex items-center gap-2">
      {CONFIG.logo.useImage && CONFIG.logo.imageUrl ? (
        <img 
          src={CONFIG.logo.imageUrl} 
          alt={CONFIG.logo.text} 
          className="h-10 w-auto"
        />
      ) : (
        <>
          <div className="w-8 h-8 bg-[#0056D2] rounded text-white flex items-center justify-center font-bold text-xl">
            {CONFIG.logo.text.charAt(0)}
          </div>
          <span className="text-xl font-bold text-[#001E62] tracking-tight">
            {CONFIG.logo.text}
          </span>
        </>
      )}
    </div>
  );

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-[#0056D2] selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <button onClick={() => scrollToSection('courses')} className="hover:text-[#0056D2] transition">Courses</button>
            <button onClick={() => scrollToSection('results')} className="hover:text-[#0056D2] transition">Results</button>
            <button onClick={() => scrollToSection('why-delta')} className="hover:text-[#0056D2] transition">Why Delta</button>
            <button 
                    className="bg-[#0056D2] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
                    onClick={() => window.location.href = CONFIG.links.studentPortal}>
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full p-4 flex flex-col gap-4 shadow-xl">
            <button onClick={() => scrollToSection('about')} className="text-left font-medium">About</button>
            <button onClick={() => scrollToSection('courses')} className="text-left font-medium">Courses</button>
            <button onClick={() => scrollToSection('results')} className="text-left font-medium">Results</button>
            <button onClick={() => scrollToSection('courses')} className="bg-[#0056D2] text-white py-3 rounded-lg font-bold">Join Now</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="bg-[#001E62] pt-40 pb-56 px-6 text-center text-white relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-900/50 border border-blue-700 text-blue-200 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            New-Age Admissions Specialists
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Crack Admissions Into India’s<br/>
            <span className="text-[#3b82f6]">Most Selective</span> New-Age Colleges
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Specialized prep for Scaler School of Technology and other prestigious institutions. We don't just teach subjects; we master the selection process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('courses')}
              className="bg-[#0056D2] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              Explore Courses
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition"
            >
              View Results
            </button>
          </div>
        </div>
      </header>

      {/* --- FLOATING STATS SECTION --- */}
      <section className="px-6 -mt-32 relative z-20 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-lg text-[#0056D2]">
                <Users size={24} />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Learners</span>
            </div>
            <div className="text-4xl font-bold text-[#001E62]">2,500+</div>
            <p className="text-sm text-slate-500 mt-2 mb-4">learners across all courses</p>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#0056D2] w-[85%] h-full rounded-full"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0056D2] p-8 rounded-2xl shadow-xl shadow-blue-900/20 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-lg text-white">
                <TrendingUp size={24} />
              </div>
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Selection Rate</span>
            </div>
            <div className="text-4xl font-bold">48.7%</div>
            <p className="text-sm text-blue-100 mt-2 mb-4">Proven selection rate across all courses</p>
            <div className="w-full bg-blue-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-white w-[48.7%] h-full rounded-full"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-lg text-[#0056D2]">
                <ShieldCheck size={24} />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Rating</span>
            </div>
            <div className="text-4xl font-bold text-[#001E62]">4.6+</div>
            <p className="text-sm text-slate-500 mt-2 mb-4">Average rating across all courses</p>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#0056D2] w-[70%] h-full rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY DELTA (Image 2) --- */}
      <section id="why-delta" className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
             {/* Add an image here */}
              <img src="src\Gemini_Generated_Image_otemcbotemcbotem.png" alt="Why Delta" className="object-cover rounded-3xl" />
          {/* Floating 'Mentorship First' Card */}
          <div className="absolute bottom-10 -right-6 md:-right-12 bg-white p-6 rounded-xl shadow-2xl shadow-slate-200/50 max-w-xs z-10 border border-gray-50">
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-bold text-[#001E62] mb-6 leading-tight">
            Why Delta is different from <br/><span className="text-[#0056D2]">regular coaching</span>
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-lg">
            Most institutes focus on mass-producing notes. At Delta Education, we focus on the <span className="font-bold text-[#001E62]">New-Age Advantage</span>. We specialize in the unique entrance patterns of modern institutions like Scaler School of Technology.
          </p>
          <ul className="space-y-8">
            <li className="flex gap-4">
              <div className="mt-1 bg-blue-100 p-1 rounded-full h-fit">
                <CheckCircle2 size={20} className="text-[#0056D2]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Targeted Test Series</h4>
                <p className="text-slate-500">Mocks specifically designed to replicate the SST entrance level.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 bg-blue-100 p-1 rounded-full h-fit">
                <CheckCircle2 size={20} className="text-[#0056D2]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Industry Mentors</h4>
                <p className="text-slate-500">Get guidance from seniors already studying in these elite colleges.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* --- COMPARISON TABLE (Image 3) --- */}
      <section className="py-20 px-6 bg-[#fffaf5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001E62] mb-3">The Delta Edge</h2>
            <p className="text-slate-500">Comparing us with traditional coaching institutes</p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white">
            <div className="grid grid-cols-3 bg-[#001E62] text-white py-5 px-6 font-bold text-lg">
              <div className="col-span-1">Feature</div>
              <div className="col-span-1 text-center text-blue-200">Traditional Coaching</div>
              <div className="col-span-1 text-center text-white">Delta Education</div>
            </div>

            {[
              { feature: "Curriculum", trad: "Generalized JEE/CET prep", delta: "Custom SST & Tech-College Focus" },
              { feature: "Mentorship", trad: "Limited (Large Batches)", delta: "1:1 Personal Mentorship" },
              { feature: "Selection Rate", trad: "~15% to 20%", delta: "Proven 48.7% Selection" },
              { feature: "Post-Selection Support", trad: "None", delta: "College Roadmap & Skills" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 border-b border-gray-100 last:border-none group">
                <div className="col-span-1 p-6 font-bold text-[#001E62] flex items-center bg-white group-hover:bg-gray-50 transition">{row.feature}</div>
                <div className="col-span-1 p-6 text-slate-500 text-center flex items-center justify-center bg-white group-hover:bg-gray-50 transition">{row.trad}</div>
                <div className="col-span-1 p-6 text-[#001E62] font-bold text-center flex items-center justify-center bg-blue-50/50 relative overflow-hidden">
                   {/* Subtle highlight for Delta column */}
                   <div className="absolute inset-0 bg-[#0056D2]/5"></div>
                   <span className="relative z-10">{row.delta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING (Image 4) --- */}
      <section id="courses" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001E62] mb-4">Choose Your Path to Success</h2>
            <p className="text-slate-600">Select the program that fits your goals and current preparation level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Elevate */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-800">Elevate</h3>
              <div className="mt-4 mb-2 flex items-baseline">
                <span className="text-4xl font-bold text-slate-900">₹3,499</span>
                <span className="text-slate-500 text-sm ml-2">/one-time</span>
              </div>
              <p className="text-slate-500 text-sm mb-6 h-12">Best Interview Preparation Course for your first interview.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-600" /> Interview Preparation Modules</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-600" /> 3 Mock interviews</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-600" /> 1:1 Mentorship</li>
              </ul>
              <button 
                onClick={() => window.location.href = CONFIG.courses.elevateLink}
                className="w-full py-3 border border-[#0056D2] text-[#0056D2] font-bold rounded-lg hover:bg-blue-50 transition"
              >
                Enroll Now
              </button>
            </div>

            {/* Elite (Highlighted) */}
            <div className="relative border-2 border-[#0056D2] rounded-2xl p-8 shadow-2xl scale-105 z-10 bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0056D2] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Best Value
              </div>
              <h3 className="text-2xl font-bold text-[#001E62]">Elite</h3>
              <div className="mt-4 mb-2 flex items-baseline">
                <span className="text-4xl font-bold text-[#001E62]">₹7,999</span>
                <span className="text-slate-500 text-sm ml-2">/one-time</span>
              </div>
              <p className="text-slate-500 text-sm mb-6 h-12">Our most comprehensive program with 1:1 focus and interview prep.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-900"><CheckCircle2 size={16} className="text-green-600" /> Everything in Achievers</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-900"><CheckCircle2 size={16} className="text-green-600" /> Recorded Chapter-wise Lectures</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-900"><CheckCircle2 size={16} className="text-green-600" /> Unlimited 1:1 Mentorship</li>
                <li className="flex items-center gap-3 text-sm font-bold text-[#0056D2]"><Star size={16} className="fill-[#0056D2]" /> SST Interview Mastery</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-900"><CheckCircle2 size={16} className="text-green-600" /> Exclusive Whatsapp Community</li>
              </ul>
              <button 
                onClick={() => window.location.href = CONFIG.courses.eliteLink}
                className="w-full py-4 bg-[#0056D2] text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg"
              >
                Get Elite Access
              </button>
            </div>

            {/* Achievers */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-800">Achievers</h3>
              <div className="mt-4 mb-2 flex items-baseline">
                <span className="text-4xl font-bold text-slate-900">₹4,999</span>
                <span className="text-slate-500 text-sm ml-2">/one-time</span>
              </div>
              <p className="text-slate-500 text-sm mb-6 h-12">The gold standard for intensive prep. Includes all mocks and mock interview sessions.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-600" /> Everything in Elevate</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-600" /> 10 Mock Tests</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 size={16} className="text-green-600" /> Weekly 2 live Doubt solving sessions</li>
              </ul>
              <button 
                onClick={() => window.location.href = CONFIG.courses.achieversLink}
                className="w-full py-3 border border-[#0056D2] text-[#0056D2] font-bold rounded-lg hover:bg-blue-50 transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MENTORS (Image 5) --- */}
      <section className="py-20 px-6 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001E62] mb-3">Meet the Mentors</h2>
          <p className="text-slate-500 mb-12">Academic pedigree and industry experience combined.</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {CONFIG.mentors.map((mentor, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-32 h-32 rounded-full p-1 border-2 border-transparent group-hover:border-[#0056D2] transition-all mb-4">
                  <img src={mentor.photo} alt={mentor.name} className="w-full h-full rounded-full bg-white shadow-md object-cover" />
                </div>
                <h4 className="font-bold text-[#001E62] text-lg">{mentor.name}</h4>
                <p className="text-[#0056D2] text-xs font-bold uppercase tracking-wide mb-2">{mentor.role}</p>
                <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} className="text-slate-400 hover:text-[#0056D2] cursor-pointer transition" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUCCESS STORIES (Image 6) --- */}
      <section className="py-24 px-6 bg-white" id="results">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001E62] mb-3">Success Stories</h2>
            <p className="text-slate-500">Hear it from the ones who made it to their dream colleges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONFIG.testimonials.map((story, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                    <img src={story.photo} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001E62] leading-tight">{story.name}</h4>
                    <span className="text-xs font-bold text-[#0056D2]">{story.tag}</span>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-6 flex-grow">"{story.quote}"</p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER (Image 7) --- */}
      <footer className="bg-[#001E62] text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-blue-800 pb-12 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed mb-6">
              Delta Education prepares you for new-age college entrances with expert mentorship and high-quality resources
            </p>
            <div className="flex gap-4">
              <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#0056D2] transition cursor-pointer">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${CONFIG.contact.email}`} className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#0056D2] transition cursor-pointer">
                <Mail size={16} />
              </a>
              {/* youtube */}
              <a href="https://www.youtube.com/@DeltaEducation-18" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#0056D2] transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M10.34 5.16a1.5 1.5 0 0 1 2.32 0l7.5 12A1.5 1.5 0 0 1 19.5 19H4.5a1.5 1.5 0 0 1-1.26-2.34l7.5-12Z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href={CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#0056D2] transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M2.25 3c-.621 0-1.125.504-1.125 1.125v15.75C1.125 20.496 1.629 21 2.25 21h15.75c.621 0 1.125-.504 1.125-1.125V4.125C19.125 3.504 18.621 3 18 3H2.25ZM16.971 5.625a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0ZM12 8.625a3.375 3.375 0 1 0 0 6.75 3.375 3.375 0 0 0 0-6.75Zm0 1.125a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-200/80 text-sm">
              <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition">Courses</button></li>
              <li><button onClick={() => scrollToSection('results')} className="hover:text-white transition">Success Results</button></li>
              <li><a href={CONFIG.links.studentPortal} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Student Portal</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-blue-200/80 text-sm">
              <li><a href={CONFIG.links.freeGuide} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Free Prep Guide</a></li>
              <li><a href={CONFIG.links.sstPatterns} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Enroll For Scaler NSET</a></li>
              <li><a href={CONFIG.links.scholarship} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Interview Preparation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-blue-200/80 text-sm">
              <li className="flex gap-3 items-center">
                <Mail size={16} className="shrink-0" />
                <a href={`mailto:${CONFIG.contact.email}`} className="hover:text-white transition">{CONFIG.contact.email}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="shrink-0" />
                <a href={`tel:${CONFIG.contact.phone}`} className="hover:text-white transition">{CONFIG.contact.phone}</a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="shrink-0 mt-1" />
                <span>{CONFIG.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-blue-300/50">
          <p>&copy; 2026 Delta Education. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href={CONFIG.links.privacy} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Privacy Policy</a>
            <a href={CONFIG.links.terms} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;