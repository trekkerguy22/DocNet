import React from 'react';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Link,
  ExternalLink,
  Download,
  Share2,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';
import type { Publication } from '../../types';

interface ResearchCollaborationProps {
  publications: Publication[];
}

export function ResearchCollaboration({ publications }: ResearchCollaborationProps) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Research Dashboard */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Publications</h3>
              <p className="text-2xl font-bold">23</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            +3 new this month
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Collaborators</h3>
              <p className="text-2xl font-bold">45</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            From 12 institutions
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Link className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium">Citations</h3>
              <p className="text-2xl font-bold">892</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            +56 in the last 30 days
          </div>
        </div>
      </div>

      {/* Research Papers */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Publications</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add Publication
            </button>
          </div>
        </div>

        <div className="divide-y">
          {publications.map((publication) => (
            <div key={publication.id} className="p-6">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">{publication.title}</h3>
                  <p className="text-gray-600 mb-4">{publication.abstract}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                    <span>{publication.journal}</span>
                    <span>{new Date(publication.date).getFullYear()}</span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {publication.citations} citations
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.authors.map((author, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-sm bg-gray-100 rounded-full"
                      >
                        {author}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {publication.doi && (
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View on Publisher
                      </a>
                    )}
                    {publication.url && (
                      <button className="flex items-center gap-2 text-blue-600 hover:underline">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    )}
                    <button className="flex items-center gap-2 text-blue-600 hover:underline">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button className="flex items-center gap-2 text-blue-600 hover:underline">
                      <MessageSquare className="w-4 h-4" />
                      Discuss
                    </button>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-48 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-400" />
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