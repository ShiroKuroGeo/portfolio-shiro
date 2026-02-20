<template>
    <div class="container pb-1 pb-md-5 ">
        <div class="row">
            <div class="col-lg-6 p-2">
                <img src="../assets/MyProfile.png" class="rounded myImage" alt="">
            </div>
            <div class="col-lg-6">
                <div class="mt-0 mt-md-5">
                    <p class="lead text-uppercase mb-1">Hello!</p>
                    <h1 class="intro-title marker">
                        I’m George Alfeser, but you can call me Shiro.
                    </h1>
                    <p class="lead fw-normal mt-3">
                        Full Stack Developer
                    </p>
                    <p class="hero-description">
                        A self-taught web developer based in Cordova, Cebu, Philippines, with experience building chat-based support systems, developed and maintaining ticketing systems, and developing single-page applications.
                        I am continuously pursuing growth as a developer and eager to and learn new languages.
                        <button class="btn text-primary p-0 btn-link" @click="downloadResume">
                            Download my resume
                        </button>
                    </p>
                    <div class="row row-cols-1 row-cols-md-3 column-gap-3 g-1 d-flex">
                        <div class="col d-flex flex-column">
                            <div class="border p-2 h-100">
                                <h5>Degree</h5>
                                <small class="text-secondary" style="font-size: 0.7rem;">2020 – 2024</small>
                                <p style="font-size: 0.8rem;">
                                    Bachelor of Science in Information Technology
                                </p>
                            </div>
                        </div>
                        <div class="col d-flex flex-column">
                            <div class="border p-2 h-100">
                                <h5>Skills Focus</h5>
                                <small class="text-secondary" style="font-size: 0.7rem;">Database & Management</small>
                                <p style="font-size: 0.8rem;">
                                    Web Development, FASTApi, Database Design
                                </p>
                            </div>
                        </div>
                        <div class="col d-flex flex-column">
                            <div class="border p-2 h-100">
                                <h5>Projects</h5>
                                <small class="text-secondary" style="font-size: 0.7rem;">Full Stack</small>
                                <p style="font-size: 0.8rem;">
                                    Ticketing System, Chat-based Support, SPA Dashboard
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="social-nav">
                        <nav role="navigation">
                            <ul class="nav justify-content-left">
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" :href="link.facebook" title="Facebook">
                                        <i class="fab fa-facebook"></i>
                                        <span class="menu-title sr-only">Facebook</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" :href="link.instagram" title="Instagram">
                                        <i class="fab fa-instagram"></i>
                                        <span class="menu-title sr-only">Instagram</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" :href="link.instagram" title="Tiktok">
                                        <i class="fab fa-tiktok"></i>
                                        <span class="menu-title sr-only">Tiktok</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank" :href="link.github" title="Github">
                                        <i class="fab fa-github"></i>
                                        <span class="menu-title sr-only">Github</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" @click="downloadResume" title="Resume">
                                        <i class="bi bi-file-earmark-person"></i>
                                        <span class="menu-title sr-only">Resume</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { link } from '@/utils/info';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

const downloadResume = () => {
    Swal.fire({
        title: 'Download Resume?',
        text: 'Do you want to download the resume?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, download',
        cancelButtonText: 'No, maybe later',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            const link = document.createElement('a');
            link.href = '/WebRes.pdf';
            link.download = 'Shiro_Web_Developer_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            Swal.fire(
                'Downloaded!',
                'Shiro resume is being downloaded.',
                'success'
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'Download was cancelled.',
                'info'
            );
        }
    });
}


</script>