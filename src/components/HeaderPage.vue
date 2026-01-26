<template>
    <div class="container mt-2">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-3">
            <a class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" href="#">
                <img src="../assets/Logos.png" class="bi me-2" width="80" alt="George Alfeser">
            </a>
            <div class="col-md-3">
                <ul class="nav d-flex justify-content-end">
                    <li class="" v-for="link in links" :key="link">
                        <a class="text-decoration-none me-2" target="_blank" :href="link.link" title="Facebook">
                            <i :class="link.icon"></i>
                            <span class="menu-title sr-only">{{ link.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script setup>
import { links } from '../utils/info.js'
</script>