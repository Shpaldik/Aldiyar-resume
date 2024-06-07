<template>
    <Header />
    <section class="mt-10 md:mt-40">
        <div class="max-w-screen-lg mx-auto">
            <h1 class="text-3xl text-center font-bold">DinaBlog</h1>
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-start mt-10">
                <video class="rounded-xl mt-10 md:mt-0 w-full md:w-1/2" controls>
                    <source src="/public/DinaBlog.mp4" type="video/mp4">
                </video>

                <div class="ml-0 md:ml-20 mt-10 md:mt-0 md:w-1/2">
                    <h3 class="text-xl font-bold text-center">Описание:</h3>
                    <p class="mt-5 text-left md:text-center">DinaBlog - это сайт-блог, который дает вам уникальный взгляд на жизнь и приключения человека, переезжающего в Америку. На страницах этого блога вы найдете множество увлекательных историй, полезных советов и личных рефлексий автора о его опыте адаптации и обучения в новой стране.

                        Создатель блога, Дина, делится с читателями своими мыслями о культурных различиях, языковых барьерах, вызовах поиска работы и многом другом. Она описывает свои впечатления от новых мест, встреч с людьми и открытия, которые сделал на своем пути к освоению американского образа жизни. А так же предоставляет свой услуги по английскому!</p>
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