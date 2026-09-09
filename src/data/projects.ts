export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  serviceId: string;
  summary: string;
  focusPoints: string[];
  keyCapabilities: string[];
  scope: string;
  accentColor: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'ai-lead-threat-intelligence',
    number: '01',
    title: 'AI Lead Threat Intelligence',
    category: 'AI Solutions & Security',
    serviceId: 'ai-solutions',
    summary: 'An intelligent threat monitoring and evaluation system delivering continuous risk scoring, threat detection, and instantaneous operational alerts.',
    focusPoints: ['Threat Detection', 'Risk Scoring', 'Real-Time Alerts'],
    keyCapabilities: [
      'Automated threat pattern detection across incoming signal streams',
      'Continuous algorithmic risk scoring of prospective entities',
      'Real-time automated alerts and notification dispatch'
    ],
    scope: 'Enterprise Threat & Signal Intelligence',
    accentColor: '#2563EB'
  },
  {
    id: 'data-management-platform',
    number: '02',
    title: 'Data Management Platform',
    category: 'Software & Data Architecture',
    serviceId: 'software-development',
    summary: 'A unified enterprise information architecture integrating multi-database synchronization, semantic search, and collaborative AI workspaces.',
    focusPoints: ['Semantic Search', 'Multi-Database', 'AI Workspaces'],
    keyCapabilities: [
      'Natural language semantic search across unstructured company data',
      'Unified multi-database indexing and retrieval architecture',
      'Collaborative AI workspaces for cross-functional teams'
    ],
    scope: 'Unified Information Architecture',
    accentColor: '#0284C7'
  },
  {
    id: 'ai-revops-copilot',
    number: '03',
    title: 'AI RevOps Copilot',
    category: 'AI Solutions & Operations',
    serviceId: 'ai-solutions',
    summary: 'An operational revenue copilot that integrates with Salesforce, automates invoice intelligence, and generates actionable revenue insights.',
    focusPoints: ['Salesforce Integration', 'Invoice AI', 'Revenue Insights'],
    keyCapabilities: [
      'Direct synchronization with Salesforce pipelines and account records',
      'Intelligent invoice data extraction and processing',
      'Automated revenue performance insights and trend indicators'
    ],
    scope: 'Revenue Operations Automation',
    accentColor: '#1D4ED8'
  },
  {
    id: 'ecommerce-automation',
    number: '04',
    title: 'E-Commerce Automation',
    category: 'Digital Transformation & Marketing',
    serviceId: 'digital-transformation',
    summary: 'Comprehensive commerce workflow optimization addressing abandoned cart recovery, automated email sequences, and end-to-end customer journey mapping.',
    focusPoints: ['Email Automation', 'Cart Recovery', 'Customer Journey'],
    keyCapabilities: [
      'Behavior-triggered automated email communication sequences',
      'Real-time abandoned cart identification and recovery triggers',
      'Full lifecycle customer journey tracking and optimization'
    ],
    scope: 'Commerce Workflow Automation',
    accentColor: '#3B82F6'
  },
  {
    id: 'website-ui-design',
    number: '05',
    title: 'Website & UI Design',
    category: 'Creative Services & Frontend',
    serviceId: 'creative-services',
    summary: 'Digital interface and corporate web experience engineered to build long-term partnerships through exceptional service and genuine care.',
    focusPoints: ['Exceptional Service', 'Genuine Care', 'Long-Term Partnership'],
    keyCapabilities: [
      'Modern, human-centered user interface architecture',
      'Responsive editorial layouts designed for enterprise credibility',
      'Relationship-focused digital experiences engineered for longevity'
    ],
    scope: 'Enterprise Web Experience',
    accentColor: '#0EA5E9'
  },
  {
    id: 'social-media-creatives',
    number: '06',
    title: 'Social Media Creatives',
    category: 'Creative Services & Branding',
    serviceId: 'creative-services',
    summary: 'Strategic visual creative assets designed for high brand recognition across carousels, reel covers, and unified corporate brand asset libraries.',
    focusPoints: ['Carousel Design', 'Reel Covers', 'Brand Assets'],
    keyCapabilities: [
      'Multi-panel educational and promotional carousel design',
      'Cohesive high-impact covers for short-form video reels',
      'Comprehensive brand asset kits tailored for multi-platform distribution'
    ],
    scope: 'Visual Brand Asset Production',
    accentColor: '#2563EB'
  }
];
