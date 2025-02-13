export interface Profile {
  id: string;
  name: string;
  title: string;
  specialization: string;
  institution: string;
  credentials: Credential[];
  skills: Skill[];
  achievements: Achievement[];
  publications: Publication[];
  availability: Availability[];
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verified: boolean;
  verifiedBy?: string;
  documentUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  endorsements: number;
  endorsedBy: string[];
  category: 'clinical' | 'research' | 'technical' | 'soft';
  level?: 'beginner' | 'intermediate' | 'expert';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'publication' | 'award' | 'certification' | 'research';
  url?: string;
  institution?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  date: string;
  authors: string[];
  abstract: string;
  doi?: string;
  citations: number;
  url?: string;
}

export interface Availability {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  type: 'consultation' | 'mentorship' | 'collaboration';
  recurring: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: Attachment[];
  category: 'direct' | 'consultation' | 'collaboration';
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
}

export interface Webinar {
  id: string;
  title: string;
  description: string;
  presenter: Profile;
  date: string;
  duration: number;
  category: string;
  registrants: number;
  recording?: string;
  materials?: Attachment[];
}

export interface Forum {
  id: string;
  title: string;
  description: string;
  category: string;
  posts: ForumPost[];
  subscribers: number;
  lastActivity: string;
}

export interface ForumPost {
  id: string;
  authorId: string;
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: ForumReply[];
  tags: string[];
}

export interface ForumReply {
  id: string;
  authorId: string;
  content: string;
  timestamp: string;
  likes: number;
  endorsed: boolean;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  contactInfo: ContactInfo;
  primaryPhysician: string;
  conditions: string[];
  medications: Medication[];
  appointments: Appointment[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  prescribedBy: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  type: 'consultation' | 'followUp' | 'emergency';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}