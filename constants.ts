import { Project, ProjectCategory, ProjectStatus, Service, Testimonial, TeamMember } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Interior Design', path: '/interior-design' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Azure Heights',
    location: 'Ram Nagar, Anantapur',
    category: ProjectCategory.RESIDENTIAL,
    status: ProjectStatus.COMPLETED,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1000',
    priceStart: '₹85 Lakhs',
    description: 'RERA-approved premium residential complex featuring Vastu-compliant 3BHK luxury apartments with modern amenities and city views.',
    features: ['3 BHK', '1850 Sq.Ft', '2 Bathrooms', 'Covered Parking']
  },
  {
    id: '2',
    title: 'The Golden Villa',
    location: 'Jesus Nagar, Anantapur',
    category: ProjectCategory.VILLA,
    status: ProjectStatus.COMPLETED,
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1000',
    priceStart: '₹2.5 Crores',
    description: 'Ultra-luxury Vastu-compliant villa with contemporary design, Italian marble flooring, rainwater harvesting, and solar power.',
    features: ['4 BHK', '3500 Sq.Ft', '4 Bathrooms', '2 Car Parking']
  },
  {
    id: '3',
    title: 'TechPark One',
    location: 'Raptadu Road, Anantapur',
    category: ProjectCategory.COMMERCIAL,
    status: ProjectStatus.ONGOING,
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1000',
    priceStart: 'On Request',
    description: 'RERA-registered Grade-A office space designed for IT companies and startups, featuring modern infrastructure and 24/7 power backup.',
    features: ['Office Space', '5000 Sq.Ft', 'Conference Rooms', 'Parking']
  },
  {
    id: '4',
    title: 'Serene Interiors',
    location: 'Housing Board Colony, Anantapur',
    category: ProjectCategory.INTERIOR,
    status: ProjectStatus.COMPLETED,
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1000',
    description: 'Complete Vastu-compliant interior design for luxury duplex with traditional Indian aesthetics blended with modern minimalism.',
    features: ['2 BHK', '1200 Sq.Ft', '2 Bathrooms', 'Modular Kitchen']
  },
  {
    id: '5',
    title: 'Emerald Gardens',
    location: 'Rudrampeta, Anantapur',
    category: ProjectCategory.RESIDENTIAL,
    status: ProjectStatus.UPCOMING,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1000',
    priceStart: '₹65 Lakhs',
    description: 'RERA-approved affordable luxury apartments with Vastu-compliant design, surrounded by greenery and excellent highway connectivity.',
    features: ['2 BHK', '1100 Sq.Ft', '2 Bathrooms', 'Bike Parking']
  },
  {
    id: '6',
    title: 'Skyline Plaza',
    location: 'Clock Tower Area, Anantapur',
    category: ProjectCategory.COMMERCIAL,
    status: ProjectStatus.COMPLETED,
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1000',
    description: 'RERA-registered mixed-use development with premium retail spaces and corporate offices, featuring 100% power backup.',
    features: ['Retail Space', '2000 Sq.Ft', 'Food Court', 'Parking']
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
    name: 'Rajesh Kumar Reddy',
    role: 'Homeowner, Azure Heights',
    content: 'iConstructions delivered our dream home on time with exceptional quality. The Vastu-compliant design and attention to detail is unmatched.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'Priya Lakshmi Naidu',
    role: 'CEO, TechStart India',
    content: 'The commercial space they built for us in Anantapur perfectly reflects our company culture. RERA-approved and delivered on time. Highly professional!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Suresh Venkata Rao',
    role: 'Real Estate Investor, Hyderabad',
    content: 'Their transparency regarding project timelines, RERA compliance, and legal documentation builds great trust. Best investment decision I made!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
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
    name: 'Anantha Venkata Naidu',
    role: 'Managing Director & Founder',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'Lakshmi Devi Reddy',
    role: 'Chief Architect',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: '3',
    name: 'Krishna Murthy Rao',
    role: 'Senior Project Manager',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  }
];

export const AWARDS = [
  { year: '2023', title: 'Best Luxury Developer', status: 'Winner' },
  { year: '2022', title: 'Excellence in Architecture', status: 'Gold' },
  { year: '2021', title: 'Sustainable Project of the Year', status: 'Winner' },
  { year: '2020', title: 'Top Real Estate Brand', status: 'Awarded' },
];

