import photo from '@/assets/MyProfile.png'
import upholstery from '@/assets/Project_Images/courttesy.png';
import mapleHelp from '@/assets/Project_Images/MapleHelp.png';
import mapleAttendance from '@/assets/Project_Images/Maple-Attendance.png';
import villarubiaAP from '@/assets/Project_Images/VillarubiaA&P.png';
import gastotally from '@/assets/Project_Images/Gastotally.png';
import MyShop from '@/assets/Project_Images/MyShopPOS.png';

export const profile = {
    name: 'George Alfeser Inoc',
    title: 'Full Stack Developer',
    photo: photo,
    summary:
        'Web Developer and Full-Stack Developer with 2+ years of work experience building and maintaining web applications using Vue.js, Laravel, PHP, MySQL and PgSQL. Experienced in business-critical systems like attendance, audit, and ticketing platforms.',
    links: [
        { label: 'Email', icon: 'mail', url: 'mailto:info.alfeser.shiro@gmail.com' },
        { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/shiro77/' },
        { label: 'GitHub', icon: 'github', url: 'https://github.com/ShiroKuroGeo' },
        { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/alfeser.shiro' },
    ],
    personal: [
        { icon: 'pin', value: 'Poblacion Caumbay, Cordova, Cebu' },
        { icon: 'phone', value: '+639565635176' },
        { icon: 'mail', value: 'info.alfeser.shiro@gmail.com' },
        { icon: 'hobby', value: 'Singing, Gaming' },
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
    personality: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    hobby: '<line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/>',
}

export const experience = [
    {
        company: 'Freelancing',
        role: 'Full Stack Developer',
        period: 'June 2024 – Present',
        bullets: [
            'Developed an application for attendance and payroll that focuses on automating payroll, resolving manual deductions, and integrating biometric attendance',
            'Developed web-based client project. It is a reservation and booking system that allows players to reserve a court by the hour on a selected date.',
            'Developed a mobile application for tracking expenses, setting events, and scheduling appointments.',
            'Developed a web-based application for IT Ticketing System.',
        ],
    },
    {
        company: 'Muramoto Audio-Visual Philippines, Inc.',
        role: 'Web Developer',
        period: 'January 2025 – January 2027',
        bullets: [
            'Maintain and support Internal Audit and IT Ticketing Systems to ensure stable daily operations.',
            'Monitor the MAORS ( Attendance ) platform and resolve data discrepancies for accurate HR reporting.',
            'Manage Barcode Printing Systems, including unique ID synchronization and firmware updates.',
            'Develop web-based features using PHP, Laravel, Vue.js, JavaScript, PostgreSQL, and MySQL.',
            'Maintain and support the Receive and Export System (RES) for products scheduled for export.',
            'Develop a mobile application for tracking IT assets',
            'Develop a web-based application for an in-house chat-based AI assistant',
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
    { group: 'Frontend', items: ['HTML5', 'CSS3', 'Vue.js', 'Custom CSS'] },
    { group: 'Programming', items: ['PHP', 'JavaScript'] },
    { group: 'Backend & Database', items: ['Laravel', 'SQL (MySQL/PostgreSQL)'] },
    { group: 'Tools & Deployment', items: ['Git', 'SVN (TortoiseSVN)', 'Vercel', 'Railway'] },
    { group: 'Productivity', items: ['Microsoft Office Suite (Excel, Word, PowerPoint)', 'Canva'] },
    { group: 'Familiarity', items: ['Python', 'Android Studio'] },
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
        title: 'Courttesy',
        type: 'client',
        meta: 'Freelance | July 2026 – Nov 2026',
        description: 'Courttesy is a web-based client project. It is a reservation and booking system that allows players to reserve a court by the hour on a selected date.',
        stack: ['Vue.js', 'Bootstrap 5'],
        image: upholstery,
        live: '',
        repo: '',
    },
    {
        title: 'MAPLE Help',
        type: 'inhouse',
        meta: 'Muramoto Audio-Visual Philippines, Inc.',
        description: 'Chat-based internal support system that helps employees with common inquiries and technical concerns.',
        stack: ['Vue.js', 'Python', 'PGSQL'],
        image: mapleHelp,
        live: '',
        repo: '',
    },
    {
        title: 'MAORS Attendance Platform',
        type: 'inhouse',
        meta: 'Muramoto Audio-Visual Philippines, Inc.',
        description: 'Employee attendance platform. Monitored and maintained it, resolving data discrepancies for accurate HR reporting.',
        stack: ['PHP', 'Laravel', 'PGSQL'],
        image: mapleAttendance,
        live: '',
        repo: '',
    },
    {
        title: 'Villarubi A&P',
        type: 'client',
        meta: 'Freelance | May 2026 – October 2026',
        description: 'A web-based client application for attendance and payroll that focuses on automating payroll, resolving manual deductions, and integrating biometric attendance.  ',
        stack: ['Vue.js', 'Laravel', 'MYSQL'],
        image: villarubiaAP,
        live: '',
        repo: '',
    },
    {
        title: 'Gastotally',
        type: 'mobile',
        meta: 'Freelance | September 2026 – September 2026',
        description: 'A mobile application for tracking expenses, setting events, and scheduling appointments.',
        stack: ['Android Studio'],
        image: gastotally,
        live: '',
        repo: '',
    },
    {
        title: 'My Shop',
        type: 'mobile',
        meta: 'Freelance | October 2026 – November 2026',
        description: 'A mobile inventory and Point-of-Sale (POS) application that allows shop owners to add products, track expenses, and process customer checkouts.',
        stack: ['Android Studio'],
        image: MyShop,
        live: '',
        repo: '',
    },
]