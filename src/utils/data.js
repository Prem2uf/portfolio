export const profileData = {
  name: "Premchandra Yadav",
  title: "Full-Stack Developer",
  email: "premkumarraj18951@gmail.com",
  phone: "+917033180338",
  location: "Noida, Uttar Pradesh",
  hometown: "East Champaran, Bihar",
  linkedin: "https://www.linkedin.com/in/premchandra-yadav-20135b241/",
  github: "https://github.com/Prem2uf",
  hackerrank: "#",
  leetcode: "#",
  gfg: "#",
  resume: "/resume.pdf", // Place your resume PDF file in the public folder as "resume.pdf"
  organization: "Epic Web Techno",
  organizationRole: "Full-Stack Developer",
  organizationSince: "July 2023"
};

export const skills = {
  backend: {
    items: ['PHP', 'Laravel 9/10+', 'REST APIs', 'Multi-Tenancy', 'Queues & Jobs', 'Laravel Nova'],
    icon: 'Database',
    color: 'from-blue-500 to-cyan-500'
  },
  frontend: {
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'AJAX'],
    icon: 'Code',
    color: 'from-purple-500 to-pink-500'
  },
  database: {
    items: ['MySQL', 'Redis', 'Query Optimization', 'Indexing', 'Migrations'],
    icon: 'Database',
    color: 'from-yellow-500 to-orange-500'
  },
  cloud: {
    items: ['AWS CloudWatch', 'API Gateway', 'Elastic Beanstalk', 'AWS Scheduler', 'ElastiCache(Redis)'],
    icon: 'Cloud',
    color: 'from-orange-500 to-red-500'
  },
  integrations: {
    items: ['Brevo', 'Klaviyo', 'Nova Dashboard'],
    icon: 'Mail',
    color: 'from-indigo-500 to-violet-500'
  },
  payments: {
    items: ['Stripe', 'PayPal SDK', 'Zoho Billing'],
    icon: 'CreditCard',
    color: 'from-green-500 to-teal-500'
  },
  security: {
    items: ['JWT', 'RBAC', '2FA'],
    icon: 'Lock',
    color: 'from-green-500 to-emerald-500'
  }
};

export const projects = [
  {
    name: 'Buyience',
    subtitle: 'AI-Driven Multi-Tenant B2B Platform (International Project)',
    link: 'buyience.com',
    tech: 'Laravel • React • AWS • MySQL • AI Integration',
    gradient: 'from-blue-600 to-purple-600',
    highlights: [
      'Initially joined as the first Backend Developer on a company-owned, AI-based international product and currently working as Lead Backend Developer',
      'Developed 600+ REST APIs covering authentication, products, orders',
      'Built complete multi-tenant architecture with isolated databases',
      'Implemented product variants, configurations, inventory sync',
      'Integrated AWS CloudWatch & API Gateway for usage analytics',
      'Advanced discount systems: BOGO, Bundles, Tier Pricing'
    ]
  },
  {
    name: 'Nova Technologies',
    subtitle: 'Dynamic Website Platform',
    tech: 'Laravel • PHP • MySQL',
    gradient: 'from-purple-600 to-pink-600',
    highlights: [
      'Fully dynamic website with admin-editable content',
      'Backend modules for dynamic sections and services',
      'Admin panel with validations and content management'
    ]
  },
  {
    name: 'GivensMD',
    subtitle: 'Medical Service Platform',
    tech: 'Laravel • APIs',
    gradient: 'from-orange-600 to-red-600',
    highlights: [
      'Contact page with email functionality',
      'REST APIs for contact form data management',
      'GET endpoints for submission retrieval'
    ]
  },
  {
    name: 'Tour & Travel Agency',
    subtitle: 'Management System',
    tech: 'Core PHP',
    gradient: 'from-green-600 to-teal-600',
    highlights: [
      'Package listings and itinerary management',
      'Complete booking workflow system'
    ]
  }
];

export const experience = [
  {
    company: 'Epic Web Techno',
    role: 'Full-Stack Developer',
    duration: 'July 2023 - Present',
    type: 'Full-Time',
    description: 'Working as a core developer building enterprise-grade SaaS products, multi-tenant platforms, and scalable backend systems.',
    highlights: [
      'Led backend development of Buyience, an AI-driven multi-tenant B2B platform with 600+ REST APIs',
      'Architected multi-tenant systems with isolated databases and advanced RBAC',
      'Integrated Stripe, PayPal, and Zoho Billing for payment processing',
      'Implemented AWS CloudWatch & API Gateway for usage analytics and monitoring',
      'Improved bulk product import performance by 60% through query optimization',
      'Built JWT authentication with 2FA for enhanced security'
    ]
  }
];

export const achievements = [
  {
    text: 'Improved bulk product import performance by 60%',
    icon: 'TrendingUp'
  },
  {
    text: 'Built scalable multi-role permission system (Admin, Subadmin, Tester, Editor)',
    icon: 'Lock'
  },
  {
    text: 'Automated AWS API Gateway usage tracking with Zoho Billing integration',
    icon: 'Cloud'
  },
  {
    text: 'Implemented JWT authentication with 2FA for enhanced security',
    icon: 'Sparkles'
  }
];

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Maharishi Markandeshwar (Deemed To Be University)',
    years: '2019 - 2023',
    grade: '82%'
  },
  {
    degree: 'Class XII (BSEB)',
    school: 'High School Sarottar',
    years: '2017 - 2019',
    grade: '75.4%'
  },
  {
    degree: 'Class X (BSEB)',
    school: 'High School Sarottar',
    years: '2016 - 2017',
    grade: '73.8%'
  }
];