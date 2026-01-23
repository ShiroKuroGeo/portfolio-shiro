<template>
    <div class="container mt-2">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4">
            <a class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" href="#">
                <img src="../assets/Logos.png" class="bi me-2" width="80" alt="George Alfeser">
            </a>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <a href="#" class="nav-link px-2 link-secondary">About</a>
                </li>
                <li>
                    <a href="#" class="nav-link px-2 link-dark">Services</a>
                </li>
                <li>
                    <a href="#" class="nav-link px-2 link-dark">Skills</a>
                </li>
                <li>
                    <a href="#" class="nav-link px-2 link-dark">Projects</a>
                </li>
                <li>
                    <a href="#" class="nav-link px-2 link-dark">Experience</a>
                </li>
                <li>
                    <a href="#" class="nav-link px-2 link-dark">Contact</a>
                </li>
            </ul>
            <div class="col-md-3 text-end">
                <a class="text-decoration-none me-2" target="_blank" :href="link.facebook" title="Facebook">
                    <i class="fab fa-facebook"></i>
                    <span class="menu-title sr-only">Facebook</span>
                </a>
                <a class="text-decoration-none me-2" target="_blank" :href="link.instagram" title="Instagram">
                    <i class="fab fa-instagram"></i>
                    <span class="menu-title sr-only">Instagram</span>
                </a>
                <a class="text-decoration-none me-2" target="_blank" :href="link.github" title="github">
                    <i class="fab fa-github"></i>
                    <span class="menu-title sr-only">github</span>
                </a>
            </div>
        </header>
    </div>
</template>

<script setup>
import { link } from '../utils/info.js'

</script>