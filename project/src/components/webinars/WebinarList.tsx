import React from 'react';
import { Calendar, Clock, Users, Video, BookOpen, Download } from 'lucide-react';
import type { Webinar } from '../../types';

interface WebinarListProps {
  webinars: Webinar[];
  onJoinWebinar: (webinarId: string) => void;
}

export function WebinarList({ webinars, onJoinWebinar }: WebinarListProps) {
  return (
    <div className="space-y-6">
      {/* Featured Webinar */}
      <div className="relative h-64 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=400"
          alt="Medical Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm mb-3">
            Featured
          </span>
          <h2 className="text-2xl font-bold mb-2">
            Advanced Cardiac Surgery Techniques
          </h2>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              March 25, 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              2:00 PM PST
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              234 registered
            </span>
          </div>
        </div>
      </div>

      {/* Webinar Categories */}
      <div className="grid grid-cols-4 gap-4">
        {['Clinical Updates', 'Research', 'Case Studies', 'Professional Development'].map(
          (category) => (
            <button
              key={category}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium mb-1">{category}</h3>
              <p className="text-sm text-gray-600">Browse webinars</p>
            </button>
          )
        )}
      </div>

      {/* Upcoming Webinars */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Upcoming Webinars</h3>
        <div className="grid gap-6">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Video className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium mb-2">{webinar.title}</h4>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(webinar.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {webinar.duration} minutes
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {webinar.registrants} registered
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onJoinWebinar(webinar.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Register Now
                    </button>
                    {webinar.materials && (
                      <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <BookOpen className="w-4 h-4" />
                        View Materials
                      </button>
                    )}
                    {webinar.recording && (
                      <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                        Download Recording
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}