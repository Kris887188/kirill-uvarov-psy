import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Booking, User, Pricing } from '../types';
import { format, parseISO } from 'date-fns';
import { Calendar, Users, Settings, Euro, Check, X, Plus } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [pricing, setPricing] = useState<Pricing[]>([]);
  const [activeTab, setActiveTab] = useState<'calendar' | 'clients' | 'pricing' | 'settings'>('calendar');

  useEffect(() => {
    fetch('/api/bookings').then(res => res.json()).then(setBookings);
    fetch('/api/pricing').then(res => res.json()).then(setPricing);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-serif text-marble-dark mb-2">Admin Dashboard</h1>
            <p className="text-gold tracking-widest uppercase text-xs font-bold">Psychologist Control Panel</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Nav */}
          <div className="w-full md:w-64 space-y-2">
            {[
              { id: 'calendar', label: 'Calendar', icon: <Calendar size={20} /> },
              { id: 'clients', label: 'Clients', icon: <Users size={20} /> },
              { id: 'pricing', label: 'Pricing', icon: <Euro size={20} /> },
              { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-4 px-6 py-4 font-serif text-lg transition-all ${
                  activeTab === item.id 
                    ? 'bg-deep-brown text-ivory shadow-lg' 
                    : 'bg-white text-marble-dark hover:bg-beige/10'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white border border-beige/30 shadow-sm p-8">
            {activeTab === 'calendar' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-serif">Recent Bookings</h2>
                  <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
                    <Plus size={16} /> New Entry
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-beige/30 text-xs uppercase tracking-widest text-deep-brown/50">
                        <th className="pb-4 font-medium">Client</th>
                        <th className="pb-4 font-medium">Date & Time</th>
                        <th className="pb-4 font-medium">Status</th>
                        <th className="pb-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-beige/10">
                      {bookings.map(booking => (
                        <tr key={booking.id} className="group">
                          <td className="py-4 font-serif text-lg">{booking.client_name}</td>
                          <td className="py-4 text-sm text-deep-brown/70">
                            {format(parseISO(booking.start_time), 'MMM dd, HH:mm')}
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-full ${
                              booking.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-gold/10 text-gold'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-4 text-right space-x-2">
                            <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                              <Check size={18} />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                              <X size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-serif">Service Pricing</h2>
                <div className="grid grid-cols-1 gap-6">
                  {pricing.map(p => (
                    <div key={p.id} className="p-6 border border-beige/20 flex justify-between items-center">
                      <div>
                        <p className="font-serif text-xl">{p.service_name_ru}</p>
                        <p className="text-sm text-deep-brown/50">{p.duration_minutes} min</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-serif text-gold">€{p.price}</span>
                        <button className="text-xs uppercase tracking-widest font-bold text-deep-brown/40 hover:text-gold">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'clients' && (
              <div className="text-center py-20 text-deep-brown/30 italic">
                Client management module loading...
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="text-center py-20 text-deep-brown/30 italic">
                System settings module loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
