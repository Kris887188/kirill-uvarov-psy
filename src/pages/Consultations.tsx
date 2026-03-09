import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { format, addDays, startOfToday, isSameDay, parseISO } from 'date-fns';
import { Calendar as CalendarIcon, Clock, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Pricing, Availability } from '../types';
import { PRICING_DATA } from '../constants';
import { SEO } from '../components/SEO';

const Consultations: React.FC = () => {
  const { t, language } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [pricing, setPricing] = useState<Pricing[]>([]);
  const [availability, setAvailability] = useState<Availability[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // In a real app, these would be real API calls
    // For now, we'll use mock data or the constants
    fetch('/api/pricing').then(res => res.json()).then(setPricing).catch(() => {
      // Fallback to constants-based mock
      setPricing([
        { id: 1, service_name_ru: 'Первичная консультация', service_name_en: 'Initial Consultation', service_name_nl: 'Eerste consult', price: PRICING_DATA.initial, currency: '€', duration_minutes: 50 },
        { id: 2, service_name_ru: 'Индивидуальная сессия', service_name_en: 'Individual Session', service_name_nl: 'Individuele sessie', price: PRICING_DATA.individual, currency: '€', duration_minutes: 50 },
      ]);
    });
    
    fetch('/api/availability').then(res => res.json()).then(setAvailability).catch(() => {
      // Fallback to mock availability
      setAvailability([
        { id: 1, day_of_week: 1, start_time: '10:00', end_time: '18:00', is_active: 1 },
        { id: 2, day_of_week: 2, start_time: '10:00', end_time: '18:00', is_active: 1 },
        { id: 3, day_of_week: 3, start_time: '10:00', end_time: '18:00', is_active: 1 },
        { id: 4, day_of_week: 4, start_time: '10:00', end_time: '18:00', is_active: 1 },
        { id: 5, day_of_week: 5, start_time: '10:00', end_time: '16:00', is_active: 1 },
      ]);
    });
  }, []);

  const next14Days = Array.from({ length: 14 }, (_, i) => addDays(startOfToday(), i));

  const getAvailableSlots = (date: Date) => {
    const dayOfWeek = date.getDay();
    const dayAvailability = availability.find(a => a.day_of_week === dayOfWeek);
    if (!dayAvailability) return [];

    const slots = [];
    let current = parseISO(`${format(date, 'yyyy-MM-dd')}T${dayAvailability.start_time}`);
    const end = parseISO(`${format(date, 'yyyy-MM-dd')}T${dayAvailability.end_time}`);

    while (current < end) {
      slots.push(format(current, 'HH:mm'));
      current = new Date(current.getTime() + 60 * 60 * 1000); // 1 hour slots
    }
    return slots;
  };

  const handleBooking = async () => {
    if (!isAuthenticated) {
      window.location.href = `/login?redirect=/consultations`;
      return;
    }

    setIsBooking(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setBookingSuccess(true);
      setStep(3);
    } catch (e) {
      console.error(e);
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="pt-40 pb-24 bg-ivory min-h-screen">
      <SEO page={t('consultations.title')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-6xl font-serif text-marble-dark">{t('consultations.title')}</h1>
              <p className="text-deep-brown/70 text-xl leading-relaxed font-light">
                {t('consultations.p')}
              </p>
              
              <div className="bg-white p-10 border border-beige/30 shadow-sm space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                  {t('consultations.pricing_subtitle')}
                </h3>
                <div className="space-y-6">
                  {pricing.map(p => (
                    <div key={p.id} className="flex justify-between items-end border-b border-beige/10 pb-6">
                      <div className="space-y-1">
                        <p className="font-serif text-2xl text-marble-dark">
                          {p[`service_name_${language}` as keyof Pricing] as string}
                        </p>
                        <p className="text-sm text-deep-brown/40 uppercase tracking-widest">{p.duration_minutes} {t('pricing.duration')}</p>
                      </div>
                      <p className="text-3xl font-serif text-gold">{p.price} {p.currency}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-deep-brown/40 italic text-sm">
                  <ShieldCheck size={18} className="text-gold/50" />
                  <p>{t('consultations.pricing_note')}</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-marble-dark">{t('consultations.expect_title')}</h3>
              <ul className="space-y-6">
                {t('consultations.expect_items').map((item: string, i: number) => (
                  <li key={i} className="flex gap-6 items-start">
                    <span className="text-gold font-serif text-2xl italic opacity-40">0{i + 1}</span>
                    <span className="text-deep-brown/70 text-lg font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Disclaimer Box */}
            <div className="p-8 bg-marble-dark/5 border border-marble-dark/10 rounded-sm space-y-4">
              <div className="flex items-center gap-3 text-marble-dark">
                <AlertCircle size={20} />
                <h4 className="font-serif text-lg">{t('legal.disclaimer_title')}</h4>
              </div>
              <p className="text-sm text-deep-brown/60 leading-relaxed">
                {t('legal.disclaimer_p1')} {t('legal.disclaimer_p2')}
              </p>
            </div>
          </div>

          {/* Booking Side */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="bg-white p-8 md:p-12 border border-beige/30 shadow-[0_40px_100px_rgba(0,0,0,0.05)] rounded-sm">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <h2 className="text-3xl font-serif text-marble-dark">{t('consultations.select_date')}</h2>
                        <div className="w-12 h-px bg-gold/30"></div>
                      </div>
                      
                      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                        {next14Days.map(date => (
                          <button
                            key={date.toISOString()}
                            onClick={() => {
                              setSelectedDate(date);
                              setSelectedSlot(null);
                            }}
                            className={`p-3 text-center rounded-sm transition-all duration-300 ${
                              isSameDay(selectedDate, date)
                                ? 'bg-marble-dark text-ivory shadow-lg'
                                : 'hover:bg-beige/10 text-marble-dark/60'
                            }`}
                          >
                            <p className="text-[10px] uppercase tracking-widest mb-1 opacity-60">{format(date, 'EEE')}</p>
                            <p className="text-xl font-serif">{format(date, 'd')}</p>
                          </button>
                        ))}
                      </div>

                      <div className="space-y-6">
                        <h2 className="text-3xl font-serif text-marble-dark">{t('consultations.select_slot')}</h2>
                        
                        <div className="grid grid-cols-3 gap-3">
                          {getAvailableSlots(selectedDate).length > 0 ? (
                            getAvailableSlots(selectedDate).map(slot => (
                              <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                className={`p-4 border transition-all duration-300 font-serif text-lg rounded-sm ${
                                  selectedSlot === slot
                                    ? 'bg-gold border-gold text-ivory shadow-md'
                                    : 'border-beige/20 hover:border-gold/50 text-marble-dark/70'
                                }`}
                              >
                                {slot}
                              </button>
                            ))
                          ) : (
                            <p className="col-span-3 text-center py-12 text-deep-brown/30 italic font-light">
                              No availability on this day.
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        disabled={!selectedSlot}
                        onClick={() => setStep(2)}
                        className="w-full btn-primary py-5 text-lg tracking-[0.2em]"
                      >
                        {t('common.more')}
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-10"
                    >
                      <h2 className="text-4xl font-serif text-marble-dark">{t('consultations.confirm_title')}</h2>
                      <div className="bg-ivory/30 p-8 space-y-6 border border-beige/10 rounded-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-deep-brown/40 uppercase tracking-widest text-xs font-bold">{t('consultations.confirm_date')}</span>
                          <span className="font-serif text-xl text-marble-dark">{format(selectedDate, 'MMMM d, yyyy')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-deep-brown/40 uppercase tracking-widest text-xs font-bold">{t('consultations.confirm_time')}</span>
                          <span className="font-serif text-xl text-marble-dark">{selectedSlot}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-deep-brown/40 uppercase tracking-widest text-xs font-bold">{t('consultations.confirm_duration')}</span>
                          <span className="font-serif text-xl text-marble-dark">50 {t('pricing.duration')}</span>
                        </div>
                        <div className="flex justify-between items-center border-t border-beige/20 pt-6">
                          <span className="text-deep-brown/40 uppercase tracking-widest text-xs font-bold">{t('consultations.confirm_total')}</span>
                          <span className="font-serif text-3xl text-gold">
                            {pricing.length > 0 ? `${pricing[0].price} ${pricing[0].currency}` : '€80.00'}
                          </span>
                        </div>
                      </div>

                      {!isAuthenticated && (
                        <div className="flex items-start gap-4 p-6 bg-gold/5 border border-gold/10 text-gold-dark text-sm leading-relaxed">
                          <AlertCircle size={20} className="shrink-0 mt-0.5" />
                          <p>{t('consultations.confirm_note')}</p>
                        </div>
                      )}

                      <div className="flex gap-4">
                        <button onClick={() => setStep(1)} className="flex-1 btn-outline py-4">{t('common.back')}</button>
                        <button 
                          onClick={handleBooking} 
                          disabled={isBooking}
                          className="flex-[2] btn-primary py-4"
                        >
                          {isBooking ? '...' : t('hero.cta')}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16 space-y-8"
                    >
                      <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
                          <CheckCircle size={48} className="text-gold" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-4xl font-serif text-marble-dark">{t('consultations.success_title')}</h2>
                        <p className="text-deep-brown/60 text-lg font-light leading-relaxed max-w-sm mx-auto">
                          {t('consultations.success_p')}
                        </p>
                      </div>
                      <div className="pt-8">
                        <a href="/portal" className="btn-primary inline-block px-12">
                          {t('consultations.go_to_portal')}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultations;
