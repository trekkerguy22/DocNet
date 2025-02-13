import React from 'react';
import { MessageSquare, Users, Bookmark, TrendingUp } from 'lucide-react';
import type { Forum } from '../../types';

interface ForumListProps {
  forums: Forum[];
  onSelectForum: (forumId: string) => void;
}

export function ForumList({ forums, onSelectForum }: ForumListProps) {
  return (
    <div className="space-y-6">
      {/* Featured Categories */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { name: 'Cardiology', icon: TrendingUp, count: 156 },
          { name: 'Neurology', icon: TrendingUp, count: 89 },
          { name: 'Oncology', icon: TrendingUp, count: 124 },
          { name: 'Pediatrics', icon: TrendingUp, count: 92 }
        ].map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <category.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} discussions</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Forum List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Discussions</h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">
                <TrendingUp className="w-4 h-4" />
                Trending
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200">
                <Bookmark className="w-4 h-4" />
                Saved
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y">
          {forums.map((forum) => (
            <button
              key={forum.id}
              onClick={() => onSelectForum(forum.id)}
              className="w-full p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{forum.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{forum.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {forum.posts.length} posts
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {forum.subscribers} subscribers
                    </span>
                    <span>Last active: {new Date(forum.lastActivity).toLocaleDateString()}</span>
                  </div>
                </div>
                {forum.category && (
                  <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {forum.category}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}