export const FAQS = [
  { question: 'Are all your projects RERA-approved?', answer: 'Yes, absolutely! All our residential and commercial projects are registered with RERA (Real Estate Regulatory Authority) and comply with all government regulations.' },
  { question: 'Do you provide Vastu-compliant designs?', answer: 'Yes, we offer Vastu-compliant designs for all our projects. Our architects are well-versed in Vastu Shastra principles and can customize layouts according to your requirements.' },
  { question: 'What is the estimated timeline for a villa project?', answer: 'Typically, a luxury villa project takes between 12 to 18 months from design approval to handover, depending on the complexity and size. We ensure timely delivery with quality construction.' },
  { question: 'Do you handle legal approvals and permits?', answer: 'Yes, we provide end-to-end assistance with municipal approvals, RERA registration, DTCP approvals, and all necessary legal documentation. Complete transparency guaranteed.' },
  { question: 'Can I customize the floor plan as per Vastu?', answer: 'Absolutely! We believe in bespoke living. Our architects work closely with you to tailor the floor plan according to Vastu principles and your specific lifestyle needs.' },
  { question: 'What regions do you operate in?', answer: 'We primarily operate in Anantapur, Hyderabad, and Vijayawada (Andhra Pradesh & Telangana), focusing on premium residential and commercial developments.' },
  { question: 'Do you offer home loan assistance?', answer: 'Yes, we have tie-ups with leading banks like SBI, HDFC, ICICI, and Axis Bank to help you get the best home loan rates and quick approvals.' },
];

// Interior Design Services
export const INTERIOR_SERVICES = [
  {
    id: '1',
    title: 'Residential Interiors',
    description: 'Complete home interior solutions from concept to execution, tailored to your lifestyle and preferences.',
    iconName: 'Home',
    features: [
      'Personalized design consultation',
      'Space planning & optimization',
      '3D visualization & walkthroughs',
      'Premium material selection'
    ]
  },
  {
    id: '2',
    title: 'Modular Kitchens',
    description: 'Contemporary modular kitchen designs with smart storage solutions and premium finishes.',
    iconName: 'ChefHat',
    features: [
      'Customized layouts & designs',
      'German & Italian hardware',
      'Soft-close mechanisms',
      'Warranty up to 10 years'
    ]
  },
  {
    id: '3',
    title: 'Bedroom Design',
    description: 'Luxurious bedroom interiors with wardrobes, lighting, and furniture that create your personal sanctuary.',
    iconName: 'Bed',
    features: [
      'Walk-in wardrobes',
      'Ambient lighting design',
      'Custom furniture',
      'Vastu-compliant layouts'
    ]
  },
  {
    id: '4',
    title: 'Living Room Design',
    description: 'Elegant living spaces that blend aesthetics with functionality for entertaining and relaxation.',
    iconName: 'Sofa',
    features: [
      'TV unit & entertainment centers',
      'False ceiling designs',
      'Designer lighting',
      'Premium upholstery'
    ]
  },
  {
    id: '5',
    title: 'Office Interiors',
    description: 'Professional workspace design that enhances productivity and reflects your brand identity.',
    iconName: 'Briefcase',
    features: [
      'Ergonomic workstations',
      'Conference room design',
      'Acoustic solutions',
      'Branding integration'
    ]
  },
  {
    id: '6',
    title: 'Commercial Interiors',
    description: 'Retail, hospitality, and commercial space design that attracts customers and drives business.',
    iconName: 'Store',
    features: [
      'Retail store design',
      'Restaurant interiors',
      'Hotel & hospitality',
      'Showroom design'
    ]
  },
  {
    id: '7',
    title: 'Vastu-Compliant Interiors',
    description: 'Traditional Vastu Shastra principles integrated with modern interior design for harmony and prosperity.',
    iconName: 'Compass',
    features: [
      'Vastu consultation',
      'Direction-based planning',
      'Color therapy',
      'Energy flow optimization'
    ]
  },
  {
    id: '8',
    title: 'Luxury Villa Interiors',
    description: 'Opulent villa interiors with bespoke furniture, imported materials, and world-class finishes.',
    iconName: 'Crown',
    features: [
      'Italian marble & granite',
      'Designer chandeliers',
      'Home automation',
      'Landscape integration'
    ]
  }
];

