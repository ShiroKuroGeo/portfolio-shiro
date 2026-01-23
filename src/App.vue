<template>
    <HeaderPage />
    <div class="page-content">
        <div id="content">
            <!-- <HeroPage /> -->
            <SelfServices />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
// import HeroPage from './components/HeroPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import SelfServices from './components/SelfServices.vue';

onMounted(()=>{
    // alert('Still on going please wait!')
})
</script>