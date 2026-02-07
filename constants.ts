import { Project, ProjectCategory, ProjectStatus, Service, Testimonial, TeamMember } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Azure Heights',
    location: 'Ram Nagar, Anantapur',
    category: ProjectCategory.RESIDENTIAL,
    status: ProjectStatus.COMPLETED,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    priceStart: '₹85 L',
    description: 'A premium residential complex featuring 3BHK luxury apartments with state-of-the-art amenities and city views.',
    features: ['Swimming Pool', 'Gym', '24/7 Security', 'Clubhouse']
  },
  {
    id: '2',
    title: 'The Golden Villa',
    location: 'Jesus Nagar, Anantapur',
    category: ProjectCategory.VILLA,
    status: ProjectStatus.COMPLETED,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop',
    priceStart: '₹2.5 Cr',
    description: 'An ultra-luxury villa project designed with contemporary aesthetics, Italian marble flooring, and sustainable materials.',
    features: ['Private Garden', 'Home Automation', 'Solar Power', 'Home Theater']
  },
  {
    id: '3',
    title: 'TechPark One',
    location: 'Raptadu Road, Anantapur',
    category: ProjectCategory.COMMERCIAL,
    status: ProjectStatus.ONGOING,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    priceStart: 'On Request',
    description: 'Grade-A office space and commercial complex designed for modern businesses, featuring glass facades and ample parking.',
    features: ['Modern Facade', 'High-speed Elevators', 'Food Court', 'Conference Halls']
  },
  {
    id: '4',
    title: 'Serene Interiors',
    location: 'Housing Board Colony, Anantapur',
    category: ProjectCategory.INTERIOR,
    status: ProjectStatus.COMPLETED,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
    description: 'Complete interior design execution for a luxury duplex, focusing on minimalism, warm lighting, and custom joinery.',
    features: ['Custom Furniture', 'Italian Marble', 'Smart Lighting']
  },
  {
    id: '5',
    title: 'Emerald Gardens',
    location: 'Rudrampeta, Anantapur',
    category: ProjectCategory.RESIDENTIAL,
    status: ProjectStatus.UPCOMING,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1000&auto=format&fit=crop',
    priceStart: '₹65 L',
    description: 'Affordable luxury apartments surrounded by lush greenery and excellent connectivity to the highway.',
    features: ['Jogging Track', 'Children\'s Play Area', 'Community Hall']
  },
  {
    id: '6',
    title: 'Skyline Plaza',
    location: 'Clock Tower Area, Anantapur',
    category: ProjectCategory.COMMERCIAL,
    status: ProjectStatus.COMPLETED,
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop',
    description: 'A mixed-use development combining premium retail spaces on lower floors and corporate office spaces above.',
    features: ['Ample Parking', 'Power Backup', 'Retail Frontage']
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Property Buying',
    description: 'Expert guidance to find your dream home or ideal investment property in prime locations.',
    iconName: 'Home'
  },
  {
    id: '2',
    title: 'Construction',
    description: 'Turnkey construction services with a focus on quality, timeline, and architectural integrity.',
    iconName: 'Hammer'
  },
  {
    id: '3',
    title: 'Development',
    description: 'Large-scale residential and commercial development projects reshaping the skyline.',
    iconName: 'Building2'
  },
  {
    id: '4',
    title: 'Investment',
    description: 'Data-driven real estate investment consulting for high ROI and long-term asset appreciation.',
    iconName: 'TrendingUp'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Homeowner, Azure Heights',
    content: 'iConstructions delivered our dream home on time with exceptional quality. The attention to detail is unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Priya Reddy',
    role: 'CEO, TechStart',
    content: 'The commercial space they built for us perfectly reflects our company culture. Professional and reliable.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: 'Investor',
    content: 'Their transparency regarding project timelines and legal documentation builds great trust for investors.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

export const STATS = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Sq. Ft. Delivered', value: '2.5M+' },
  { label: 'Happy Families', value: '500+' },
  { label: 'Awards Won', value: '12' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Michael Anderson',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Senior Architect',
    image: 'https://images.unsplash.com/photo-1573496359-136d4755be51?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  }
];

export const AWARDS = [
  { year: '2023', title: 'Best Luxury Developer', status: 'Winner' },
  { year: '2022', title: 'Excellence in Architecture', status: 'Gold' },
  { year: '2021', title: 'Sustainable Project of the Year', status: 'Winner' },
  { year: '2020', title: 'Top Real Estate Brand', status: 'Awarded' },
];

export const FAQS = [
  { question: 'What is the estimated timeline for a villa project?', answer: 'Typically, a luxury villa project takes between 12 to 18 months from design approval to handover, depending on the complexity and size.' },
  { question: 'Do you handle legal approvals and permits?', answer: 'Yes, we provide end-to-end assistance with municipal approvals, RERA registration, and all necessary legal documentation.' },
  { question: 'Can I customize the floor plan?', answer: 'Absolutely. We believe in bespoke living. Our architects work closely with you to tailor the floor plan to your specific lifestyle needs.' },
  { question: 'What regions do you operate in?', answer: 'We primarily operate in Anantapur, Hyderabad, and Vijayawada, focusing on premium residential and commercial developments.' },
];