<template>
    <div class="container px-2 px-lg-0" id="services">
        <div class="text-start mb-3">
            <h4>My <span class="text-primary">Skills</span> and <span class="text-primary">Coding Languages</span></h4>
            <label class="text-muted">
                Learning web developer with experience in Frontend, Backend, Databases, and Dev Tools. I continuously improve my skills and build projects using modern technologies like Vue.js, React.js, Laravel, Node.js, and more.
            </label>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-1">
            <div class="col d-flex">
                <div class="border p-2 w-100">
                    <h5>Frontend</h5>
                    <ul class="nav d-flex flex-column">
                        <li class="mb-1 me-2">
                            <h6 class="m-0">Frameworks / Libraries</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Vue.js (CLI & CDN / non-CLI)</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Quasar (CLI) <div class="badge bg-primary" style="cursor: pointer;" title="Started May 2024">New</div></small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">React.js (CLI) <div class="badge bg-primary" style="cursor: pointer;" title="Started October 2025">New</div> </small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">jQuery</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2">
                            <h6 class="m-0">Markup & Styling</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">HTML5</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">CSS3</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Bootstrap 5.3</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2" v-show="show_more[0]">
                            <h6 class="m-0">State Management</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Vuex</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Pinia</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2">
                            <a class="text-decoration-none text-primary small ms-2 border-bottom border-primary" style="cursor: pointer; padding-bottom: 2px;" @click="show_more[0] = !show_more[0]">
                                {{ !show_more[0] ? 'Show More' : 'Show Less' }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col d-flex">
                <div class="border p-2 w-100">
                    <h5>Backend</h5>
                    <ul class="nav d-flex flex-column">
                        <li class="mb-1 me-2">
                            <h6 class="m-0">Languages</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">PHP</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">JavaScript / Node.js (Express)</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Python (FastAPI)</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2">
                            <h6 class="m-0">Framework</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Laravel (PHP framework, MVC)</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Express</small>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col d-flex">
                <div class="border p-2 w-100">
                    <h5>Databases</h5>
                    <ul class="nav d-flex flex-column">
                        <li class="mb-1 me-2">
                            <h6 class="m-0">Relational Databases</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">MySQL</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">PostgreSQL</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">SQLite</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2">
                            <h6 class="m-0">NoSQL Databases</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Firebase / Firestore</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Redis <div class="badge bg-primary" title="October 2025 - December 2025">New</div></small>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col d-flex">
                <div class="border p-2 w-100">
                    <h5>Tools</h5>
                    <ul class="nav d-flex flex-column">
                        <li class="mb-1 me-2">
                            <h6 class="m-0">Version Control</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Git</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Github</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2">
                            <h6 class="m-0">Package / Dependency</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">NPM</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Composer</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2">
                            <h6 class="m-0">Development Tools</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Vite</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Laravel Mix</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2" v-show="show_more[1]">
                            <h6 class="m-0">API / Testing Tools</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Postman</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Laravel Mix</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2" v-show="show_more[1]">
                            <h6 class="m-0">Deployment / Hosting</h6>
                            <ul>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Vercel</small>
                                </li>
                                <li>
                                    <small class="text-secondary" style="font-size: 0.8rem;">Netlify</small>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-1 me-2">
                            <a class="text-decoration-none text-primary small ms-2 border-bottom border-primary" style="cursor: pointer; padding-bottom: 2px;" @click="show_more[1] = !show_more[1]">
                                {{ !show_more[1] ? 'Show More' : 'Show Less' }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show_more = ref([
    false,
    false,
]);
</script>