export enum ProjectStatus {
  COMPLETED = 'Completed',
  ONGOING = 'Ongoing',
  UPCOMING = 'Upcoming'
}

export enum ProjectCategory {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  INTERIOR = 'Interior Design',
  VILLA = 'Luxury Villa'
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  status: ProjectStatus;
  image: string;
  priceStart?: string;
  description: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
