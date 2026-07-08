import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGraduationCap,
} from 'react-icons/fa';
import { SiTypescript, SiVite, SiSpring, SiPostgresql } from 'react-icons/si';

export const profile = {
  name: 'Mohamed Mohsen',
  roles: ['Software Engineer', 'Backend Developer', 'Open Source Contributor', 'Problem Solver'],
  tagline: "I've learned that I still have a lot to learn.",
  resumeUrl: '#',
  email: 'zmohamedmohsnz@gmail.com',
  phone: '+201010465679',
};

export const heroBadges = [
  { id: 'spring', icon: SiSpring, label: 'Spring', color: '#6db33f' },
  { id: 'node', icon: FaNodeJs, label: 'Node.js', color: '#8cc84b' },
  { id: 'postgresql', icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
];

export const socialLinks = [
  { id: 'linkedin', icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-mohsen-516792252/' },
  { id: 'github', icon: FaGithub, label: 'GitHub', url: 'https://github.com/zZMoZz' },
  { id: 'twitter', icon: FaTwitter, label: 'Twitter', url: 'https://x.com/mohamed_muhsenz' },
  { id: 'instagram', icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/mohamed_muhsen/' },
  { id: 'facebook', icon: FaFacebook, label: 'Facebook', url: 'https://www.facebook.com/mohamed.mohsen.650254' },
];

export const experience = [];

export const skills = [
  { id: 'html5', name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
  { id: 'css3', name: 'CSS3', icon: FaCss3Alt, color: '#2965f1' },
  { id: 'sass', name: 'Sass', icon: FaSass, color: '#cc6699' },
  { id: 'js', name: 'JavaScript', icon: FaJsSquare, color: '#f0db4f' },
  { id: 'ts', name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { id: 'react', name: 'React', icon: FaReact, color: '#61dafb' },
  { id: 'node', name: 'Node.js', icon: FaNodeJs, color: '#8cc84b' },
  { id: 'vite', name: 'Vite', icon: SiVite, color: '#bd34fe' },
  { id: 'git', name: 'Git', icon: FaGitAlt, color: '#f05033' },
];

export const education = [
  {
    id: 'btech',
    school: 'Ridgeway Institute of Technology',
    degree: 'B.Tech in Computer Science',
    period: '2016 - 2020',
    icon: FaGraduationCap,
  },
  {
    id: 'school',
    school: 'Northfield Public School',
    degree: 'Higher Secondary Education',
    period: '2014 - 2016',
    icon: FaGraduationCap,
  },
];

export const certifications = [
  {
    id: 'cert1',
    name: 'React - Advanced Concepts',
    issuer: 'Udemy',
    year: '2023',
  },
  {
    id: 'cert2',
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    year: '2021',
  },
  {
    id: 'cert3',
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2020',
  },
];

export const projectCategories = ['All', 'Web', 'Android', 'Other'];

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
    category: 'Android',
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
