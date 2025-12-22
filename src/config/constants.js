// Social Media Links
export const SOCIAL_LINKS = {
    email: 'souvikghosh687@gmail.com',
    linkedin: 'https://www.linkedin.com/in/iamsouviki',
    github: 'https://github.com/iamsouviki',
    twitter: 'https://twitter.com/iamsouviki',
    instagram: 'https://www.instagram.com/iamsouviki',
    facebook: 'https://fb.com/iamsouviki',
};

// Personal Information
export const PERSONAL_INFO = {
    name: 'Souvik Ghosh',
    title: 'Full-Stack Developer & Generative AI Enthusiast',
    tagline: 'Building Scalable Solutions with Modern Technologies',
    professionDetails: `Full-Stack Developer specializing in Web & Mobile Development, with expertise in Core Java, Spring Boot, Flutter, and React. Certified Generative AI Leader passionate about leveraging cutting-edge AI technologies to build innovative solutions. Experienced in developing end-to-end applications, from robust backend systems to stunning user interfaces.`,
    imagePath: '/assets/images/souvikimagepassport.jpg',
    // Google Drive link for CV - opens in new tab for viewing/downloading
    resumeUrl: 'https://drive.google.com/file/d/1HbY7VxRYM69xoh4hxY-ARCx5wnfBVzG9/view',
    location: 'India',
    yearsOfExperience: '3+',
};

// About Section
export const ABOUT = {
    whoAmI: `A passionate Full-Stack Developer and Certified Generative AI Leader with expertise in building modern web and mobile applications. I specialize in creating seamless user experiences with cutting-edge technologies and AI-powered solutions.

Technical Expertise:
• Backend: Java Spring Boot, REST APIs, MySQL, Node.js
• Frontend: React, Tailwind CSS, Flutter, Modern JavaScript
• Mobile: Android (Java), Flutter (Cross-platform)
• AI/ML: Generative AI, RAG Systems, AI Integration
• Tools: Git, Docker, Firebase, AWS, Android Studio

What I Do:
I transform ideas into reality by building scalable, performant applications that solve real-world problems. From enterprise-grade backend systems to beautiful, responsive frontends, I deliver end-to-end solutions that exceed expectations.

Mission:
Leveraging the power of AI and modern development practices to create innovative solutions that make a difference.`,
};

// Services Offered (from LinkedIn)
export const SERVICES = [
    {
        icon: '🎨',
        title: 'Web Design',
        description: 'Creating stunning, user-friendly interfaces with modern design principles',
    },
    {
        icon: '💻',
        title: 'Web Development',
        description: 'Building responsive, performant web applications with React and modern frameworks',
    },
    {
        icon: '📱',
        title: 'Mobile Development',
        description: 'Developing cross-platform mobile apps with Flutter and native Android',
    },
    {
        icon: '🔧',
        title: 'IT Consulting',
        description: 'Providing expert technical guidance and architecture solutions',
    },
    {
        icon: '📊',
        title: 'Project Management',
        description: 'Leading development teams and delivering projects on time',
    },
    {
        icon: '🤖',
        title: 'AI Integration',
        description: 'Implementing Generative AI and ML solutions in applications',
    },
];

// Certifications
export const CERTIFICATIONS = [
    {
        name: 'Generative AI Leader Certification',
        issuer: 'Google',
        date: '2024',
        credentialUrl: 'https://www.credly.com/badges/1752e0b7-85a2-4a4b-bc4f-f33162dd6529/linked_in_profile',
        logo: '/assets/images/google-ai-cert.png',
        description: 'Advanced certification in Generative AI technologies and leadership',
    },
];

// Education
export const EDUCATION = [
    {
        degree: 'Bachelor of Technology in Computer Science & Engineering (2017-2021)',
        institution: 'Saroj Mohan Institute Of Technology',
        score: 'DGPA: 8.22',
    },
    {
        degree: '12th Grade',
        institution: 'Katwa Bharati Bhaban',
        score: 'Percentage: 73.6%',
    },
    {
        degree: '10th Grade',
        institution: 'Purulia Mahendra Vidyapith',
        score: 'Percentage: 85.71%',
    },
];

