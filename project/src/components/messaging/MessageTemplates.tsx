import React from 'react';
import { FileText, Send } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  content: string;
  category: string;
}

interface MessageTemplatesProps {
  onSelectTemplate: (content: string) => void;
}

export function MessageTemplates({ onSelectTemplate }: MessageTemplatesProps) {
  const templates: Template[] = [
    {
      id: '1',
      title: 'Appointment Follow-up',
      content: 'Thank you for your recent visit. I wanted to follow up on your progress...',
      category: 'Follow-up'
    },
    {
      id: '2',
      title: 'Test Results',
      content: 'Your recent test results have arrived. I\'m pleased to inform you...',
      category: 'Results'
    },
    {
      id: '3',
      title: 'Prescription Renewal',
      content: 'This is regarding your prescription renewal request...',
      category: 'Medication'
    },
    {
      id: '4',
      title: 'Treatment Plan Update',
      content: 'Based on your recent progress, I\'d like to update your treatment plan...',
      category: 'Treatment'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Message Templates</h3>
      </div>
      <div className="divide-y">
        {templates.map((template) => (
          <div key={template.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium mb-1">{template.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {template.content}
                </p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {template.category}
                </span>
              </div>
              <button
                onClick={() => onSelectTemplate(template.content)}
                className="ml-4 p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}