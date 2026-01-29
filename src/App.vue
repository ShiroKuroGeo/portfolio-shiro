<template>
    <HeaderPage />
    <div class="page-content">
        <div id="content">
            <div class="">
                <HeroPage />
            </div>
            <div class="mt-1 mt-md-5 bg-primary-subtle py-5 mt-1 mt-md-5">
                <SelfServices />
            </div>
            <div class="mb-5">
                <OwnProject />
            </div>
        </div>
    </div>
    <FooterPage />
</template>

<script setup>
import HeaderPage from './components/HeaderPage.vue';
import HeroPage from './components/HeroPage.vue';
import SelfServices from './components/SelfServices.vue';
import OwnProject from './components/OwnProject.vue';
import FooterPage from './components/FooterPage.vue';
</script>