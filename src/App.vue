<template>
    <HeaderPage />
    <div class="page-content">
        <div id="content">
            <div class="mb-0">
                <HeroPage />
            </div>
            <div class="mb-5">
                <OwnProject />
            </div>
            <div class="my-5">
                <SelfServices />
            </div>
            <ContactPage />
        </div>
    </div>
    <FooterPage />
</template>

<script setup>
import { onMounted } from 'vue';
import HeaderPage from './components/HeaderPage.vue';
import HeroPage from './components/HeroPage.vue';
import SelfServices from './components/SelfServices.vue';
import OwnProject from './components/OwnProject.vue';
import FooterPage from './components/FooterPage.vue';
import ContactPage from './components/ContactPage.vue';

onMounted(() => {
    // alert('Still on going please wait!')
})
</script>