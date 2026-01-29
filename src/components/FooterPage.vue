<template>
    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <p class="col-md-4 mb-0 text-body-secondary d-flex flex-row align-items-center">
                <a href="/" class="text-decoration-none" aria-label="Bootstrap">
                    <img src="../assets/Logos.png" class="bi me-2" width="80" alt="George Alfeser">
                </a>
                &copy; 2026 Shiro
            </p>
            <ul class="nav col-md-4 justify-content-end">
                <li v-for="link in links" :key="link">
                    <a :href="link.link" class="nav-link px-1 link-dark">
                        <i :class="link.icon"></i>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
import { links } from '@/utils/info';
</script>