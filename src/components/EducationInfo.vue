<template>
    <section id="sec-education" class="block">
        <h2 class="block-title">Education</h2>
        <article v-for="e in education" :key="e.school" class="glass item">
            <p class="period">{{ e.period }}</p>
            <h3 class="entry-title">{{ e.school }}</h3>
            <p class="entry-role mb-0">{{ e.degree }}</p>
        </article>
    </section>

</template>

<script setup>
import { education } from '@/utils/info';
</script>