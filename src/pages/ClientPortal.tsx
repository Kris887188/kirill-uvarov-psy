import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Calendar, FileText, MessageSquare, Clock, ChevronRight } from 'lucide-react';
import { Booking, Assignment } from '../types';
import { format, parseISO } from 'date-fns';

const ClientPortal: React.FC = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      Promise.all([
        fetch('/api/bookings').then(res => res.json()),
        fetch(`/api/assignments/${user.id}`).then(res => res.json())
      ]).then(([bookingsData, assignmentsData]) => {
        setBookings(bookingsData.filter((b: any) => b.client_id === user.id));
        setAssignments(assignmentsData);
        setLoading(false);
      });
    }
  }, [user]);

  if (loading) return <div className="pt-40 text-center font-serif text-2xl">Loading your space...</div>;

  const upcomingSessions = bookings.filter(b => b.status !== 'completed' && b.status !== 'cancelled');
  const pastSessions = bookings.filter(b => b.status === 'completed');

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-serif text-marble-dark mb-2">Welcome, {user?.name}</h1>
            <p className="text-deep-brown/50 tracking-widest uppercase text-xs">Client Personal Cabinet</p>
          </div>
          <button onClick={logout} className="text-gold hover:text-deep-brown transition-colors uppercase text-xs tracking-widest font-bold">
            {t('common.logout')}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <section className="bg-white p-8 border border-beige/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-gold" size={24} />
                <h2 className="text-2xl font-serif">Upcoming Sessions</h2>
              </div>
              {upcomingSessions.length > 0 ? (
                <div className="space-y-4">
                  {upcomingSessions.map(session => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-ivory/30 border border-beige/10">
                      <div className="flex items-center gap-6">
                        <div className="text-center min-w-[60px]">
                          <p className="text-xs uppercase text-deep-brown/40">{format(parseISO(session.start_time), 'MMM')}</p>
                          <p className="text-2xl font-serif">{format(parseISO(session.start_time), 'dd')}</p>
                        </div>
                        <div>
                          <p className="font-serif text-lg">{format(parseISO(session.start_time), 'HH:mm')} — {format(parseISO(session.end_time), 'HH:mm')}</p>
                          <p className="text-sm text-deep-brown/50">Individual Consultation</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full ${
                        session.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-gold/10 text-gold'
                      }`}>
                        {session.status}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-deep-brown/40 italic py-4">No upcoming sessions scheduled.</p>
              )}
              <div className="mt-8">
                <a href="/consultations" className="text-gold font-serif flex items-center gap-2 hover:text-deep-brown transition-colors">
                  Book a new session <ChevronRight size={18} />
                </a>
              </div>
            </section>

            {/* Assignments */}
            <section className="bg-white p-8 border border-beige/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-gold" size={24} />
                <h2 className="text-2xl font-serif">Assignments & Materials</h2>
              </div>
              {assignments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {assignments.map(task => (
                    <div key={task.id} className="p-6 border border-beige/20 hover:border-gold transition-all group cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-serif text-xl group-hover:text-gold transition-colors">{task.title}</h3>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                          task.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-beige/30 text-deep-brown/60'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                      <p className="text-sm text-deep-brown/60 line-clamp-2 mb-4">{task.description}</p>
                      <p className="text-[10px] text-deep-brown/30 uppercase tracking-widest">Assigned: {format(parseISO(task.created_at), 'MMM dd, yyyy')}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-deep-brown/40 italic py-4">No assignments yet.</p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Messages Quick View */}
            <section className="bg-deep-brown text-ivory p-8 border border-beige/10 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-gold" size={24} />
                <h2 className="text-2xl font-serif">Messages</h2>
              </div>
              <p className="text-beige/60 text-sm mb-6">
                Direct communication with Kirill regarding your process.
              </p>
              <button className="w-full py-3 border border-gold/30 text-gold hover:bg-gold hover:text-ivory transition-all font-serif text-lg">
                Open Messenger
              </button>
            </section>

            {/* Past Sessions */}
            <section className="bg-white p-8 border border-beige/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-gold" size={24} />
                <h2 className="text-xl font-serif">Session History</h2>
              </div>
              <div className="space-y-4">
                {pastSessions.length > 0 ? (
                  pastSessions.map(session => (
                    <div key={session.id} className="flex justify-between items-center text-sm border-b border-beige/10 pb-2">
                      <span className="text-deep-brown/60">{format(parseISO(session.start_time), 'MMM dd, yyyy')}</span>
                      <span className="text-deep-brown/40 italic">Completed</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-deep-brown/30 italic">No past sessions recorded.</p>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
