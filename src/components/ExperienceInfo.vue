<template>
    <section id="sec-experience" class="block">
        <h2 class="block-title">Experience</h2>
        <div class="timeline">
            <article v-for="job in experience" :key="job.company" class="entry">
                <span class="dot"></span>
                <p class="period">{{ job.period }}</p>
                <h3 class="entry-title">{{ job.company }}</h3>
                <p class="entry-role">{{ job.role }}</p>
                <ul>
                    <li v-for="b in job.bullets" :key="b">{{ b }}</li>
                </ul>
            </article>
        </div>
    </section>
</template>

<script setup>
import { experience } from '@/utils/info';
</script>

<style scoped>

.timeline {
    position: relative;
    padding-left: 1.6rem;
    border-left: 2px solid var(--line-strong);
}

.dot {
    position: absolute;
    left: calc(-1.6rem - 7px);
    top: .3rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--cyan);
    box-shadow: 0 0 0 4px var(--ink), 0 0 12px rgba(45, 226, 230, 0.5);
}
</style>