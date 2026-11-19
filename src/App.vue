<template>
    <div class="page">
        <div class="container shell">
            <div class="row g-0 h-100">
                <aside class="col-lg-4 left-pane">
                    <SummaryInfo />
                </aside>
                <main class="col-lg-8 right-pane">
                    <div class="scroller" ref="scroller" @scroll="onScroll">
                        <ProjectInfo />
                        <ExperienceInfo />
                        <SkillInfo />
                        <EducationInfo />
                        <CertificateInfo />
                    </div>
                    <nav class="dock" aria-label="Portfolio sections">
                        <button v-for="t in tabs" :key="t.key" type="button" class="dock-btn" :class="{ active: active === t.key }" :aria-label="t.label" :title="t.label" @click="go(t.key)">
                            <svg class="ico" viewBox="0 0 24 24" v-html="icons[t.icon]"></svg>
                        </button>
                    </nav>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SummaryInfo from './components/SummaryInfo.vue'
import ExperienceInfo from './components/ExperienceInfo.vue'
import SkillInfo from './components/SkillInfo.vue'
import EducationInfo from './components/EducationInfo.vue'
import CertificateInfo from './components/CertificateInfo.vue'
import ProjectInfo from './components/ProjectInfo.vue'
import { icons } from './utils/info.js'

const tabs = [
    { key: 'projects', label: 'Projects', icon: 'folder' },
    { key: 'experience', label: 'Experience', icon: 'briefcase' },
    { key: 'skills', label: 'Skills', icon: 'zap' },
    { key: 'education', label: 'Education', icon: 'cap' },
    { key: 'certifications', label: 'Certifications', icon: 'award' },
]

const scroller = ref(null)
const active = ref('projects')

function go(key) {
    active.value = key
    const el = scroller.value.querySelector('#sec-' + key)
    if (window.innerWidth < 992) el.scrollIntoView({ behavior: 'smooth' })
    else scroller.value.scrollTo({ top: el.offsetTop - 16, behavior: 'smooth' })
}

function onScroll() {
    const pos = scroller.value.scrollTop + 160
    let cur = tabs[0].key
    for (const t of tabs) {
        if (scroller.value.querySelector('#sec-' + t.key).offsetTop <= pos) cur = t.key
    }
    active.value = cur
}
</script>

<style scoped>
@media (min-width: 992px) {
    .page {
        height: 100vh;
        overflow: hidden;
        padding: 1.25rem 0;
        box-sizing: border-box;
    }

    .shell {
        height: 100%;
    }

    .left-pane {
        height: 100%;
        overflow-y: auto;
        scrollbar-width: none;
        border-radius: 24px;
    }

    .right-pane {
        height: 100%;
        position: relative;
    }

    .right-pane::-webkit-scrollbar {
        display: none;
    }

    .scroller {
        height: 100%;
        overflow-y: auto;
        position: relative;
        -ms-overflow-style: none;
    }

    .scroller::-webkit-scrollbar {
        display: none;
    }
}

/* RIGHT */
.scroller {
    padding: 1rem .5rem 8rem 2rem;
    scroll-behavior: smooth;
}

.scroller::-webkit-scrollbar {
    display: none;
}


/* Dock */
.dock {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
    display: flex;
    gap: .4rem;
    padding: .5rem;
    border-radius: 22px;
    background: rgba(8, 13, 32, 0.85);
    border: 1px solid var(--line-strong);
    backdrop-filter: blur(14px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55);
}

.dock-btn {
    width: 3.1rem;
    height: 3.1rem;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    cursor: pointer;
    border: 0;
    border-radius: 16px;
    background: transparent;
    color: var(--dim);
    transition: background .2s, color .2s;
}

.dock-btn:hover {
    color: var(--snow);
    background: var(--soft-hover);
}

.dock-btn.active {
    background: var(--violet);
    color: var(--snow);
    box-shadow: 0 4px 14px rgba(124, 99, 255, 0.4);
}

.dock-btn:focus-visible,
.filter:focus-visible {
    outline: 2px solid var(--cyan);
    outline-offset: 2px;
}

@media (max-width: 991.98px) {
    .scroller {
        padding: 1.5rem 0 7rem;
    }

    .scroller::-webkit-scrollbar {
        display: none;
    }

    .left-pane {
        border-radius: 24px;
        margin-top: 1rem;
    }

    .dock {
        position: fixed;
    }
}

@media (prefers-reduced-motion: reduce) {
    .scroller {
        scroll-behavior: auto;
    }

    .scroller::-webkit-scrollbar {
        display: none;
    }

    .link-pill,
    .filter,
    .dock-btn,
    .project,
    .chip {
        transition: none;
    }
}
</style>

<style>
.page {
    --ink: #080d20;
    --snow: #eef3ff;
    --violet: #7c63ff;
    --violet-soft: rgba(124, 99, 255, 0.16);
    --cyan: #2de2e6;
    --cyan-soft: rgba(45, 226, 230, 0.14);
    --emerald: #34d399;
    --emerald-soft: rgba(52, 211, 153, 0.14);
    --amber: #fbbf24;
    --amber-soft: rgba(251, 191, 36, 0.14);
    --glow: linear-gradient(135deg, var(--violet), var(--cyan));
    --line: rgba(238, 243, 255, 0.12);
    --line-strong: rgba(124, 99, 255, 0.35);
    --soft: rgba(238, 243, 255, 0.045);
    --soft-hover: rgba(238, 243, 255, 0.08);
    --dim: rgba(238, 243, 255, 0.7);
    font-family: Inter, 'Segoe UI', system-ui, -apple-system, sans-serif;
    color: var(--snow);
    background: var(--ink);
    min-height: 100vh;
}

.ico {
    width: 1.1em;
    height: 1.1em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex: none;
}

.ico-lg {
    width: 3rem;
    height: 3rem;
}


.block {
    margin-bottom: 3rem;
}

.block-title {
    font-size: 1.9rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: .6rem;
    display: flex;
    align-items: center;
    gap: .8rem;
}

.block-title::after {
    content: '';
    height: 3px;
    width: 48px;
    border-radius: 3px;
    background: var(--violet);
}

#sec-experience .block-title::after {
    background: var(--cyan);
}

#sec-skills .block-title::after {
    background: var(--emerald);
}

#sec-education .block-title::after {
    background: var(--amber);
}

#sec-certifications .block-title::after {
    background: var(--violet);
}

#sec-education .period {
    color: var(--amber);
}

.entry {
    position: relative;
    margin-bottom: 2rem;
}

.entry ul,
.item ul {
    margin: 0;
    padding-left: 1.15rem;
    color: var(--dim);
    line-height: 1.6;
}

.entry li+li,
.item li+li {
    margin-top: .3rem;
}

.entry li::marker,
.item li::marker {
    color: var(--cyan);
}

.entry-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: .1rem;
}

.entry-role {
    color: var(--dim);
    font-weight: 500;
    margin-bottom: .6rem;
}

.period {
    color: var(--cyan);
    font-size: .85rem;
    font-weight: 600;
    margin-bottom: .2rem;
}

.label {
    font-size: .82rem;
    font-weight: 700;
    letter-spacing: .02em;
    color: var(--cyan);
    margin-bottom: .55rem;
}

.glass {
    background: var(--soft);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 1rem 1.1rem;
    backdrop-filter: blur(8px);
}

.item {
    margin-bottom: 1rem;
}
</style>