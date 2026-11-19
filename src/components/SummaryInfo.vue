<template>
    <div class="left-inner">
        <div class="avatar-ring">
            <div class="avatar">
                <img v-if="profile.photo" :src="profile.photo" :alt="profile.name" />
                <svg v-else class="ico ico-lg" viewBox="0 0 24 24" v-html="icons.user"></svg>
            </div>
        </div>

        <h1 class="name">{{ profile.name }}</h1>
        <p class="role">{{ profile.title }}</p>

        <section class="glass">
            <h2 class="label">Summary</h2>
            <p class="mb-0">{{ profile.summary }}</p>
        </section>

        <section class="links">
            <a v-for="l in profile.links" :key="l.label" :href="l.url" target="_blank" rel="noopener" class="link-pill">
                <svg class="ico" viewBox="0 0 24 24" v-html="icons[l.icon]"></svg>
                {{ l.label }}
            </a>
        </section>

        <section class="glass">
            <h2 class="label">Personal Information</h2>
            <ul class="list-unstyled mb-0 personal">
                <li v-for="p in profile.personal" :key="p.value">
                    <svg class="ico" viewBox="0 0 24 24" v-html="icons[p.icon]"></svg>
                    <span>{{ p.value }}</span>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
import {
    profile,
    icons
} from '@/utils/info';
</script>

<style scoped>
.left-inner {
    padding: 2rem 1.75rem 1.5rem;
}

.left-inner .glass {
    margin-bottom: 1rem;
    font-size: .9rem;
    line-height: 1.55;
    color: var(--dim);
}

.avatar-ring {
    width: 124px;
    height: 124px;
    padding: 3px;
    border-radius: 50%;
    background: var(--glow);
    box-shadow: 0 8px 28px rgba(124, 99, 255, 0.25);
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--ink);
    display: grid;
    place-items: center;
    overflow: hidden;
    color: var(--cyan);
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.name {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin: 1.25rem 0 .3rem;
}

.role {
    display: inline-block;
    font-weight: 600;
    margin-bottom: 1.25rem;
    color: var(--cyan);
    background: var(--cyan-soft);
    border: 1px solid rgba(45, 226, 230, 0.25);
    padding: .2rem .65rem;
    border-radius: 999px;
    font-size: .85rem;
}


.left-pane {
    background:
        radial-gradient(360px 260px at 10% 0%, rgba(124, 99, 255, 0.28), transparent 70%),
        radial-gradient(320px 240px at 95% 100%, rgba(45, 226, 230, 0.12), transparent 70%),
        #0b1129;
    border: 1px solid var(--line);
}

.links {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-bottom: 1rem;
}

.link-pill {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .42rem .85rem;
    border-radius: 999px;
    color: var(--snow);
    text-decoration: none;
    font-size: .85rem;
    font-weight: 600;
    border: 1px solid var(--line);
    background: var(--soft);
    transition: background .2s, border-color .2s, color .2s, transform .2s;
}

.link-pill:hover {
    background: var(--violet-soft);
    border-color: var(--violet);
    color: var(--snow);
    transform: translateY(-1px);
}

.personal li {
    display: flex;
    gap: .65rem;
    align-items: flex-start;
    padding: .35rem 0;
    word-break: break-word;
    color: var(--snow);
}

.personal .ico {
    color: var(--violet);
    margin-top: .2rem;
}
</style>