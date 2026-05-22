'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock, ChevronRight, Star, Shield, Award, Banknote, Gem, CheckCircle, ArrowRight, Users, TrendingUp } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const links = ['Home', 'Services', 'How It Works', 'Rates', 'Contact']
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f5a623] to-[#d4840f] flex items-center justify-center">
            <Gem className="w-5 h-5 text-[#0a0e1a]" />
          </div>
          <span className="font-bold text-xl text-white">SWARNA<span style={{background:'linear-gradient(135deg,#f5a623,#fbbf24,#d4840f)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>KARA</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="text-gray-300 hover:text-[#f5a623] transition-colors text-sm font-medium">{l}</a>
          ))}
          <button className="bg-gradient-to-r from-[#f5a623] to-[#d4840f] text-[#0a0e1a] font-bold px-6 py-2.5 rounded-xl text-sm shadow-lg shadow-[#f5a623]/30 hover:shadow-xl hover:shadow-[#f5a623]/50 transition-all hover:-translate-y-0.5">Apply Now</button>
        </div>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:'auto' }} exit={{ opacity:0,height:0 }}
            className="md:hidden bg-[#111827] border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="text-gray-300 hover:text-[#f5a623] transition-colors py-2" onClick={() => setMenuOpen(false)}>{l}</a>
              ))}
              <button className="bg-gradient-to-r from-[#f5a623] to-[#d4840f] text-[#0a0e1a] font-bold px-6 py-2.5 rounded-xl text-sm w-full">Apply Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
        {[0,1,2,3,4,5].map(i => (
          <motion.div key={i} className="absolute w-2 h-2 bg-[#f5a623] rounded-full opacity-40"
            style={{ left:`${15+i*15}%`, top:`${20+(i%3)*25}%` }}
            animate={{ y:[-20,20,-20], opacity:[0.2,0.6,0.2] }}
            transition={{ duration:4+i, repeat:Infinity, ease:'easeInOut' }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div initial={{ opacity:0,y:30 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8 }}>
          <p className="text-[#f5a623] text-lg md:text-xl mb-4 opacity-80" style={{ fontFamily:'Noto Sans Malayalam,sans-serif' }}>
            സ്വർണ്ണ വിശ്വാസം... സ്വർണ്ണകാരാ
          </p>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Your Gold.<br /><span style={{background:'linear-gradient(135deg,#f5a623,#fbbf24,#d4840f)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Your Trust.</span><br />Your SWARNAKARA.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Instant gold loans in Kollam with lowest interest rates, transparent process, and 5000+ satisfied families.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-[#f5a623] to-[#d4840f] text-[#0a0e1a] font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#f5a623]/30 flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
            <a href="tel:+919876543210" className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl text-gray-300 hover:border-[#f5a623] hover:text-[#f5a623] transition-all">
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>
        </motion.div>
        <motion.div className="mt-12" animate={{ y:[0,-15,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}>
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-[#f5a623] to-[#d4840f] p-1 shadow-2xl shadow-[#f5a623]/30">
            <div className="w-full h-full rounded-full bg-[#0a0e1a] flex items-center justify-center">
              <Gem className="w-16 h-16 md:w-24 md:h-24 text-[#f5a623]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustBar() {
  const stats = [
    { icon:Users, value:'5000+', label:'Happy Families' },
    { icon:Shield, value:'10+', label:'Years Trust' },
    { icon:Award, value:'RBI', label:'Registered' },
    { icon:Banknote, value:'15min', label:'Quick Disbursal' },
  ]
  return (
    <section className="py-16 bg-[#111827] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s,i) => (
            <motion.div key={i} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} transition={{ delay:i*0.1 }} className="text-center">
              <s.icon className="w-8 h-8 text-[#f5a623] mx-auto mb-2" />
              <div className="font-bold text-3xl text-white mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { icon:Gem, title:'Gold Loan', desc:'Get up to 90% of your gold value. Lowest interest rates starting at 9% p.a.', tag:'Up to 90% Value' },
    { icon:Banknote, title:'Loan Against Ornament', desc:'Flexible tenure from 1 month to 36 months. No foreclosure charges.', tag:'Flexible Tenure' },
    { icon:TrendingUp, title:'Quick Cash', desc:'15-minute approval and instant disbursal. Your gold works for you.', tag:'15 Min Approval' },
  ]
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">What We Offer</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s,i) => (
            <motion.div key={i} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ delay:i*0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:border-[#f5a623]/30 hover:-translate-y-1 transition-all"
              style={{ backdropFilter:'blur(10px)' }}>
              <div className="absolute top-0 right-0 bg-[#f5a623]/10 text-[#f5a623] text-xs font-bold px-3 py-1 rounded-bl-xl">{s.tag}</div>
              <s.icon className="w-12 h-12 text-[#f5a623] mb-4" />
              <h3 className="font-bold text-xl text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GoldRateTicker() {
  const rates = ['22K Gold: ₹7,425/gm *','24K Gold: ₹8,150/gm *','18K Gold: ₹6,120/gm *','22K Gold: ₹7,425/gm *','24K Gold: ₹8,150/gm *','18K Gold: ₹6,120/gm *']
  return (
    <div className="py-4 bg-gradient-to-r from-[#f5a623] to-[#d4840f] overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation:'ticker 20s linear infinite' }}>
        {rates.map((r,i) => <span key={i} className="mx-8 font-semibold text-[#0a0e1a]">{r}</span>)}
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    { num:'01', title:'Visit or Upload', desc:'Come to our branch or send photos of your gold ornaments' },
    { num:'02', title:'Gold Valuation', desc:'Our certified appraiser checks purity and weight' },
    { num:'03', title:'Loan Approval', desc:'Get instant approval with transparent terms' },
    { num:'04', title:'Cash Transfer', desc:'Receive money instantly in your account or cash' },
  ]
  return (
    <section id="how-it-works" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Simple Process</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">How It Works</h2>
        </motion.div>
        <div className="relative">
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#f5a623]/50 via-[#f5a623] to-[#f5a623]/50" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s,i) => (
              <motion.div key={i} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ delay:i*0.15 }} className="text-center relative">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f5a623] to-[#d4840f] flex items-center justify-center font-bold text-2xl text-[#0a0e1a] relative z-10">
                  {s.num}
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function InterestRates() {
  const rows = [
    { amount:'Up to ₹1 Lakh', rate:'9% p.a.', best:false },
    { amount:'₹1 Lakh - ₹5 Lakhs', rate:'11% p.a.', best:true },
    { amount:'₹5 Lakhs - ₹10 Lakhs', rate:'13% p.a.', best:false },
    { amount:'Above ₹10 Lakhs', rate:'Contact Us', best:false },
  ]
  return (
    <section id="rates" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Transparent Rates</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">Interest Rates</h2>
        </motion.div>
        <div className="space-y-4">
          {rows.map((r,i) => (
            <motion.div key={i} initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} transition={{ delay:i*0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between transition-all"
              style={r.best ? { boxShadow:'0 0 20px rgba(245,166,35,0.2)', borderColor:'rgba(245,166,35,0.5)' } : {}}>
              <span className="font-semibold text-lg text-white">{r.amount}</span>
              <div className="flex items-center gap-4">
                <span className="font-bold text-xl" style={r.best ? {background:'linear-gradient(135deg,#f5a623,#fbbf24)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'} : {color:'#fff'}}>{r.rate}</span>
                {r.best && <span className="bg-[#f5a623] text-[#0a0e1a] text-xs font-bold px-3 py-1 rounded-full">BEST</span>}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-[#f5a623] to-[#d4840f] text-[#0a0e1a] font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#f5a623]/30 flex items-center gap-2 mx-auto hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Calculate EMI <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const features = [
    { icon:CheckCircle, title:'Lowest Interest Rates', desc:'Starting at 9% p.a.' },
    { icon:Clock, title:'Instant Disbursal', desc:'15-minute approval' },
    { icon:Shield, title:'No Hidden Charges', desc:'100% transparent process' },
    { icon:Gem, title:'Secure Gold Storage', desc:'Your gold is safe with us' },
    { icon:Users, title:'Friendly Staff', desc:'Malayalam speaking team' },
    { icon:TrendingUp, title:'Flexible Repayment', desc:'Choose your tenure' },
  ]
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Why Us</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">Why Choose SWARNAKARA</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f,i) => (
            <motion.div key={i} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} transition={{ delay:i*0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#f5a623]/30 transition-all text-center">
              <f.icon className="w-10 h-10 text-[#f5a623] mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { name:'Rajesh K.', text:'Swarnakara helped me when I needed cash urgently. Process was so easy and staff was very friendly.', mal:'വേഗത്തിൽ ലോൺ കിട്ടി. ജീവനക്കാർ വളരെ സൗഹൃദപരം.' },
    { name:'Lakshmi A.', text:'Best gold loan rates in Kollam. I compared multiple places and Swarnakara had the lowest interest.', mal:'കൊല്ലത്തെ ഏറ്റവും കുറഞ്ഞ പലിശ. വിശ്വസനീയം.' },
    { name:'Mohammed S.', text:'Honest appraisal and no hidden charges. Been a customer for 5 years now.', mal:'5 വർഷമായി ഉപഭോക്താവ്. വഞ്ചനയില്ല.' },
  ]
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">What Our Customers Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r,i) => (
            <motion.div key={i} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ delay:i*0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_,j) => <Star key={j} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />)}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">"{r.text}"</p>
              <p className="text-[#f5a623] text-sm mb-4" style={{ fontFamily:'Noto Sans Malayalam,sans-serif' }}>{r.mal}</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f5a623] to-[#d4840f] flex items-center justify-center text-[#0a0e1a] font-bold text-sm">
                  {r.name[0]}
                </div>
                <span className="font-semibold text-white">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">Visit Our Branch</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#f5a623] mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Address</h3>
                <p className="text-gray-400">Near Pattathanam, Ammannada<br/>Kollam, Kerala - 691001</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#f5a623] mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-[#f5a623] transition-colors">+91 98765 43210</a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#f5a623] mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Working Hours</h3>
                <p className="text-gray-400">Monday - Saturday: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.5036197!2d76.58!3d8.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bd50f0c0d9e5%3A0x2a6b5f5c3e8c3a0!2sAmmannada%2C%20Kollam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%" style={{ border:0 }} allowFullScreen={true} loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f5a623] to-[#d4840f] flex items-center justify-center">
              <Gem className="w-4 h-4 text-[#0a0e1a]" />
            </div>
            <span className="font-bold text-white">SWARNA<span style={{background:'linear-gradient(135deg,#f5a623,#fbbf24)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>KARA</span></span>
          </div>
          <p className="text-gray-500 text-sm text-center">© 2026 SWARNAKARA Finance & Gold Loan. All rights reserved. Registered Moneylender.</p>
          <div className="flex gap-4">
            <a href="tel:+919876543210" className="text-gray-400 hover:text-[#f5a623] transition-colors text-sm">Call</a>
            <a href="#" className="text-gray-400 hover:text-[#f5a623] transition-colors text-sm">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <GoldRateTicker />
      <HowItWorks />
      <InterestRates />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
