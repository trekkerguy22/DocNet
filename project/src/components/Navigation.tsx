import React, { useRef, useEffect } from 'react';
import { 
  Home, 
  Users, 
  BookOpen, 
  Video, 
  Calendar,
  MessageSquare, 
  FileText, 
  GraduationCap,
  Settings,
  Globe,
  UserPlus,
  BookOpenCheck,
  Stethoscope
} from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { icon: Home, label: 'Dashboard', id: 'dashboard', section: 'main' },
    { icon: Users, label: 'Network', id: 'network', section: 'main' },
    { icon: BookOpen, label: 'Knowledge Base', id: 'knowledge-base', section: 'main' },
    { icon: Video, label: 'Consultations', id: 'consultations', section: 'main' },
    { separator: true },
    { icon: Globe, label: 'Live Webinars', id: 'webinars', section: 'knowledge' },
    { icon: BookOpenCheck, label: 'Research Hub', id: 'research', section: 'knowledge' },
    { icon: UserPlus, label: 'Mentorship', id: 'mentorship', section: 'knowledge' },
    { separator: true },
    { icon: Calendar, label: 'Schedule', id: 'schedule', section: 'tools' },
    { icon: MessageSquare, label: 'Messages', id: 'messages', section: 'tools' },
    { icon: FileText, label: 'Documents', id: 'documents', section: 'tools' },
    { icon: Stethoscope, label: 'Patient Portal', id: 'patient-portal', section: 'tools' },
    { separator: true },
    { icon: GraduationCap, label: 'Learning', id: 'learning', section: 'other' },
    { icon: Settings, label: 'Settings', id: 'settings', section: 'other' }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (navRef.current) {
        e.preventDefault();
        navRef.current.scrollTop += e.deltaY;
      }
    };

    const nav = navRef.current;
    if (nav) {
      nav.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (nav) {
        nav.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
      <div className="flex items-center gap-2 p-4">
        <GraduationCap className="w-8 h-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-800">DocNet</span>
      </div>
      
      <div 
        ref={navRef} 
        className="h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-transparent"
      >
        <div className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            item.separator ? (
              <hr key={index} className="my-4 border-gray-200" />
            ) : (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-3 w-full p-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform duration-200 ${
                  activeSection === item.id ? 'scale-110' : ''
                }`} />
                <span>{item.label}</span>
              </button>
            )
        ))}
        </div>
      </div>
    </nav>
  );
}