<template>
    <div class="index-page__wrapper">
    <header class="index-page__header">
      <PageHeader />
    </header>
    <main>
      <div class="index-page__page-wrapper">
        <div class="index-page__info">
        <div class="index-page__info-container">
          <div class="index-page__info-header">
            <span class="index-page__info-purple">
              Telegram чат
            </span>
            на вашем сайте
          </div>
          <div class="index-page__info-text">
            Общение с клиентами станет простым и удобным, а подключение 
            займет 5 минут. Первый месяц — 
            <span class="index-page__info-purple">
              бесплатно!
            </span>
          </div>
        </div>
        <img class="index-page__info-pic" src="@/assets/phone.png">
      </div>
    </div>
    <div class="index-page__about-wrapper">
      <div class="index-page__about-container">
      <div class="index-page__about-info">
        <AboutItem header="Ничего лишнего" :icon="getImage('item1')" />
        <AboutItem header="Простота" icon="item2" />
        <AboutItem header="Несколько ассистентов" icon="item3" />
        <AboutItem header="Кастомизация" icon="item4" />
      </div>
      <img class="index-page__about-pic" src="@/assets/chat.png">
    </div>
    </div>
    <div class="index-page__tarif-wrapper">
      <div class="index-page__tarif-header">
        Тарифы
      </div>
      <div class="index-page__tarif-subheader">
        Стоимость зависит от трафика сайта
      </div>
      <div class="index-page__tarif-container">
      <TariffItem thtext="Бесплатно" price="Пробный период на 1 месяц" 
      start="0₽/первый месяц" tbtext="Подключить за 0₽"/>
      <TariffItem thtext="Базовый" price="Менее 1000 посещений в сутки" 
      start="200₽/месяц" tbtext="Подключить за 200₽"/>
      <TariffItem thtext="Премиум" price="Более 1000 посещений в сутки" 
      start="500₽/месяц" tbtext="Подключить за 500₽"/>
    </div>
    </div>
    <div class="index-page__steps-wrapper">
      <div class="index-page__steps-header">
        Всего 3 шага для подключения Telegram чата
      </div>
      <div class="index-page__steps-container">
        <StepItem class="index-page__step-item1" sheader="Telegram bot" 
        stext="Вы создаёте Telegram бота для вашего сайта" />
        <StepItem class="index-page__step-item2" sheader="Подключение Tocha" 
        stext="Tocha подключает Telegram бота к вашиму сайту" />
        <StepItem class="index-page__step-item3" sheader="Telegram-чат" 
        stext="Консультант отвечает на вопросы посетителей сайта" />
      </div>
      <div class="index-page__phones-container">
        <img class="index-page__step-phone1 index-page__step-phone" 
        src="@/assets/phone1.svg">
        <img class="index-page__step-phone2 index-page__step-phone" 
        src="@/assets/phone2.svg">
        <img class="index-page__step-phone3 index-page__step-phone" 
        src="@/assets/phone3.svg">
      </div>
    </div>
    </main>
    <footer class="index-page__footer">
      <PageFooter />
  </footer>
  </div>
    </template>
    
    <script lang="ts" src="./index-page.ts"></script>
    <style lang="scss" src="./index-page.scss">
    </style>