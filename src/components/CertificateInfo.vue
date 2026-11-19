<template>
    <section id="sec-certifications" class="block">
        <h2 class="block-title">Certifications</h2>
        <article v-for="c in certifications" :key="c.name" class="glass item">
            <h3 class="entry-title">{{ c.name }}</h3>
            <ul>
                <li v-for="b in c.bullets" :key="b">{{ b }}</li>
            </ul>
        </article>
    </section>
</template>

<script setup>
import { certifications } from '@/utils/info';
</script>

<style scoped>

</style>