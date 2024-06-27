<template>
  <section ref="history" class="flex justify-center px-4">
    <div class="text-center mx-auto">
      <h1 class="text-3xl font-bold">История развития:</h1>
      <div class="flex flex-col md:flex-row items-start mt-10">
        <div class="block flex-1">
          <div class="mt-10 md:mt-20 mx-5 md:mx-20">
            <div class="flex gap-3 items-center justify-start md:justify-center">
              <img src="/public/csharp.svg" alt="" width="30">
              <h3 class="text-3xl font-bold">2022</h3>
            </div>
            <p class="mt-3 text-left md:text-center">
              Начал изучать программирование с Python, затем переключился на C#. Принимал заказы на фрилансе, создавая парсеры и автореги. Использовал .NET Framework/Core, System.Net(работа с сетью), Puppeteer, imap/pop3.
            </p>
          </div>
          <div class="mt-20 md:mt-40 mx-5 md:mx-20">
            <div class="flex gap-2 items-center justify-start md:justify-center">
              <img src="/public/WorldSkills.png" alt="" width="50">
              <h3 class="text-3xl font-bold">2024</h3>
            </div>
            <p class="mt-3 text-left md:text-center">
              Записался на WorldSkills по веб-разработке и получил свободное посещение. Выбрал стек Vue.js и Node.js. После закрытия BankaiShop ищу стажировку/работу в компаниях.
            </p>
          </div>
        </div>
        <img class="hidden md:block mt-10 md:mt-5 mx-auto" src="/public/Line.svg" alt="" width="150">
        <div class="block flex-1 mt-10 md:mt-0">
          <div class="mt-20 md:mt-40 mx-5 md:mx-20">
            <div class="flex gap-3 items-center justify-start md:justify-center">
              <img src="/public/Icons/nuxt.svg" alt="" width="30">
              <h3 class="text-3xl font-bold">2023</h3>
            </div>
            <p class="mt-3 text-left md:text-center">
              Прошёл 3 месячную стажировку в BankaiShop. И после трудойстроился там и начал активно работать над UI сайта BankaiShop, адаптировал верстку под праздники. Добавил отзывы, рейтинги, систему рекомендаций, интеграцию с соцсетями и подписку на уведомления.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
