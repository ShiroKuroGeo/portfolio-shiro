<template>
    <div class="section pb-4 pt-5 mb-5" id="contact">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class=""><span class="text-primary">Contact</span> Me</h2>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="mt-3 px-1">
                        <div class="h5">Let’s talk how I can help you!</div>
                        <p>If you like my work and want to avail my services then drop me a message using the contact form. </p>
                        <p>Or get in touch using my email, skype or my contact number.</p>
                        <p>See you!</p>
                    </div>
                    <div class="mt-53 px-1">
                        <div class="row d-flex">
                            <div class="col-12 d-flex">
                                <div class="col-2">
                                    <div class="pb-1">Email:</div>
                                </div>
                                <div class="col-10">
                                    <div class="pb-1 fw-bolder">Inocgeorgealfeser@gmail.com</div>
                                </div>
                            </div>
                            <div class="col-12 d-flex">
                                <div class="col-sm-2">
                                    <div class="pb-1">Skype:</div>
                                </div>
                                <div class="col-sm-10">
                                    <div class="pb-1 fw-bolder">George Alfeser Inoc</div>
                                </div>
                            </div>
                            <div class="col-12 d-flex">
                                <div class="col-sm-2">
                                    <div class="pb-1">Phone:</div>
                                </div>
                                <div class="col-sm-10">
                                    <div class="pb-1 fw-bolder">0948-475-0030</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-light my-2 p-3 pt-2">
                        <form>
                            <div class="form-group my-2">
                                <label for="name" class="form-label fw-bolder">Name</label>
                                <input class="form-control form-control-sm" v-model="name" type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="email" class="form-label fw-bolder">Email</label>
                                <input class="form-control form-control-sm" v-model="email" type="email" id="email" name="_replyto" required>
                            </div>
                            <div class="form-group my-2">
                                <label for="message" class="form-label fw-bolder">Message</label>
                                <textarea class="form-control form-control-sm" v-model="message" style="resize: none;" id="message" name="message" rows="4" required></textarea>
                            </div>
                            <span></span>
                            <button class="btn btn-primary btn-sm px-4 rounded-1 text-white mt-2 " type="button" @click="contactme">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { db } from '../firebase/firestore'
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

const name = ref('')
const email = ref('')
const message = ref('')

const contactme = async () => {
    try {
        if (name.value != '' || email.value != '' || message.value != '') {
            await addDoc(collection(db, "contactus"), {
                name: name.value,
                email: email.value,
                message: message.value,
            });
            name.value = ''
            email.value = ''
            message.value = ''
            Swal.fire({
                title: 'Success!',
                text: 'Message sent successfully.',
                icon: 'success'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all fields.',
                icon: 'error'
            })
        }
    } catch (e) {
        console.log('Error:', e);
        Swal.fire({
            title: 'Error!',
            text: 'An error occurred while sending the message.',
            icon: 'error'
        })
    }
}
</script>
