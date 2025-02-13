import React, { useState } from 'react';
import { Paperclip, Send, Video, Calendar } from 'lucide-react';
import type { Message, Attachment } from '../../types';

interface MessageDetailProps {
  message?: Message;
}

export function MessageDetail({ message }: MessageDetailProps) {
  const [replyText, setReplyText] = useState('');

  if (!message) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a message to view details
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Message Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=50&h=50"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">Dr. James Wilson</h3>
              <p className="text-sm text-gray-600">Neurosurgeon • Stanford Medical</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Video className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Calendar className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Message Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=50&h=50"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm">{message.content}</p>
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {new Date(message.timestamp).toLocaleString()}
              </span>
            </div>
          </div>

          {message.attachments?.map((attachment: Attachment) => (
            <div key={attachment.id} className="ml-11">
              <a
                href={attachment.url}
                className="inline-flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Paperclip className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{attachment.name}</span>
                <span className="text-xs text-gray-500">
                  {(attachment.size / 1024 / 1024).toFixed(1)} MB
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Reply Box */}
      <div className="p-4 border-t">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=50&h=50"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="relative">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={3}
                />
                <div className="absolute right-2 bottom-2 flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Paperclip className="w-5 h-5 text-gray-500" />
                  </button>
                  <button
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                    disabled={!replyText.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}