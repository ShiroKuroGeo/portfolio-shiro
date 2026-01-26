<template>
    <div class="container" style="height: 95vh !important; min-height: 80vh !important;">
        <div class="header">
            <h3>My <span class="text-primary">Projects</span></h3>
            <label for="">
                Here you’ll find projects that represent my journey as a developer—from small experiments to full-scale applications. These are works I’ve built while learning and growing as a web developer, each one teaching me something new and
                helping sharpen my skills, with a strong focus on functionality, performance, and user experience.
            </label>
        </div>
        <hr>
        <div class="col-12 col-md-3">
            <label for="" class="text-secondary">
                <h6 class="p-0 m-0">
                    Search Project
                </h6>
            </label>
            <input type="search" name="search_project" id="search_project" v-model="search_category" placeholder="Search Shiro's Project" class="form-control form-control-sm">
        </div>
        <div class="col-12">
            <button class="btn btn-sm rounded-0 btn-light me-2 mt-2" v-for="category in categories" :key="category" style="font-size: 0.8rem;">
                {{ category.label }}
            </button>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-1 mt-3">
            <div class="col h-100 d-flex flex-column" v-for="project in filteredProject" :key="project">
                <div class="car text-dark border rounded-4 overflow-hidden h-100 project-card">
                    <div class="position-relative overflow-hidden" style="height: 200px;">
                        <img :src="project.project_image" alt="#!" class="w-100 h-100 object-fit-cover project-img" />
                        <div class="position-absolute top-0 start-0 w-100 h-100 gradient-overlay"></div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold project-title">
                            {{ project.project_name }}
                        </h5>
                        <p class="text-secondary small mb-2 text-truncate-2">
                            {{ project.project_desc }}
                        </p>
                        <div class="d-flex flex-wrap gap-1 mb-2">
                            <span class="badge bg-secondary text-light rounded-pill px-3 py-1" v-for="value in project.project_tags" :key="value">
                                {{ value }}
                            </span>
                        </div>
                        <div class="mt-auto d-flex gap-2">
                            <a :href="project.project_url" target="_blank" class="btn btn-primary btn-sm flex-fill d-flex align-items-center justify-content-center gap-2">
                                Live Demo
                            </a>
                            <a :href="project.project_github_link" target="_blank" class="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center">
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
import monsplit_image from '../assets/Project_Images/Monsplit_Screenshot.png'
import leejet_image from '../assets/Project_Images/Upholstery_Screenshot.png'
import anniv_image from '../assets/Project_Images/shiroxpumall_screenshot.png'

const projects = ref([
    {
        project_name: 'Monsplit',
        project_desc: 'Easily distribute your salary into savings, loans, and expenses with real-time charts and insights. Plan smarter, save more, and stay financially organized without complicated calculations.',
        project_url: '#!',
        project_tags: ['React JS', 'Bootstrap 5', 'Zustand'],
        project_image: monsplit_image,
        project_github_link: 'https://github.com/ShiroKuroGeo/monsplit',
        category: 'web',
    },
    {
        project_name: 'Leejet Upholstery',
        project_desc: 'We help you transform your spaces with quality craftsmanship. Our expertise ensures your vision becomes reality, using the right tools and techniques to deliver exceptional results.',
        project_url: 'https://shiro-project-j7u0clmbg-shirokurogeos-projects.vercel.app/',
        project_tags: ['Vue JS', 'Bootstrap 5'],
        project_image: leejet_image,
        project_github_link: 'https://github.com/ShiroKuroGeo/shiro_project',
        category: 'web',
    },
    {
        project_name: 'Anniversary Gift',
        project_desc: "Anniversary website gift for my girlfriend. May this special day be filled with love, joy, and cherished memories as you celebrate the beautiful journey of your love together. Here's to many more years of happiness and togetherness.",
        project_url: 'https://shiroxpumall.vercel.app/',
        project_tags: ['Vue Js', 'Bootstrap 5'],
        project_image: anniv_image,
        project_github_link: 'https://github.com/ShiroKuroGeo/anniversayweb',
        category: 'web',
    },
]);

const categories = ref([
    {
        name: 'all',
        label: 'All Project',
    },
    {
        name: 'web',
        label: 'Web Project',
    },
    {
        name: 'ai',
        label: 'Artificial Inteligence',
    },
]);

const search_category = ref('');
const filteredProject = computed(() => {
    let search = search_category.value.toLowerCase();

    if (!search) {
        return projects.value
    }

    return projects.value.filter(project => project.category.toLowerCase().includes(search) || project.project_name.toLowerCase().includes(search))
});
</script>