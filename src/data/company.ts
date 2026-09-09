export interface LocationInfo {
  country: string;
  code: string;
  role: string;
  phone?: string;
  coordinates: { x: number; y: number }; // relative map percentage coordinates
  timezone: string;
}

export interface CompanyData {
  name: string;
  legalName: string;
  tagline: string;
  eyebrow: string;
  heroHeadline: string;
  heroSupporting: string;
  heroCredibility: string;
  aboutHeadline: string;
  aboutDescription: string;
  aboutHighlights: string[];
  mission: string;
  vision: string;
  coreValuesDescription: string;
  coreValues: Array<{
    title: string;
    description: string;
  }>;
  contacts: {
    indiaPhone: string;
    ksaPhone: string;
    email: string;
    website: string;
  };
  locations: LocationInfo[];
}

export const companyData: CompanyData = {
  name: 'Eclick Tech Solutions',
  legalName: 'Eclick Tech Solutions',
  tagline: 'Innovating business through smart technology',
  eyebrow: 'ECLICK TECH SOLUTIONS',
  heroHeadline: 'Technology that moves your business forward.',
  heroSupporting: 'AI solutions, software, digital marketing, and creative technology designed to help modern businesses grow.',
  heroCredibility: 'AI • SOFTWARE • DIGITAL • TRANSFORMATION',
  aboutHeadline: 'Technology, creativity and business growth in one ecosystem.',
  aboutDescription: 'Eclick Tech Solutions is a modern technology and creative solutions company helping businesses grow through smart AI solutions, professional graphic design, and result-driven digital marketing.',
  aboutHighlights: [
    'Smart digital solutions for modern businesses',
    'Creative design with strategic thinking',
    'AI-powered automation and business support',
    'Marketing focused on visibility, engagement, and leads'
  ],
  mission: 'To empower businesses with smart digital solutions that improve brand visibility, automate workflows, enhance customer engagement, and support long-term business growth.',
  vision: 'To become a trusted digital transformation partner by combining technology, creativity under one roof. Our vision is to empower businesses through innovative, creative, and impactful digital solutions.',
  coreValuesDescription: 'We combine innovation, creativity, and quality to deliver results-driven solutions. With a client-focused approach, transparent communication, and long-term support, we help businesses grow.',
  coreValues: [
    {
      title: 'Innovation',
      description: 'Pioneering intelligent AI and modern technological architectures that solve high-friction operational challenges.'
    },
    {
      title: 'Creativity',
      description: 'Marrying strategic design intuition with rigorous technology engineering to deliver unforgettable brand impact.'
    },
    {
      title: 'Quality',
      description: 'Zero compromise on stability, performance, code craftsmanship, and resilient production systems.'
    },
    {
      title: 'Client-Focused',
      description: 'Deeply aligning with stakeholder goals to turn complex business needs into tangible digital advantages.'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, continuous, honest alignment and milestone tracking at every phase of the project lifecycle.'
    },
    {
      title: 'Long-Term Support',
      description: 'Enduring technical partnership and ongoing optimization to ensure sustainable, continuous business growth.'
    }
  ],
  contacts: {
    indiaPhone: '+91 89192 48052',
    ksaPhone: '+966 50 770 1476',
    email: 'info@eclicktechsolutions.com',
    website: 'www.eclicktechsolutions.com'
  },
  locations: [
    {
      country: 'India',
      code: 'IND',
      role: 'Technology & Development Center',
      phone: '+91 89192 48052',
      coordinates: { x: 70, y: 52 },
      timezone: 'IST (UTC+5:30)'
    },
    {
      country: 'USA',
      code: 'USA',
      role: 'Strategic Partnerships & Americas Ops',
      coordinates: { x: 22, y: 40 },
      timezone: 'EST (UTC-5)'
    },
    {
      country: 'KSA',
      code: 'KSA',
      role: 'Middle East Operations Hub',
      phone: '+966 50 770 1476',
      coordinates: { x: 57, y: 48 },
      timezone: 'AST (UTC+3)'
    },
    {
      country: 'UAE',
      code: 'UAE',
      role: 'Regional Client Services',
      coordinates: { x: 60, y: 47 },
      timezone: 'GST (UTC+4)'
    }
  ]
};
