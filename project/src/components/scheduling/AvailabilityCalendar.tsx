import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, X } from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface AvailabilityCalendarProps {
  onTimeSelect: (date: string, time: string) => void;
}

export function AvailabilityCalendar({ onTimeSelect }: AvailabilityCalendarProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '09:00', available: true },
    { id: '2', time: '10:00', available: false },
    { id: '3', time: '11:00', available: true },
    { id: '4', time: '14:00', available: true },
    { id: '5', time: '15:00', available: false },
    { id: '6', time: '16:00', available: true }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Availability Schedule</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Set Availability
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-6">
        {[...Array(7)].map((_, index) => {
          const date = new Date();
          date.setDate(date.getDate() + index);
          
          return (
            <button
              key={index}
              onClick={() => setSelectedDate(date.toISOString())}
              className={`p-4 border rounded-lg text-center ${
                selectedDate === date.toISOString()
                  ? 'border-blue-500 bg-blue-50'
                  : 'hover:bg-gray-50'
              }`}
            >
              <span className="block text-sm text-gray-600">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="block text-lg font-semibold mt-1">
                {date.getDate()}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {timeSlots.map((slot) => (
          <button
            key={slot.id}
            disabled={!slot.available}
            onClick={() => {
              setSelectedTime(slot.time);
              if (selectedDate) {
                onTimeSelect(selectedDate, slot.time);
              }
            }}
            className={`p-4 border rounded-lg ${
              !slot.available
                ? 'bg-gray-50 cursor-not-allowed'
                : selectedTime === slot.time
                ? 'border-blue-500 bg-blue-50'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-gray-600" />
              {!slot.available && (
                <span className="text-xs text-red-600">Unavailable</span>
              )}
            </div>
            <span className="block text-lg font-semibold">
              {slot.time}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}