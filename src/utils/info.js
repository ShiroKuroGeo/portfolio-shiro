import photo from '@/assets/MyProfile.png'

export const profile = {
    name: 'George Alfeser Inoc',
    title: 'Full Stack Developer',
    photo: photo,
    summary:
        'Web Developer and Full-Stack Developer with 2+ years of experience building and maintaining web applications using Vue.js, Laravel, PHP, and MySQL. Experienced in business-critical systems like attendance, audit, and ticketing platforms.',
    links: [
        { label: 'Email', icon: 'mail', url: 'mailto:info.alfeser.shiro@gmail.com' },
        { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/shiro77/' },
        { label: 'GitHub', icon: 'github', url: 'https://github.com/ShiroKuroGeo' },
        { label: 'Facebook', icon: 'facebook', url: 'https://github.com/ShiroKuroGeo' },
        { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/IAmShiro07' },
    ],
    personal: [
        { icon: 'pin', value: 'Poblacion Caumbay, Cordova, Cebu' },
        { icon: 'phone', value: '+639565635176' },
        { icon: 'mail', value: 'info.alfeser.shiro@gmail.com' },
    ],
}

export const types = {
    client: { label: 'Client project', icon: 'users' },
    inhouse: { label: 'In-house', icon: 'building' },
    mobile: { label: 'Mobile app', icon: 'phone2' },
}

export const icons = {
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    phone2: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
}

export const experience = [
    {
        company: 'Muramoto Audio-Visual Philippines, Inc.',
        role: 'Web Developer',
        period: 'January 2025 – Present',
        bullets: [
            'Maintain and support Internal Audit and IT Ticketing Systems for stable daily operations.',
            'Monitor the MAORS (Employee Attendance) platform and resolve data discrepancies for accurate HR reporting.',
            'Manage Barcode Printing Systems, including unique ID synchronization and firmware updates.',
            'Develop web-based features using PHP, Laravel, Vue.js, JavaScript, and MySQL.',
            'Generate and optimize Excel-based reports and database queries.',
        ],
    },
    {
        company: 'Wise Immigration and Study Services',
        role: 'IT Intern',
        period: 'January 2024 – May 2024',
        bullets: [
            'Developed an in-house IT Ticketing System to streamline technical request management.',
            'Provided technical support by diagnosing and resolving hardware, software, and network issues.',
            'Canvassed and sourced IT equipment based on budget and business requirements.',
        ],
    },
]

export const skills = [
    { group: 'Frontend', items: ['HTML5', 'CSS3', 'Vue.js (2 Years)', 'Bootstrap 5'] },
    { group: 'Programming', items: ['PHP', 'JavaScript'] },
    { group: 'Backend & Database', items: ['Laravel', 'SQL (MySQL/PostgreSQL)'] },
    { group: 'Tools & Deployment', items: ['Git', 'SVN (TortoiseSVN)', 'Vercel'] },
    { group: 'Productivity', items: ['Microsoft Office Suite (Excel, Word, PowerPoint)'] },
    { group: 'Familiarity', items: ['Python', 'Mobile Application Development'] },
]

export const education = [
    { school: 'Cordova Public College', degree: 'Bachelor of Science in Information Technology', period: '2020 – 2024' },
    { school: 'Cordova National High School', degree: 'Technical-Vocational-Livelihood (TVL) – ICT Strand', period: '2018 – 2020' },
]

export const certifications = [
    {
        name: 'TESDA National Certificate (NC) / Program in Application Development Management',
        bullets: [
            'Trained in the systematic management, design, and deployment of software applications.',
            'Developed skills in project lifecycle management and aligning technical solutions with business goals.',
        ],
    },
]

export const projects = [
    {
        title: 'Upholstery Business Website',
        type: 'client',
        meta: 'Freelance | Dec 2023 – Nov 2025',
        description: 'Responsive single-page website that showcases services and receives customer inquiries.',
        stack: ['Vue.js', 'Bootstrap 5'],
        image: '',
        live: '',
        repo: '',
    },
    {
        title: 'MAPLE Help',
        type: 'inhouse',
        meta: 'Muramoto Audio-Visual Philippines, Inc.',
        description: 'Chat-based internal support system that helps employees with common inquiries and technical concerns.',
        stack: ['Vue.js', 'PHP', 'Laravel', 'MySQL'],
    },
    {
        title: 'MAORS Attendance Platform',
        type: 'inhouse',
        meta: 'Muramoto Audio-Visual Philippines, Inc.',
        description: 'Employee attendance platform. Monitored and maintained it, resolving data discrepancies for accurate HR reporting.',
        stack: ['PHP', 'Laravel', 'MySQL'],
    },
    {
        title: 'Internal Audit & IT Ticketing',
        type: 'inhouse',
        meta: 'Muramoto Audio-Visual Philippines, Inc.',
        description: 'Internal audit and IT ticketing systems kept stable and updated for daily business processes.',
        stack: ['PHP', 'Laravel', 'MySQL'],
    },
    {
        title: 'Barcode Printing System',
        type: 'inhouse',
        meta: 'Muramoto Audio-Visual Philippines, Inc.',
        description: 'Managed unique ID synchronization and firmware updates for reliable inventory tracking and labelling.',
        stack: ['Barcode', 'Firmware', 'SQL'],
    },
    {
        title: 'In-house IT Ticketing System',
        type: 'inhouse',
        meta: 'Wise Immigration and Study Services | Internship 2024',
        description: 'Built to streamline technical request management and improve issue tracking.',
        stack: ['Web app'],
    },
    {
        title: 'Your Mobile App (placeholder)',
        type: 'mobile',
        meta: 'Replace this with your first mobile project',
        description: 'Describe what the app does, who it is for, and what you built.',
        stack: ['Add stack here'],
    },
]