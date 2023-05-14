<template>
    <div class="index-page__wrapper">
    <header class="index-page__header">
      <PageHeader />
    </header>
    <main>
      <ul class="index-page__breadcrumbs">
        <BreadcrumbItem class="index-page__bc-item" href="#" bctext="Главная"/>
        <div class="index-page__bc-whom">
          <div class="index-page__arrow first-arrow">></div>
          <BreadcrumbItem class="index-page__bc-item" href="#" bctext="Женщинам"/>
          <BreadcrumbItem class="index-page__bc-item" href="#" bctext="Мужчинам"/>
      </div>
      <div class="index-page__bc-what">
        <div class="index-page__arrow first-arrow">></div>
        <BreadcrumbItem class="index-page__bc-item" href="#" bctext="Одежда"/>
      </div>
      </ul>
      <h1 class="index-page__clothes-header">Пальто</h1>
      <div class="index-page__main-container">
        <div class="index-page__menu-container"></div>
      <div class="index-page__cards-container">
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <CardItem class="index-page__card-item" cheader="Женская куртка Bulmer" 
        cprice="123456 Ru" snumber1="42" snumber2="44" snumber3="46" 
        snumber4="48"/>
        <div class="index-page__button-line"><PageButton 
          class="index-page__cards-button" 
          pbtext="Показать ещё"/>
          <div class="index-page__numbers-container">
            <PageNumber 
          class="index-page__cards-number-blocked" 
          pntext="<"/>
          <PageNumber 
          class="index-page__cards-number" 
          pntext="1"/>
          <PageNumber 
          class="index-page__cards-number" 
          pntext="2"/>
          <PageNumber 
          class="index-page__cards-number" 
          pntext="3"/>
          <PageNumber 
          class="index-page__cards-number" 
          pntext="4"/>
          <PageNumber 
          class="index-page__cards-number" 
          pntext=">"/>
          </div>
        </div>
      </div>
    </div>
    </main>
    <PageFooter />
    </div>
    </template>
    
    <script lang="ts" src="./index-page.ts"></script>
    <style lang="scss" src="./index-page.scss">
    </style>