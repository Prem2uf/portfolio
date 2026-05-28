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
  resume: "/resume.pdf",
  organization: "Epic Web Techno",
  organizationRole: "Full-Stack Developer",
  organizationSince: "July 2023"
};

export const skills = {
  backend: {
    label: 'Backend Development',
    items: ['PHP', 'Laravel', 'REST API Development', 'Queue & Jobs', 'Modular Architecture', 'Background Workers'],
    icon: 'server',
    color: '#6c63ff'
  },
  frontend: {
    label: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'AJAX'],
    icon: 'code',
    color: '#a78bfa'
  },
  database: {
    label: 'Database & Caching',
    items: ['MySQL', 'Redis', 'Query Optimization', 'Indexing', 'Migrations', 'Bulk Operations'],
    icon: 'database',
    color: '#fbbf24'
  },
  multiTenancy: {
    label: 'Multi-Tenancy & Access',
    items: ['Multi-Tenant Architecture', 'Isolated Tenant Environments', 'RBAC', 'Role & Permission Management', 'Customer Segmentation', 'B2B User Groups'],
    icon: 'layers',
    color: '#22d3ee'
  },
  auth: {
    label: 'Authentication & Security',
    items: ['Laravel Sanctum', 'JWT', 'Two-Factor Authentication (2FA)', 'Social Login (Google)', 'API Authorization', 'Secure Workflows'],
    icon: 'shield',
    color: '#f472b6'
  },
  cloud: {
    label: 'AWS & DevOps',
    items: ['AWS S3', 'AWS API Gateway', 'AWS CloudWatch', 'Elastic Beanstalk', 'ElastiCache (Redis)', 'Server Management', 'Deployment Workflows'],
    icon: 'cloud',
    color: '#38bdf8'
  },
  payments: {
    label: 'Payment Integrations',
    items: ['Stripe', 'PayPal', 'Razorpay', 'Zoho Billing', 'Subscription Billing'],
    icon: 'creditCard',
    color: '#34d399'
  },
  integrations: {
    label: 'Third-Party Integrations',
    items: ['Brevo', 'Zoho', 'Shiprocket', 'AWS Services', 'Klaviyo', 'Nova Dashboard'],
    icon: 'plug',
    color: '#f97316'
  },
  commerce: {
    label: 'B2B Commerce & Pricing',
    items: ['Buy X Get Y Discounts', 'Tier & Bulk Pricing', 'Customer-Specific Pricing', 'Dynamic Quote Engine', 'Coupon Systems', 'Shipping Calculations', 'Tax Engine'],
    icon: 'shoppingCart',
    color: '#e879f9'
  },
  inventory: {
    label: 'Inventory & Warehouse',
    items: ['Multi-Warehouse Inventory', 'Stock Movement Tracking', 'Warehouse Allocation', 'Inventory Management'],
    icon: 'package',
    color: '#fb923c'
  },
  orders: {
    label: 'Order & Customer Mgmt',
    items: ['Quote-to-Order Processing', 'Return & Refund Handling', 'CSV Bulk Order Imports', 'Customer Group Management', 'B2B Workflows'],
    icon: 'clipboardList',
    color: '#4ade80'
  },
  performance: {
    label: 'Performance & Architecture',
    items: ['Performance Optimization', 'Scalable SaaS Architecture', 'Bulk Import via Queues', 'Large Dataset Handling', 'End-to-End Backend Ownership'],
    icon: 'zap',
    color: '#818cf8'
  }
};