// Skills (categorized for better organization)
export const SKILLS = [
    { name: 'Core Java', percentage: 95, category: 'Backend' },
    { name: 'Spring Boot', percentage: 90, category: 'Backend' },
    { name: 'React.js', percentage: 88, category: 'Frontend' },
    { name: 'Tailwind CSS', percentage: 85, category: 'Frontend' },
    { name: 'Flutter', percentage: 85, category: 'Mobile' },
    { name: 'Android (Java)', percentage: 90, category: 'Mobile' },
    { name: 'MySQL', percentage: 85, category: 'Database' },
    { name: 'RESTful APIs', percentage: 92, category: 'Backend' },
    { name: 'Generative AI', percentage: 80, category: 'AI/ML' },
    { name: 'Git & GitHub', percentage: 90, category: 'DevOps' },
    { name: 'Firebase', percentage: 85, category: 'Cloud' },
    { name: 'Docker', percentage: 75, category: 'DevOps' },
];

// Get unique skill categories
export const SKILL_CATEGORIES = [...new Set(SKILLS.map(skill => skill.category))];

// Experience
export const EXPERIENCES = [
    {
        companyLogo: '/assets/images/tcslogo.jpeg',
        companyName: 'Tata Consultancy Services (TCS)',
        role: 'Full-Stack Developer',
        description: `Developed end-to-end web and mobile applications using Core Java, Spring Boot, React, and Flutter. Created RESTful APIs and managed MySQL databases. Implemented CI/CD pipelines using Git and delivered full-stack solutions for enterprise clients. Led initiatives in Generative AI integration and modern web development practices.`,
        duration: 'Oct 2021 - Present',
        achievements: [
            'Delivered 10+ enterprise-grade applications',
            'Improved system performance by 40%',
            'Led team of 5 developers',
            'Implemented AI-powered features',
        ],
    },
];

// Projects
export const PROJECTS = [
    {
        name: 'Read Write & Share',
        logo: '/assets/images/iv.png',
        description: `'RWS' or 'Read Write & Share' is an Android application.
One can use it as a code editor (c,c++,java,python) and sharing purpose`,
        technologies: ['ANDROID', 'JAVA', 'XML', 'REST API (Retrofit)'],
        url: 'https://github.com/iamsouviki/Read-Write-and-Share',
        featured: true,
    },
    {
        name: 'Tic Tac Toe',
        logo: '',
        description: `'Tic Tac Toe' is a flutter application using BackTracking MinMax Algorithm.
Here We can play with computer as well as human.`,
        technologies: ['Flutter', 'Algorithm (BackTracking Minmax)', 'Dart', 'Github', 'Firebase'],
        url: 'https://github.com/iamsouviki/tictactoe_game',
        featured: false,
    },
    {
        name: 'My Portfolio',
        logo: '',
        description: `'My Portfolio' is a React web application with Tailwind CSS. A modern web resume showcasing my work and skills.`,
        technologies: ['REACT', 'TAILWIND CSS', 'FIREBASE', 'GITHUB'],
        url: 'https://github.com/iamsouviki/souvikportfolio',
        featured: true,
    },
    {
        name: 'Expense Manager',
        logo: '',
        description: `'Expense Manager' is a Python GUI tkinter Based application,
which is developed to keep tracking on daily expenses and as well as we can save money for predefined expenses which will help for future investment.`,
        technologies: ['PYTHON', 'SQLite'],
        url: 'https://github.com/iamsouviki/ExpenseManager',
        featured: false,
    },
];

// Stats for homepage
export const STATS = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Certifications', value: '1' },
];

// Routes
export const ROUTES = {
    splash: '/splash',
    home: '/',
    about: '/about',
    experience: '/experience',
    projects: '/projects',
    services: '/services',
};
