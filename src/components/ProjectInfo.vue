<template>
    <section id="sec-projects" class="block">
        <h2 class="block-title">Projects</h2>
        <p class="intro">Client work, in-house company systems, and mobile apps.</p>
        <div class="filters" role="tablist">
            <button v-for="f in filters" :key="f.key" type="button" class="filter" :class="{ on: filter === f.key }" @click="filter = f.key">
                {{ f.label }} <span class="count">{{ f.count }}</span>
            </button>
        </div>

        <div class="project-grid">
            <article v-for="p in visibleProjects" :key="p.title" class="project">
                <div class="cover" :style="p.image ? { backgroundImage: `url(${p.image})` } : null">
                    <svg v-if="!p.image" class="ico cover-ico" viewBox="0 0 24 24" v-html="icons[types[p.type].icon]"></svg>
                    <span class="type-badge">{{ types[p.type].label }}</span>
                </div>
                <div class="p-body">
                    <h3 class="p-title">{{ p.title }}</h3>
                    <p class="p-meta">{{ p.meta }}</p>
                    <p class="p-desc">{{ p.description }}</p>
                    <div class="d-flex flex-wrap gap-2 mb-2">
                        <span v-for="s in p.stack" :key="s" class="chip">{{ s }}</span>
                    </div>
                    <div v-if="p.live || p.repo" class="p-links">
                        <a v-if="p.live" :href="p.live" target="_blank" rel="noopener">
                            <svg class="ico" viewBox="0 0 24 24" v-html="icons.external"></svg> Live
                        </a>
                        <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener">
                            <svg class="ico" viewBox="0 0 24 24" v-html="icons.code"></svg> Code
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { projects, icons } from '../utils/info';

const filter = ref('all')
const filters = computed(() => [
    { key: 'all', label: 'All', count: projects.length },
    ...Object.keys(types).map((k) => ({
        key: k,
        label: types[k].label,
        count: projects.filter((p) => p.type === k).length,
    })),
])
const visibleProjects = computed(() =>
    filter.value === 'all' ? projects : projects.filter((p) => p.type === filter.value)
)

const types = {
    client: { label: 'Client project', icon: 'users' },
    inhouse: { label: 'In-house', icon: 'building' },
    mobile: { label: 'Mobile app', icon: 'phone2' },
}
</script>

<style scoped>
.intro {
    color: var(--dim);
    margin-bottom: 1.1rem;
}

/* Project filters + cards */
.filters {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-bottom: 1.25rem;
}

.filter {
    border: 1px solid var(--line);
    background: var(--soft);
    color: var(--dim);
    font-weight: 600;
    font-size: .85rem;
    padding: .4rem .9rem;
    border-radius: 999px;
    cursor: pointer;
    transition: background .2s, color .2s, border-color .2s;
}

.filter:hover {
    color: var(--snow);
    background: var(--soft-hover);
    border-color: var(--line-strong);
}

.filter.on {
    background: var(--violet);
    color: var(--snow);
    border-color: var(--violet);
    box-shadow: 0 4px 16px rgba(124, 99, 255, 0.35);
}

.count {
    opacity: .75;
    margin-left: .25rem;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.1rem;
}

.project {
    background: var(--soft);
    border: 1px solid var(--line);
    border-radius: 18px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform .2s, border-color .2s, background .2s;
}

.project:hover {
    transform: translateY(-4px);
    border-color: var(--violet);
    background: var(--soft-hover);
}

.cover {
    height: 124px;
    position: relative;
    display: grid;
    place-items: center;
    background-size: cover;
    background-position: center;
    background-color: #111836;
    border-bottom: 1px solid var(--line);
}

.cover-ico {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--cyan);
    opacity: .9;
}

.type-badge {
    position: absolute;
    top: .7rem;
    left: .7rem;
    background: var(--cyan-soft);
    color: var(--cyan);
    border: 1px solid rgba(45, 226, 230, 0.3);
    font-size: .75rem;
    font-weight: 700;
    padding: .2rem .65rem;
    border-radius: 999px;
    backdrop-filter: blur(6px);
}

.p-body {
    padding: 1rem 1.1rem 1.1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.p-title {
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: .15rem;
}

.p-meta {
    color: var(--cyan);
    font-size: .78rem;
    font-weight: 600;
    margin-bottom: .5rem;
}

.p-desc {
    color: var(--dim);
    font-size: .9rem;
    line-height: 1.5;
    margin-bottom: .75rem;
    flex: 1;
}

.p-links {
    display: flex;
    gap: 1rem;
    margin-top: .25rem;
}

.p-links a {
    color: var(--snow);
    font-size: .85rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: .35rem;
}

.p-links a:hover {
    color: var(--cyan);
}
</style>