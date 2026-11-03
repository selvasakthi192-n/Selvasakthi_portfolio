export const PROFILE = {
  name: 'Selvasakthi N',
  firstName: 'Selvasakthi',
  title: 'Full Stack Developer',
  email: 'selvasakthin@gmail.com',
  phone: '+91 82487 59815',
  phoneRaw: '918248759815',
  linkedin: 'https://linkedin.com/in/selvasakthi-n-4013b6278',
  location: 'Virudhunagar, Tamil Nadu, India',
  roles: [
    'Full Stack Developer',
    'ASP.NET Core API Builder',
    'Angular Enthusiast',
    'Problem Solver'
  ],
  summary:
    'Full Stack Developer with 1+ year of professional experience building scalable web applications using ASP.NET Core Web API, C#, Angular, Dapper and MySQL. I design RESTful APIs, implement JWT authentication, optimise databases and resolve production issues. I am passionate about building secure, scalable and maintainable software.'
};

export const STATS = [
  { value: '1+', label: 'Year of experience' },
  { value: '7', label: 'Projects built' },
  { value: '8.6', label: 'Degree GPA' },
  { value: '2', label: 'Live client sites' }
];

export const SKILL_GROUPS = [
  {
    title: 'Frontend',
    icon: 'bi-window-stack',
    items: [
      { name: 'Angular', level: 75 },
      { name: 'TypeScript', level: 75 },
      { name: 'HTML & CSS', level: 85 },
      { name: 'Bootstrap', level: 85 },
      { name: 'React', level: 45 }
    ]
  },
  {
    title: 'Backend',
    icon: 'bi-hdd-network',
    items: [
      { name: 'C#', level: 85 },
      { name: 'ASP.NET Core Web API', level: 85 },
      { name: 'Dapper', level: 85 },
      { name: 'JWT & OTP Auth', level: 80 },
      { name: 'RESTful API Design', level: 85 }
    ]
  },
  {
    title: 'Data & Tools',
    icon: 'bi-database',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'SQL & Database Design', level: 80 },
      { name: 'Git', level: 80 },
      { name: 'Azure', level: 55 },
      { name: 'Debugging & Production Fixes', level: 85 }
    ]
  }
];

export const TECH_TAGS = [
  'C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'Dapper', 'MySQL', 'JWT',
  'Bootstrap', 'REST APIs', 'Git', 'Azure', 'React'
];

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'E2o Technologies Pvt Ltd',
    period: 'August 2025 – Present',
    current: true,
    points: [
      'Developed and maintained full-stack web applications using Angular, C#, ASP.NET Core Web API and MySQL across multiple client and internal products.',
      'Designed RESTful APIs following a layered repository–service–controller architecture using Dapper.',
      'Implemented secure OTP-based authentication and JWT-based login flows for client-facing systems.',
      'Resolved production issues including async deadlocks, timezone mismatches and email delivery failures.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Design Craft Technologies',
    period: 'January 2025 – June 2025',
    current: false,
    points: [
      'Built responsive front-end interfaces using Angular, HTML, CSS and JavaScript for real-time applications.',
      'Developed backend APIs and database integration using C#, ASP.NET Core Web API and MySQL.',
      'Gained hands-on exposure to REST API design, version control (Git) and collaborative development workflows.'
    ]
  }
];

export interface Project {
  name: string;
  type: string;
  icon: string;
  tech: string[];
  desc: string;
  points: string[];
  link?: string;
  linkLabel?: string;
  status?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Ahllo',
    type: 'Meeting & Booking Platform (Backend)',
    icon: 'bi-calendar2-check',
    tech: ['ASP.NET Core', 'C#', 'Dapper', 'MySQL'],
    desc: 'Owned the backend of a booking and meeting management platform, including email and reminder systems.',
    points: [
      'Resolved IST/UTC timezone mismatches in meeting reminder queries',
      'Fixed dynamic-field update endpoints failing on nested JSON arrays',
      'Solved async deadlocks, Gmail sending limits and SMTP latency'
    ],
    link: 'https://ahllo.com/',
    linkLabel: 'ahllo.com',
    status: 'Ongoing'
  },
  {
    name: 'CRM Backend System',
    type: 'Backend for a CRM platform',
    icon: 'bi-people',
    tech: ['ASP.NET Core', 'C#', 'Dapper', 'MySQL', 'JWT'],
    desc: 'Backend modules for a CRM platform with secure OTP verification and setup flows.',
    points: [
      'Endpoints returning industry-specific features and full login responses with JWT',
      'Fixed data-layer issues such as tuple deconstruction and premature validation',
      'Layered architecture keeping API contracts consistent with the Angular frontend'
    ],
    link: 'https://www.byposs.com/',
    linkLabel: 'byposs.com',
    status: 'Live'
  },
  {
    name: 'School Management Software',
    type: 'Client project, end-to-end',
    icon: 'bi-mortarboard',
    tech: ['Angular', 'ASP.NET Core', 'C#', 'MySQL'],
    desc: 'A complete school management platform covering both frontend and backend.',
    points: [
      'Modules for student and staff management, attendance and class scheduling',
      'Responsive Angular interfaces tailored to different user roles',
      'Secure backend APIs for day-to-day school operations'
    ],
    status: 'In development'
  },
  {
    name: 'E-Commerce Web App',
    type: 'Flipkart-inspired marketplace',
    icon: 'bi-bag-check',
    tech: ['Angular', 'ASP.NET', 'Azure', 'MySQL'],
    desc: 'E-commerce platform with a strong focus on vendor-side management and product handling.',
    points: [
      'Vendor modules for product listing, stock updates and order tracking',
      'Database schemas and APIs for orders, inventory and users at scale',
      'Frontend hosted on Azure Static Web Apps'
    ],
    link: 'https://jolly-forest-05ae20c10.3.azurestaticapps.net/',
    linkLabel: 'Live demo'
  },
  {
    name: 'On-Call Acting Driver',
    type: 'Real-time driver booking web app',
    icon: 'bi-car-front',
    tech: ['Angular', 'HTML', 'CSS', 'Bootstrap'],
    desc: 'Front-end interface for a real-time driver booking platform.',
    points: [
      'Responsive pages that let customers request drivers easily',
      'Dynamic UI components reflecting live driver availability and booking status',
      'Integrated booking data with backend developers through REST APIs'
    ],
    link: 'https://www.oncallactingdriver.com/',
    linkLabel: 'oncallactingdriver.com',
    status: 'Live'
  },
  {
    name: 'Blog Application',
    type: 'Full-stack blog system',
    icon: 'bi-journal-richtext',
    tech: ['Angular', 'ASP.NET', 'MySQL'],
    desc: 'Full-stack blog with OTP-based login and secure user access.',
    points: [
      'CRUD for posts with user session handling',
      'Backend and frontend built end to end',
      'Clean, responsive Angular reading and management UI'
    ]
  }
];

export const EDUCATION = {
  degree: 'Bachelor of Computer Science Engineering',
  school: 'AAA College of Engineering & Technology, Anna University',
  period: '2020 – 2024',
  gpa: '8.6'
};

export const INTERESTS = [
  { icon: 'bi-layers', text: 'Full Stack Web Application Development' },
  { icon: 'bi-hdd-rack', text: 'Scalable Backend & API Development' },
  { icon: 'bi-palette', text: 'Modern Frontend & UI Development' },
  { icon: 'bi-database-gear', text: 'Database Design & Data Management' },
  { icon: 'bi-cloud', text: 'Cloud-Based Application Development' },
  { icon: 'bi-diagram-3', text: 'Software Architecture & Problem Solving' }
];
