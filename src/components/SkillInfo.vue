<template>
    <section id="sec-skills" class="block">
        <h2 class="block-title">Skills</h2>
        <div class="skills">
            <div v-for="g in skills" :key="g.group" class="glass">
                <h3 class="label">{{ g.group }}</h3>
                <div class="d-flex flex-wrap gap-2">
                    <span v-for="s in g.items" :key="s" class="chip">{{ s }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { skills } from '@/utils/info';
</script>

<style scoped>
.skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
}

.skills .label {
    color: var(--emerald);
}
</style>