export const projects = [
  {
    name: 'Buyience',
    tagline: 'AI-Powered B2B Commerce Platform',
    company: 'A product by Epic Web Techno',
    role: 'Founding Backend Developer · Senior Backend Developer',
    link: 'buyience.com',
    tech: ['PHP', 'Laravel', 'MySQL', 'AWS', 'REST APIs', 'Redis', 'Sanctum', 'Queue Jobs', 'Multi-Tenancy'],
    summary: 'Founding backend developer of Buyience — a scalable multi-tenant B2B eCommerce and quote-management platform (built by Epic Web Techno) focused on wholesalers, distributors, and enterprise customers. Joined as the first backend engineer and owned the entire backend architecture from day one.',
    stat1Label: 'REST APIs Built',
    stat1Value: '1500+',
    stat2Label: 'Role',
    stat2Value: 'Founding Dev',
    stat3Label: 'Type',
    stat3Value: 'Enterprise SaaS',
    categories: [
      {
        title: 'Backend Architecture',
        icon: 'server',
        color: '#6c63ff',
        points: [
          'Designed and developed 1500+ scalable RESTful APIs',
          'Built modular Laravel backend for enterprise-level commerce workflows',
          'Implemented queue & job systems for background and bulk operations',
          'Optimized application performance for large product and order datasets'
        ]
      },
      {
        title: 'Multi-Tenancy & Access Control',
        icon: 'layers',
        color: '#22d3ee',
        points: [
          'Developed multi-tenant architecture with isolated tenant environments',
          'Implemented role & permission management system (RBAC)',
          'Built customer group and B2B user segmentation features',
          'Managed tenant-based configurations, pricing, taxes, and permissions'
        ]
      },
      {
        title: 'Authentication & Security',
        icon: 'shield',
        color: '#f472b6',
        points: [
          'Implemented Laravel Sanctum authentication',
          'Added Two-Factor Authentication (2FA)',
          'Integrated Google-based social login and registration',
          'Developed secure API authorization workflows'
        ]
      },
      {
        title: 'Payment & Third-Party Integrations',
        icon: 'creditCard',
        color: '#34d399',
        points: [
          'Integrated PayPal, Stripe & Razorpay payment gateways',
          'Integrated Brevo, Zoho, and Shiprocket services',
          'Connected AWS services for storage and infrastructure',
          'Built extensible integration layer for future third-party services'
        ]
      },
      {
        title: 'AWS & DevOps',
        icon: 'cloud',
        color: '#38bdf8',
        points: [
          'Managed AWS infrastructure and deployment workflows',
          'Integrated AWS S3 for image and media storage',
          'Implemented AWS API Gateway integrations',
          'Used queues and background workers for scalable processing'
        ]
      },
      {
        title: 'Commerce & Pricing Engine',
        icon: 'shoppingCart',
        color: '#e879f9',
        points: [
          'Built Buy X Get Y discounts, tier pricing, and bulk discounts',
          'Developed customer-specific pricing engine',
          'Built dynamic quote-to-order engine',
          'Implemented marketplace tax calculations and shipping charge systems',
          'Coupon and promotional campaign management'
        ]
      },
      {
        title: 'Inventory & Warehouse',
        icon: 'package',
        color: '#fb923c',
        points: [
          'Developed inventory management for multiple warehouses',
          'Built stock movement and inventory tracking systems',
          'Created warehouse-based inventory allocation logic'
        ]
      },
      {
        title: 'Order & Customer Management',
        icon: 'clipboardList',
        color: '#4ade80',
        points: [
          'B2B customer management workflows',
          'Quote-to-order processing pipeline',
          'Return and refund handling workflows',
          'CSV bulk order imports using queues and jobs',
          'Customer group management system'
        ]
      }
    ]
  }
];

export const experience = [
  {
    company: 'Epic Web Techno',
    role: 'Full-Stack Developer',
    duration: 'July 2023 - Present',
    type: 'Full-Time',
    description: 'Working as a Full-Stack Developer at Epic Web Techno, where I serve as the Founding Backend Developer of Buyience — the company\'s flagship AI-powered, multi-tenant B2B commerce SaaS platform. Joined as the first backend engineer on the product and have owned the entire backend architecture ever since.',
    highlights: [
      'Founding Backend Developer of Buyience (Epic Web Techno\'s flagship product) — first engineer on the project',
      'Built 1500+ REST APIs covering all commerce, auth, payment, and admin workflows',
      'Architected multi-tenant systems with isolated databases and advanced RBAC',
      'Integrated Stripe, PayPal, Razorpay, Brevo, Zoho, and Shiprocket',
      'Managed AWS infrastructure: S3, API Gateway, CloudWatch, ElastiCache',
      'Implemented Laravel Sanctum + JWT + 2FA + Google social login',
      'Built advanced B2B pricing engine: tier pricing, BOGO, quote engine, tax calculation',
      'Developed multi-warehouse inventory management and CSV bulk import via queues'
    ]
  }
];

export const achievements = [
  {
    text: 'Founding Backend Developer of Buyience — Epic Web Techno\'s flagship B2B SaaS platform, built from scratch as the first engineer',
    icon: 'Star'
  },
  {
    text: 'Built 1500+ REST APIs for a scalable AI-powered B2B SaaS commerce platform',
    icon: 'TrendingUp'
  },
  {
    text: 'Designed multi-tenant architecture with isolated environments and advanced RBAC',
    icon: 'Lock'
  },
  {
    text: 'Integrated 7+ third-party services: Stripe, PayPal, Razorpay, Brevo, Zoho, Shiprocket, AWS',
    icon: 'Cloud'
  },
  {
    text: 'Built complete B2B commerce engine: quote management, tier pricing, inventory, warehousing',
    icon: 'Sparkles'
  },
  {
    text: 'Optimized bulk operations through queue/job systems for large product and order datasets',
    icon: 'Zap'
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
