<template>
    <Header />
    <section class="mt-10 md:mt-40">
        <div class="max-w-screen-lg mx-auto">
            <h1 class="text-3xl text-center font-bold">ADProject</h1>
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-start mt-10">
                <video class="rounded-xl mt-10 md:mt-0 w-full md:w-1/2" controls>
                    <source src="/public/MakeResume.mp4" type="video/mp4">
                </video>

                <div class="ml-0 md:ml-20 mt-10 md:mt-0 md:w-1/2">
                    <h3 class="text-xl font-bold text-center">Описание:</h3>
                    <p class="mt-5 text-left md:text-center">ShResume - это инновационная онлайн-платформа, которая поможет вам создать профессиональное резюме в удобном формате и с легкостью скачать его для представления потенциальным работодателям. Сочетая в себе простоту использования и передовые технологии, ShResume обеспечивает максимальное удобство в создании и настройке вашего резюме.</p>
                    <p class="mt-10 font-bold text-left md:text-center">Использованный стек: Vue.js, Tailwind</p>
                </div> 
            </div>
        </div>
    </section>
    <Footer class="mt-20"/>
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue'

</script>