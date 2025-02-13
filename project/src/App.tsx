import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { DashboardStats } from './components/dashboard/DashboardStats';
import { ConsultationForm } from './components/consultation/ConsultationForm';
import { MessageTemplates } from './components/messaging/MessageTemplates';
import { AvailabilityCalendar } from './components/scheduling/AvailabilityCalendar';
import { PatientPortal } from './components/patient/PatientPortal';
import { ForumList } from './components/forum/ForumList';
import { ResearchCollaboration } from './components/research/ResearchCollaboration';
import { useAuthStore } from './store/authStore';
import { supabase } from './lib/supabase';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const { setUser, setSession } = useAuthStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser, setSession]);

  const renderContent = () => {
    const content = {
      dashboard: (
        <div className="space-y-6">
          <DashboardStats />
          <div className="grid grid-cols-12 gap-6">
            {/* Profile Section */}
            <div className="col-span-3">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200"
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h2 className="text-xl font-bold">Dr. Sarah Chen</h2>
                  <p className="text-gray-600">Cardiology Specialist</p>
                  <p className="text-sm text-gray-500">Stanford Medical Center</p>
                </div>
              </div>
            </div>
            
            {/* Activity Feed */}
            <div className="col-span-6">
              <div className="space-y-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow p-6">
                    <h3 className="font-semibold mb-2">Activity Update {i + 1}</h3>
                    <p className="text-gray-600">Sample activity content for scrolling demonstration.</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="col-span-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
                    Schedule Consultation
                  </button>
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
                    View Patient Records
                  </button>
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      consultations: <ConsultationForm onSubmit={console.log} />,
      messages: (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <MessageTemplates onSelectTemplate={console.log} />
          </div>
          <div className="col-span-8">
            {/* Message content will go here */}
          </div>
        </div>
      ),
      schedule: <AvailabilityCalendar onTimeSelect={console.log} />,
      'patient-portal': <PatientPortal patient={{
        id: '123',
        name: 'John Doe',
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        contactInfo: {
          email: 'john@example.com',
          phone: '123-456-7890',
          address: {
            street: '123 Main St',
            city: 'Boston',
            state: 'MA',
            zipCode: '02108',
            country: 'USA'
          }
        },
        primaryPhysician: 'Dr. Sarah Chen',
        conditions: ['Hypertension'],
        medications: [
          {
            id: '1',
            name: 'Lisinopril',
            dosage: '10mg',
            frequency: 'Once daily',
            startDate: '2024-01-01',
            prescribedBy: 'Sarah Chen'
          }
        ],
        appointments: [
          {
            id: '1',
            patientId: '123',
            doctorId: 'Sarah Chen',
            date: '2024-03-20',
            time: '10:00 AM',
            type: 'followUp',
            status: 'scheduled',
            notes: 'Regular checkup'
          }
        ]
      }} />
    };

    return content[activeSection as keyof typeof content] || content.dashboard;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={setActiveSection} activeSection={activeSection} />
      <Header />
      <main className="ml-64 pt-16 p-6 h-[calc(100vh-4rem)] overflow-y-auto transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;