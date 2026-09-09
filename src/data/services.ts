export interface SubService {
  name: string;
  tagline: string;
  description: string;
  badge?: string;
  capabilities: string[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  fullDescription: string;
  headline: string;
  highlights: string[];
  subServices: SubService[];
  accentColor: string;
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'ai-solutions',
    number: '01',
    title: 'AI Solutions',
    shortTitle: 'AI',
    summary: 'Custom GenAI models, autonomous agents, enterprise automations, and predictive intelligence engineered for real-world business workflows.',
    headline: 'AI built for real business workflows, not experiments.',
    fullDescription: 'We build production-ready artificial intelligence solutions that streamline complex decision-making, automate repetitive operations, and unlock high-leverage data intelligence for enterprises.',
    accentColor: '#2563EB',
    highlights: [
      'Autonomous agentic workflows',
      'Enterprise LLM fine-tuning & RAG systems',
      'Operational workflow automation',
      'High-precision predictive analytics'
    ],
    subServices: [
      {
        name: 'Gen AI Service',
        tagline: 'Generative AI Pipelines & Applications',
        description: 'Bespoke generative models and multi-modal assistants integrated directly into enterprise software to accelerate content, code, and operational throughput.',
        capabilities: ['Custom Foundation Models', 'Retrieval-Augmented Generation (RAG)', 'Context-Aware Assistance', 'Enterprise Guardrails']
      },
      {
        name: 'Agentic AI Service',
        tagline: 'Autonomous Multi-Agent Systems',
        description: 'Goal-oriented AI agents capable of planning, executing complex multi-step tasks, calling APIs, and coordinating autonomously across business software.',
        capabilities: ['Autonomous Workflow Agents', 'API & Tool Orchestration', 'Multi-Agent Coordination', 'Self-Correcting Reasoning']
      },
      {
        name: 'AI Automations',
        tagline: 'End-to-End Process Automation',
        description: 'Connecting intelligence to daily business operations to eliminate manual data entry, optimize document processing, and trigger instant workflows.',
        capabilities: ['Intelligent Document Processing', 'Zero-Touch Workflows', 'CRM & ERP Synchronization', 'Exception Handling']
      },
      {
        name: 'Custom AI Service',
        tagline: 'Domain-Specific Architecture',
        description: 'Tailored artificial intelligence models trained and fine-tuned specifically on your proprietary institutional knowledge and industry datasets.',
        capabilities: ['Proprietary Model Fine-Tuning', 'Custom Embeddings', 'Data Pipeline Structuring', 'On-Premise / Hybrid Deployment']
      },
      {
        name: 'Enterprise AI Solutions',
        tagline: 'Scalable Enterprise Infrastructure',
        description: 'Secure, compliance-aligned AI systems engineered for large-scale enterprise environments with role-based access control and strict data governance.',
        capabilities: ['Enterprise Security & SOC2 Compliance', 'Audit Logging & Observability', 'Role-Based Permissions', 'High-Availability Clusters']
      },
      {
        name: 'AI Analytics & Intelligence',
        tagline: 'Predictive & Prescriptive Data Engines',
        description: 'Deep analytical intelligence engines that transform raw operational metrics into predictive forecasts, risk indicators, and automated executive insights.',
        capabilities: ['Predictive Demand Modeling', 'Anomaly & Fraud Detection', 'Automated Executive Briefings', 'Behavioral Pattern Analysis']
      }
    ]
  },
  {
    id: 'software-development',
    number: '02',
    title: 'Software Development',
    shortTitle: 'Software',
    summary: 'Cloud-native digital platforms, robust APIs, enterprise web applications, and resilient digital architectures built for high scalability.',
    headline: 'Engineering scalable, resilient software for modern business.',
    fullDescription: 'From architecture design to production release, we engineer performant software systems that handle high throughput, maintain strict data integrity, and scale effortlessly.',
    accentColor: '#0284C7',
    highlights: [
      'Full-stack cloud applications',
      'Modern API & microservices design',
      'High-concurrency database systems',
      'DevSecOps & production reliability'
    ],
    subServices: [
      {
        name: 'Enterprise Web Applications',
        tagline: 'Modern, High-Performance Systems',
        description: 'Purpose-built web platforms engineered with modern frontend frameworks and distributed backends for mission-critical operations.',
        capabilities: ['Cloud-Native Architecture', 'Modular Component Systems', 'Low-Latency Interfaces', 'Cross-Platform Compatibility']
      },
      {
        name: 'API & Microservices Architecture',
        tagline: 'Scalable Backend Infrastructure',
        description: 'Secure REST and GraphQL API ecosystems connecting third-party platforms, data warehouses, and legacy enterprise software seamlessly.',
        capabilities: ['RESTful & GraphQL Architectures', 'Event-Driven Systems', 'API Gateway Management', 'High-Throughput Caching']
      },
      {
        name: 'Database Architecture & Optimization',
        tagline: 'High-Integrity Data Storage',
        description: 'Designing, scaling, and fine-tuning relational, vector, and distributed databases for millisecond retrieval and fault tolerance.',
        capabilities: ['Vector Databases for AI', 'Relational & NoSQL Modeling', 'Data Migration & Replication', 'Query Performance Tuning']
      }
    ]
  },
  {
    id: 'digital-marketing',
    number: '03',
    title: 'Digital Marketing',
    shortTitle: 'Marketing',
    summary: 'Data-driven marketing systems focused on search authority, brand positioning, reputation management, and high-intent lead generation.',
    headline: 'Marketing engineered for visibility, engagement, and qualified leads.',
    fullDescription: 'We merge algorithmic precision with strategic messaging to elevate your enterprise brand presence and build continuous conversion engines.',
    accentColor: '#1D4ED8',
    highlights: [
      'Algorithmic SEO architecture',
      'High-intent B2B & B2C lead pipelines',
      'Executive reputation monitoring',
      'Full-funnel conversion analytics'
    ],
    subServices: [
      {
        name: 'Search Engine Optimization (SEO)',
        tagline: 'Technical & Strategic Search Dominance',
        description: 'Comprehensive technical audits, semantic keyword mapping, and architectural SEO that build sustainable top-tier organic visibility.',
        capabilities: ['Technical Site Architecture', 'Semantic Search & Entity Optimization', 'Backlink Authority Development', 'Core Web Vitals Performance']
      },
      {
        name: 'Content Marketing & Branding',
        tagline: 'Authoritative Thought Leadership',
        description: 'Strategic editorial campaigns and brand messaging frameworks that position your leadership team as definitive industry authorities.',
        capabilities: ['Brand Editorial Calendars', 'Whitepapers & Industry Research', 'Executive Ghostwriting', 'Multi-Channel Content Distribution']
      },
      {
        name: 'Social Media Marketing (SMM)',
        tagline: 'High-Engagement Community Expansion',
        description: 'Data-backed social campaigns that foster meaningful community engagement and convert social followers into qualified sales conversations.',
        capabilities: ['Platform-Specific Growth Strategies', 'Targeted Paid Social Advertising', 'Community Engagement Protocols', 'B2B LinkedIn Architecture']
      },
      {
        name: 'Lead Generation Campaigns',
        tagline: 'Measurable Commercial Pipelines',
        description: 'Precision performance advertising campaigns focused on capturing high-intent prospects and generating demonstrable sales pipeline value.',
        capabilities: ['Full-Funnel Campaign Funnels', 'High-Converting Landing Pages', 'Ad Spend Optimization', 'Lead Qualification Workflows']
      },
      {
        name: 'Online Reputation Management (ORM)',
        tagline: 'Brand Sentiment Protection & Elevation',
        description: 'Proactive digital presence monitoring, sentiment analysis, and reputation engineering that protects and strengthens your corporate identity.',
        capabilities: ['Real-Time Sentiment Monitoring', 'Crisis Communication Frameworks', 'Review Platform Optimization', 'Search Result Curation']
      },
      {
        name: 'Website Analytics',
        tagline: 'Behavioral & Conversion Intelligence',
        description: 'Deep tracking frameworks, custom event monitoring, and conversion rate optimization (CRO) grounded in hard user behavioral data.',
        capabilities: ['Server-Side Tracking Setups', 'User Journey & Drop-Off Mapping', 'Attribution Modeling', 'A/B Testing Infrastructure']
      }
    ]
  },
  {
    id: 'creative-services',
    number: '04',
    title: 'Creative Services',
    shortTitle: 'Creative',
    summary: 'Strategic brand identity, corporate design systems, marketing collaterals, and high-impact corporate video production.',
    headline: 'Strategic design and motion that command corporate authority.',
    fullDescription: 'We bridge design intuition with business logic to create cohesive corporate identities, marketing assets, and cinematic video productions that build long-term trust.',
    accentColor: '#0EA5E9',
    highlights: [
      'Enterprise brand identity systems',
      'Corporate design & collateral solutions',
      'Cinematic video production & motion graphics',
      'Consistent multi-channel design standards'
    ],
    subServices: [
      {
        name: 'Brand Identity Design',
        tagline: 'Complete Visual Language Systems',
        description: 'Distinguished logos, typography systems, color guidelines, and comprehensive brand books that establish immediate corporate recognition.',
        capabilities: ['Brand System Architecture', 'Typography & Color Systems', 'Corporate Style Guides', 'Brand Asset Libraries']
      },
      {
        name: 'Marketing Design',
        tagline: 'Conversion-Focused Visual Assets',
        description: 'Compelling digital banners, promotional pitch assets, sales decks, and campaign graphics designed to capture enterprise attention.',
        capabilities: ['High-Stakes Pitch Decks', 'Campaign Visual Systems', 'Print & Digital Collaterals', 'Trade Show & Event Assets']
      },
      {
        name: 'Social Media Creatives',
        tagline: 'Visual Consistency Across Touchpoints',
        description: 'Engaging carousel designs, reel covers, and dynamic graphics optimized for rapid consumption and high brand retention.',
        capabilities: ['Multi-Slide Carousel Design', 'Reel & Shorts Cover Packages', 'Custom Iconography', 'Campaign Asset Packs']
      },
      {
        name: 'Corporate Design Solutions',
        tagline: 'Executive Communications & Reporting',
        description: 'Professional visual design for enterprise annual reports, whitepapers, investor documents, and company presentations.',
        capabilities: ['Annual & Financial Reports', 'Whitepapers & Case Studies', 'Internal Communications Assets', 'Infographics & Data Graphics']
      },
      {
        name: 'Video Production & Editing',
        tagline: 'Cinematic Visual Storytelling',
        description: 'End-to-end video services including promotional films, corporate video production, product showcase reels, and polished motion graphics.',
        capabilities: ['Promotional Video Editing', 'Corporate Video Production', 'Reels & Shorts Editing', 'Product Showcase Videos', 'Motion Graphics']
      }
    ]
  },
  {
    id: 'digital-transformation',
    number: '05',
    title: 'Digital Transformation',
    shortTitle: 'Transformation',
    summary: 'Modernizing legacy architectures, migrating workflows to intelligent cloud ecosystems, and infusing smart automation into organizational DNA.',
    headline: 'Modernizing legacy operations for the next decade of technology.',
    fullDescription: 'We assist organizations in transitioning from outdated, fragmented workflows to cohesive, cloud-native, and automated digital ecosystems.',
    accentColor: '#3B82F6',
    highlights: [
      'Legacy system modernization',
      'Cross-departmental workflow integration',
      'Cloud migration & optimization',
      'Change enablement & tech adoption'
    ],
    subServices: [
      {
        name: 'Legacy Modernization',
        tagline: 'De-Risking Infrastructure Evolution',
        description: 'Gradual, systematic refactoring of outdated monolithic codebases into agile, secure, and easily maintainable micro-architectures.',
        capabilities: ['Monolith to Microservices', 'Codebase Refactoring', 'Data Migration Pipelines', 'System Interoperability']
      },
      {
        name: 'Workflow Orchestration',
        tagline: 'Seamless Departmental Synergy',
        description: 'Unifying fragmented ERPs, CRMs, and operational tools into single streamlined pipelines with automated handoffs and real-time alerts.',
        capabilities: ['Cross-Platform Webhooks', 'Automated Approval Chains', 'Error Resilient Handshakes', 'Centralized Activity Logs']
      }
    ]
  },
  {
    id: 'business-intelligence',
    number: '06',
    title: 'Business Intelligence',
    shortTitle: 'BI',
    summary: 'Executive dashboards, predictive data models, data warehouse architectures, and actionable operational metrics.',
    headline: 'Transforming complex data into unambiguous executive decisions.',
    fullDescription: 'We synthesize distributed data streams into intuitive executive dashboards and automated reporting pipelines that eliminate guesswork.',
    accentColor: '#2563EB',
    highlights: [
      'Centralized enterprise data warehousing',
      'Real-time executive performance dashboards',
      'Predictive revenue & churn modeling',
      'Automated cross-departmental reporting'
    ],
    subServices: [
      {
        name: 'Executive KPI Dashboards',
        tagline: 'Real-Time Operational Clarity',
        description: 'Interactive visual command centers providing c-suite executives with immediate visibility into revenue, pipeline health, and efficiency metrics.',
        capabilities: ['Custom Metric Definitions', 'Real-Time Data Streaming', 'Multi-Device Responsive Views', 'Role-Restricted Dashboards']
      },
      {
        name: 'Data Pipeline Engineering',
        tagline: 'Resilient ETL / ELT Workflows',
        description: 'Architecting fault-tolerant data pipelines that extract, transform, and load information from dozens of disparate systems into a unified warehouse.',
        capabilities: ['Automated ETL / ELT Workflows', 'Data Lakehouse Architecture', 'Data Cleansing & Validation', 'Warehouse Schema Design']
      }
    ]
  }
];
