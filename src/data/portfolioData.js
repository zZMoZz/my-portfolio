import {
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import { SiSpring, SiPostgresql } from 'react-icons/si';

export const profile = {
  name: 'Mohamed Mohsen',
  roles: ['Software Engineer', 'Backend Developer', 'Open Source Contributor', 'Problem Solver'],
  tagline: "I've learned that I still have a lot to learn.",
  resumeUrl: '/resume.pdf',
  email: 'zmohamedmohsnz@gmail.com',
  phone: '+201010465679',
};

export const heroBadges = [
  { id: 'spring', icon: SiSpring, label: 'Spring', color: '#6db33f' },
  { id: 'node', icon: FaNodeJs, label: 'Node.js', color: '#8cc84b' },
  { id: 'postgresql', icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
];

export const socialLinks = [
  { id: 'linkedin', icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-mohsen-516792252/', color: '#0a66c2' },
  { id: 'github', icon: FaGithub, label: 'GitHub', url: 'https://github.com/zZMoZz', color: '#333333' },
  { id: 'twitter', icon: FaTwitter, label: 'Twitter', url: 'https://x.com/mohamed_muhsenz', color: '#1da1f2' },
  { id: 'instagram', icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/mohamed_muhsen/', color: '#e4405f' },
  { id: 'facebook', icon: FaFacebook, label: 'Facebook', url: 'https://www.facebook.com/mohamed.mohsen.650254', color: '#1877f2' },
];

export const experience = [];

export const skillGroups = [
  {
    id: 'languages',
    category: 'Languages',
    items: ['JavaScript', 'Java', 'Python', 'C++', 'HTML/CSS'],
  },
  {
    id: 'frameworks',
    category: 'Frameworks',
    items: ['Node.js', 'Spring'],
  },
  {
    id: 'database',
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    id: 'tools',
    category: 'Tools',
    items: ['Git', 'Docker', 'Postman'],
  },
];

export const education = [
  {
    id: 'tanta-university',
    school: 'Tanta University',
    schoolUrl: 'https://tanta.edu.eg/En/default.aspx',
    degree: 'Bachelor in Computer Engineering & Automatic Control | Very Good | 80%',
    period: 'Sep 2020 - Jul 2025',
  },
];

export const certifications = [
  {
    id: 'cert1',
    name: 'Node.js, Express, Mongodb',
    issuer: 'Udemy | Jonas Schmedtmann',
    url: 'https://www.udemy.com/certificate/UC-1a99a725-3503-4221-83ee-bec6b83b2784/',
  },
  {
    id: 'cert2',
    name: 'Spring Boot 3, Spring 6, Hibernate',
    issuer: 'Udemy | Chad Darby',
    url: 'https://www.udemy.com/certificate/UC-ef63b804-79bb-40e8-bba3-871070116617/',
  },
  {
    id: 'cert3',
    name: 'Spring Security 6 with JWT, OAUTH2',
    issuer: 'Udemy | Easy Bytes',
    url: 'https://www.udemy.com/certificate/UC-7067977a-5247-4390-89ae-17306d2ed321/',
  },
  {
    id: 'cert4',
    name: 'JavaScript From Zero to Expert',
    issuer: 'Udemy | Jonas Schmedtmann',
    url: 'https://www.udemy.com/certificate/UC-08a3ce2f-4315-415f-8ff4-23a7349525f3/',
  },
  {
    id: 'cert5',
    name: 'Claude Code - Practical Guide',
    issuer: 'Udemy | Maximilian Schwarzmüller',
    url: 'https://www.udemy.com/certificate/UC-3b660622-0f4f-4b59-bc98-fcd346960c06/',
  },
  {
    id: 'cert6',
    name: 'Mathematics for Machine Learning: Linear Algebra',
    issuer: 'Imperial College London',
    url: 'https://coursera.org/share/718ca9371c232f0f3a6d67a1ecf6e33a',
  },
];

export const projectCategories = ['All', 'Web', 'Other'];

export const projects = [
  {
    id: 'taskflow',
    name: 'TaskFlow',
    category: 'Web',
    type: 'Web App',
    description: 'Kanban-style task manager with real-time collaboration, drag-and-drop boards, and activity history.',
    tags: ['React', 'Node.js'],
    gradient: 'linear-gradient(135deg, #4a3fc4 0%, #6a5cf5 45%, #8f84ff 100%)',
    githubUrl: 'https://github.com/',
    liveUrl: '#',
  },
  {
    id: 'pulsemetrics',
    name: 'PulseMetrics',
    category: 'Web',
    type: 'Web App',
    description: 'Analytics dashboard for tracking product usage metrics live, with custom charts and alerting.',
    tags: ['TypeScript', 'Vite'],
    gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 45%, #5eead4 100%)',
    githubUrl: 'https://github.com/',
    liveUrl: '#',
  },
  {
    id: 'echonotes',
    name: 'EchoNotes',
    category: 'Web',
    type: 'Web App',
    description: 'Voice-to-text note taking app that converts audio into searchable, editable notes in the browser.',
    tags: ['TypeScript', 'Vite.js'],
    gradient: 'linear-gradient(135deg, #1e293b 0%, #3b4d8f 55%, #6366f1 100%)',
    githubUrl: 'https://github.com/',
    liveUrl: '#',
  },
  {
    id: 'drifttimer',
    name: 'DriftTimer',
    category: 'Other',
    type: 'Android App',
    description: 'Minimalist pomodoro timer for Android with focus streaks and gentle break reminders.',
    tags: ['Kotlin', 'Android Studio'],
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 45%, #fb923c 100%)',
    githubUrl: 'https://github.com/',
    liveUrl: '#',
  },
  {
    id: 'pixelkit',
    name: 'PixelKit',
    category: 'Other',
    type: 'npm Package',
    description: 'Lightweight collection of React hooks for common UI patterns like debounce, media queries, and clipboard.',
    tags: ['TypeScript', 'React'],
    gradient: 'linear-gradient(135deg, #581c87 0%, #9333ea 45%, #c084fc 100%)',
    githubUrl: 'https://github.com/',
    liveUrl: '#',
  },
  {
    id: 'markflow',
    name: 'MarkFlow',
    category: 'Other',
    type: 'Website',
    description: 'Live markdown previewer and editor with export to PDF and shareable read-only links.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #164e63 0%, #0891b2 45%, #67e8f9 100%)',
    githubUrl: 'https://github.com/',
    liveUrl: '#',
  },
];
