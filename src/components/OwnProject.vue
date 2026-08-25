<template>
    <div class="container px-2 px-lg-0 mt-4 md-lg-2">
        <div class="header text-center">
            <h1 class="display fw-bold">My <span class="text-primary">Projects</span></h1>
            <label for="">
                Here you’ll find projects that represent my journey as a developer—from small experiments applications. <br>
                This is the only project I can <span class="text-primary">publicly share</span>, but it showcases my skills and growth as a web developer, with a focus on functionality, performance, and user experience.
            </label>
        </div>
        <hr>
        <!-- <div class="col-12 col-md-3">
            <label for="" class="text-secondary">
                <h6 class="p-0 m-0">
                    Search Project
                </h6>
            </label>
            <input type="search" name="search_project" id="search_project" v-model="search" placeholder="Search Shiro's Project" class="form-control form-control-sm">
        </div> -->
        <div class="col-12">
            <button class="btn btn-sm rounded-0 btn-light me-2 mt-2" v-for="category in categories" :key="category" @click="searchCategory(category.name)" style="font-size: 0.8rem;">
                {{ category.label }}
            </button>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-1 mt-3">
            <div class="col d-flex" v-for="project in filteredProject" :key="project">
                <div class="card card-hovered text-dark border rounded-4 overflow-hidden w-100 d-flex flex-column project-card">
                    <div class="position-relative overflow-hidden" style="height: 200px;">
                        <img :src="project.project_image" alt="#!" class="w-100 h-100 object-fit-cover project-img" />
                        <div class="position-absolute top-0 start-0 w-100 h-100 gradient-overlay"></div>
                    </div>
                    <div class="card-body d-flex flex-column flex-grow-1">
                        <h5 class="card-title fw-bold project-title">
                            {{ project.project_name }}
                        </h5>
                        <p class="text-secondary small mb-2 flex-grow-1">
                            {{ project.project_desc }}
                        </p>
                        <div class="d-flex flex-wrap gap-1 mb-2">
                            <span class="badge bg-secondary text-light rounded-pill px-3 py-1" v-for="value in project.project_tags" :key="value">
                                {{ value }}
                            </span>
                        </div>
                        <div class="mt-auto d-flex gap-2">
                            <a :href="project.project_url" :target="['Wise Ticketing System', 'MAPLE Help'].includes(project.project_name) ? '' : '_blank'"
                                class="btn btn-primary btn-sm flex-fill d-flex align-items-center justify-content-center gap-2">
                                Live Demo
                            </a>
                            <a :href="project.project_github_link" :target="['Wise Ticketing System', 'MAPLE Help'].includes(project.project_name) ? '' : '_blank'"
                                class="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';
// import monsplit_image from '../assets/Project_Images/Monsplit_Screenshot.png'
import courttesy from '../assets/Project_Images/courttesy.png';
import leejet_image from '../assets/Project_Images/Upholstery_Screenshot.png'
import anniv_image from '../assets/Project_Images/shiroxpumall_screenshot.png'
import birthday_image from '../assets/Project_Images/birthday-angelito.png'
import wise_image from '../assets/Project_Images/wise.png'
import maple_image from '../assets/Project_Images/maple.png'

const projects = ref([
    {
        project_name: 'Courttesy',
        project_desc: "A full-stack court reservation web application built with Vue.js, Laravel, and Bootstrap 5 that enables users to view venue schedules, book pickleball courts, and manage bookings in real time. Features interactive calendar components, time-slot selection, and an admin dashboard interface for efficient scheduling and venue management.",
        project_url: 'https://courttesy.vercel.app/',
        project_tags: ['Vue JS', 'Custom CSS', 'Laravel'],
        project_image: courttesy,
        project_github_link: 'https://github.com/ShiroKuroGeo/projectJames',
        category: 'web',
    },
    {
        project_name: 'Leejet Upholstery',
        project_desc: 'A responsive business website developed for an upholstery service company using Vue.js and Bootstrap 5. Implemented structured layouts, reusable components, and mobile-first design to ensure clean presentation and accessibility across devices.',
        project_url: 'https://leejetupholstery.vercel.app/',
        project_tags: ['Vue JS', 'Bootstrap 5'],
        project_image: leejet_image,
        project_github_link: 'https://github.com/ShiroKuroGeo/shiro_project',
        category: 'web',
    },
    {
        project_name: 'Anniversary Gift',
        project_desc: "A single-page web application built with Vue.js and Bootstrap 5, implementing component-based architecture, dynamic rendering, and responsive UI design. Optimized for performance and cross-device compatibility.",
        project_url: 'https://shiroxpumall.vercel.app/',
        project_tags: ['Vue Js', 'Bootstrap 5'],
        project_image: anniv_image,
        project_github_link: 'https://github.com/ShiroKuroGeo/anniversayweb',
        category: 'web',
    },
    {
        project_name: 'Birthday Website Presentation',
        project_desc: "A custom birthday presentation mobile built as a personalized digital experience. Developed using modern front-end technologies with responsive design, smooth transitions, and interactive UI elements. Focused on layout precision, animation timing, and cross-device compatibility.",
        project_url: 'https://birthday-angelito.vercel.app/',
        project_tags: ['Vue Js', 'Bootstrap 5'],
        project_image: birthday_image,
        project_github_link: 'https://github.com/ShiroKuroGeo/anniversayweb',
        category: 'web',
    },
    {
        project_name: 'Wise Ticketing System',
        project_desc: "A web-based ticketing system designed for efficient event management. Built with Vue.js and Bootstrap 5, featuring responsive design, intuitive UI, and smooth workflows for users and admins.",
        project_url: '#!',
        project_tags: ['Vue Js', 'Bootstrap 5', 'Company Project'],
        project_image: wise_image,
        project_github_link: '#!',
        category: 'web',
    },
    {
        project_name: 'MAPLE Help',
        project_desc: "An AI-powered help system developed with Vue.js and Python. Designed for responsive interaction and smooth user experience across devices.",
        project_url: '#!',
        project_tags: ['Vue Js', 'Python', 'Company Project'],
        project_image: maple_image,
        project_github_link: '#!',
        category: 'ai',
    },
]);

const categories = ref([
    {
        name: 'web',
        label: 'Web Project',
    },
    {
        name: 'ai',
        label: 'Artificial Inteligence',
    },
]);

const search = ref('');
const search_category = ref('');

const filteredProject = computed(() => {
    const s = search.value.toLowerCase();
    const c = search_category.value.toLowerCase();

    return projects.value.filter(project => {
        const matchesSearch = !s || project.project_name.toLowerCase().includes(s);
        const matchesCategory = !c || project.category.toLowerCase().includes(c);
        return matchesSearch && matchesCategory;
    });
});

const searchCategory = (cat) => {
    search_category.value = cat;
} 
</script>


<style scoped>
.card-hovered:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.card-hovered {
    box-sizing: border-box;
    box-shadow: 5px 5px rgba(193, 193, 193, 0.3);
    transition: all 0.3s ease;
    cursor: pointer;
}
</style>