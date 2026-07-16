export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceDetailGroup {
  id: string;
  category: string;
  description: string;
  iconName: string;
  subservices: string[];
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  services: string[];
}

export interface CareerApplicationInput {
  name: string;
  email: string;
  phone: string;
  positionId: string;
  experience: string;
  linkedin: string;
  coverLetter: string;
  resumeFile: string;
}
