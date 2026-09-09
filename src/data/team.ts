export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  isLeader?: boolean;
  bio?: string;
  initials: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'mirza-ahmed-baig',
    name: 'Mirza Ahmed Baig',
    role: 'CEO & Founder',
    department: 'Executive Leadership',
    isLeader: true,
    bio: 'Guiding the vision and strategic direction of Eclick Tech Solutions, uniting smart AI engineering, software architecture, and creative marketing into one agile ecosystem.',
    initials: 'MB'
  },
  {
    id: 'khaja-nawazuddin',
    name: 'Khaja Nawazuddin',
    role: 'Senior Vice President',
    department: 'Executive Management',
    bio: 'Overseeing organizational strategy, client relationships, and global operational execution across key enterprise markets.',
    initials: 'KN'
  },
  {
    id: 'shaista-sultana',
    name: 'Shaista Sultana',
    role: 'Head of Digital Marketing',
    department: 'Growth & Marketing',
    bio: 'Directing search architecture, brand narrative strategies, and high-impact digital customer acquisition campaigns.',
    initials: 'SS'
  },
  {
    id: 'syed-abdul-baseer',
    name: 'Syed Abdul Baseer',
    role: 'Head of AI & Operations',
    department: 'Artificial Intelligence & Engineering',
    bio: 'Leading generative AI research, autonomous agent architectures, and streamlined engineering operations.',
    initials: 'SB'
  },
  {
    id: 'girumapuram-eeshwar-kumar',
    name: 'Girumapuram Eeshwar Kumar',
    role: 'Business Analyst',
    department: 'Strategy & Analysis',
    bio: 'Bridging commercial business requirements with technical execution through rigorous data modeling and process analysis.',
    initials: 'EK'
  },
  {
    id: 'aliyah-maham',
    name: 'Aliyah Maham',
    role: 'Program Director',
    department: 'Project & Program Delivery',
    bio: 'Orchestrating complex multi-disciplinary delivery teams to ensure strict timeline adherence and exceptional quality standards.',
    initials: 'AM'
  },
  {
    id: 'mansoor-parker',
    name: 'Mansoor Parker',
    role: 'Business Development Manager',
    department: 'Commercial Partnerships',
    bio: 'Cultivating strategic client partnerships and expanding enterprise technology engagements across international territories.',
    initials: 'MP'
  },
  {
    id: 'mohammed-abdul-imtiyaz',
    name: 'Mohammed Abdul Imtiyaz',
    role: 'AI Engineer',
    department: 'AI Engineering',
    bio: 'Developing custom machine learning pipelines, LLM fine-tuning mechanisms, and autonomous agent toolkits.',
    initials: 'MI'
  },
  {
    id: 'md-khaleemoddin',
    name: 'MD Khaleemoddin',
    role: 'Business Development Executive',
    department: 'Commercial Operations',
    bio: 'Managing enterprise outreach, qualification pipelines, and prospective client relationship development.',
    initials: 'MK'
  }
];
