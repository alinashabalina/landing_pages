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
    </main>
    <PageFooter />
    </div>
    </template>
    
    <script lang="ts" src="./index-page.ts"></script>
    <style lang="scss" src="./index-page.scss">
    </style>