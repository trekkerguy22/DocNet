import React from 'react';
import { Search, Filter, Star, Clock } from 'lucide-react';
import type { Message } from '../../types';

interface MessageListProps {
  messages: Message[];
  onSelectMessage: (messageId: string) => void;
  selectedMessageId?: string;
}

export function MessageList({ messages, onSelectMessage, selectedMessageId }: MessageListProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Search and Filters */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 mt-3">
          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">
            <Star className="w-4 h-4" />
            Starred
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">
            <Clock className="w-4 h-4" />
            Recent
          </button>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <button
            key={message.id}
            onClick={() => onSelectMessage(message.id)}
            className={`w-full p-4 border-b hover:bg-gray-50 transition-colors ${
              selectedMessageId === message.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=50&h=50"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 text-left">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">Dr. James Wilson</h4>
                  <span className="text-xs text-gray-500">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{message.content}</p>
                {message.category !== 'direct' && (
                  <span className="inline-block mt-1 text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {message.category}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}