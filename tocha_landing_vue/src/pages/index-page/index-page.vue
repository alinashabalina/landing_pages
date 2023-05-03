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
        <AboutItem header="Ничего лишнего" icon="getImage(‘icon1‘)" />
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
      <TarifItem />
      <TarifItem />
      <TarifItem />
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