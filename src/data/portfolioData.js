import {
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import { SiSpring, SiPostgresql } from 'react-icons/si';
import bmiCalculatorImg from '../assets/bmi-calculator.png';
import pythonCalculatorImg from '../assets/python-calculator.png';
import htmlCssProjectImg from '../assets/html-css-project.png';

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
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    category: 'Other',
    type: 'Desktop App',
    year: 2023,
    description: 'Lightweight desktop app for calculating Body Mass Index with metric/imperial unit switching, +/- adjustment controls, sliders, and live BMI updates.',
    tags: ['Python', 'CustomTkinter'],
    image: bmiCalculatorImg,
    githubUrl: 'https://github.com/zZMoZz/BMI-Calculator',
    liveUrl: 'https://github.com/zZMoZz/BMI-Calculator/releases/download/v1.0.0/BMI-Calculator.exe',
    download: true,
  },
  {
    id: 'python-calculator',
    name: 'Python Calculator',
    category: 'Other',
    type: 'Desktop App',
    year: 2023,
    description: 'Desktop calculator app with a modern UI, supporting addition, subtraction, multiplication, division, and modulo with live expression preview and light/dark mode.',
    tags: ['Python', 'CustomTkinter'],
    image: pythonCalculatorImg,
    githubUrl: 'https://github.com/zZMoZz/python-calculator',
    liveUrl: 'https://github.com/zZMoZz/python-calculator/archive/refs/heads/main.zip',
    download: true,
  },
  {
    id: 'html-css-project',
    name: 'Practice HTML & CSS',
    category: 'Web',
    type: 'Website',
    year: 2022,
    description: 'Responsive single-page landing site built with pure HTML and CSS, featuring a mega menu header, gallery, features, testimonials, pricing, and more.',
    tags: ['HTML', 'CSS'],
    image: htmlCssProjectImg,
    githubUrl: 'https://github.com/zZMoZz/html-css-landing-page',
    liveUrl: 'https://zzmozz.github.io/html-css-landing-page/',
  },
];
