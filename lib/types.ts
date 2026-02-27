export type NavLink = {
  label: string;
  href: string;
};

export type ServiceTime = {
  day: string;
  service: string;
  time: string;
};

export type MinistryCard = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export type LeadershipMember = {
  name: string;
  title: string;
  bio: string;
};

export type ChurchEvent = {
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
};