// Interior Design Portfolio
export const INTERIOR_PORTFOLIO = [
  {
    id: '1',
    title: 'Modern Minimalist Apartment',
    category: 'Living Room',
    location: 'Jubilee Hills, Hyderabad',
    year: '2024',
    style: 'Modern',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Clean lines, neutral palette, and functional elegance define this contemporary living space.'
  },
  {
    id: '2',
    title: 'Luxury Master Bedroom',
    category: 'Bedroom',
    location: 'Banjara Hills, Hyderabad',
    year: '2024',
    style: 'Contemporary',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Plush textures, ambient lighting, and custom furniture create a serene retreat.'
  },
  {
    id: '3',
    title: 'Modular Kitchen Excellence',
    category: 'Kitchen',
    location: 'Gachibowli, Hyderabad',
    year: '2023',
    style: 'Modern',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'German hardware, quartz countertops, and smart storage solutions.'
  },
  {
    id: '4',
    title: 'Corporate Office Design',
    category: 'Office',
    location: 'Hitech City, Hyderabad',
    year: '2024',
    style: 'Industrial',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Open-plan workspace with collaborative zones and private meeting rooms.'
  },
  {
    id: '5',
    title: 'Traditional Indian Living',
    category: 'Living Room',
    location: 'Anantapur',
    year: '2023',
    style: 'Traditional',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Rich colors, intricate patterns, and cultural elements blend beautifully.'
  },
  {
    id: '6',
    title: 'Scandinavian Bedroom',
    category: 'Bedroom',
    location: 'Kondapur, Hyderabad',
    year: '2024',
    style: 'Scandinavian',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Light woods, white walls, and cozy textiles create a peaceful haven.'
  }
];

// Ongoing Interior Projects
export const ONGOING_INTERIOR_PROJECTS = [
  {
    id: '1',
    title: 'Luxury Duplex - Jubilee Hills',
    location: 'Jubilee Hills, Hyderabad',
    status: 'Execution 75% Complete',
    completion: 'March 2026',
    progress: 75,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '4BHK duplex with contemporary interiors, home theater, and rooftop lounge.'
  },
  {
    id: '2',
    title: 'Corporate Office - Hitech City',
    location: 'Hitech City, Hyderabad',
    status: 'Design Phase',
    completion: 'May 2026',
    progress: 30,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '15,000 sq.ft office space for tech startup with collaborative zones.'
  },
  {
    id: '3',
    title: 'Villa Interiors - Anantapur',
    location: 'Anantapur',
    status: 'Material Selection',
    completion: 'April 2026',
    progress: 50,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vastu-compliant luxury villa with traditional and modern fusion design.'
  },
  {
    id: '4',
    title: 'Boutique Hotel - Vijayawada',
    location: 'Vijayawada',
    status: 'Execution 40% Complete',
    completion: 'June 2026',
    progress: 40,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '25-room boutique hotel with contemporary Indian aesthetics.'
  }
];

// Design Styles
export const DESIGN_STYLES = [
  {
    id: '1',
    name: 'Modern',
    description: 'Clean lines, minimal ornamentation, and functional beauty with neutral color palettes.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Open spaces', 'Neutral colors', 'Minimal decor', 'Functional furniture']
  },
  {
    id: '2',
    name: 'Contemporary',
    description: 'Current trends with bold colors, mixed materials, and artistic elements.',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Bold accents', 'Mixed textures', 'Artistic pieces', 'Curved lines']
  },
  {
    id: '3',
    name: 'Traditional',
    description: 'Rich colors, ornate details, and cultural heritage with timeless elegance.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Rich fabrics', 'Ornate details', 'Dark woods', 'Cultural motifs']
  },
  {
    id: '4',
    name: 'Minimalist',
    description: 'Less is more philosophy with essential elements and maximum impact.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Simple forms', 'Monochrome palette', 'Hidden storage', 'Clean surfaces']
  },
  {
    id: '5',
    name: 'Industrial',
    description: 'Raw materials, exposed structures, and urban aesthetics with character.',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Exposed brick', 'Metal accents', 'Open ceilings', 'Vintage pieces']
  },
  {
    id: '6',
    name: 'Scandinavian',
    description: 'Light, airy spaces with natural materials and cozy, functional design.',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Light woods', 'White walls', 'Cozy textiles', 'Natural light']
  }
];