<template>
    <div class="container" style="min-height: 85vh !important;">
        <div class="row">
            <div class="col-lg-6 p-2">
                <div class="border h-100 bg-light d-flex justify-content-center align-items-center">
                    George Alfeser Picture
                </div>
            </div>
            <div class="col-lg-6">
                <div class="mt-5">
                    <p class="lead text-uppercase mb-1">Hello!</p>
                    <h1 class="intro-title marker">
                        I’m George Alfeser, but you can call me Shiro.
                    </h1>
                    <p class="lead fw-normal mt-3">
                        Full Stack Developer
                    </p>
                    <p class="hero-description">
                        A self-taught web developer based in Cordova, Cebu, Philippines, with experience building chat-based support systems, maintaining ticketing systems, and developing single-page applications.
                        I am continuously pursuing growth as a developer and eager to expand my skills and learn new languages.
                    </p>
                    <div class="row row-cols-1 row-cols-md-3 column-gap-3 g-1 d-flex">
                        <div class="col d-flex flex-column">
                            <div class="border p-2 h-100">
                                <h5>Degree</h5>
                                <small class="text-secondary" style="font-size: 0.7rem;">2020 – 2024</small>
                                <p style="font-size: 0.8rem;">
                                    Bachelor of Science in Information Technology
                                </p>
                            </div>
                        </div>
                        <div class="col d-flex flex-column">
                            <div class="border p-2 h-100">
                                <h5>Skills Focus</h5>
                                <small class="text-secondary" style="font-size: 0.7rem;">Database & Management</small>
                                <p style="font-size: 0.8rem;">
                                    Web Development, REST APIs, Database Design
                                </p>
                            </div>
                        </div>
                        <div class="col d-flex flex-column">
                            <div class="border p-2 h-100">
                                <h5>Projects</h5>
                                <small class="text-secondary" style="font-size: 0.7rem;">Full Stack</small>
                                <p style="font-size: 0.8rem;">
                                    Ticketing System, Chat-based Support, SPA Dashboard
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="social-nav">
                        <nav role="navigation">
                            <ul class="nav justify-content-left">
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" :href="link.facebook" title="Facebook">
                                        <i class="fab fa-facebook"></i>
                                        <span class="menu-title sr-only">Facebook</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" :href="link.instagram" title="Instagram">
                                        <i class="fab fa-instagram"></i>
                                        <span class="menu-title sr-only">Instagram</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" :href="link.instagram" title="tiktok">
                                        <i class="fab fa-tiktok"></i>
                                        <span class="menu-title sr-only">Tiktok</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" :href="link.github" title="github">
                                        <i class="fab fa-github"></i>
                                        <span class="menu-title sr-only">github</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { link } from '@/utils/info';
</script>