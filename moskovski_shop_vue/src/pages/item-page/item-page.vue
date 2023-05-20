<template>
    <div class="item-page__wrapper">
    <header class="item-page__header">
      <PageHeader />
    </header>
    <main>
      <ul class="item-page__breadcrumbs">
        <BreadcrumbItem class="item-page__bc-item" href="#" bctext="Главная"/>
        <div class="item-page__bc-whom">
          <div class="item-page__arrow first-arrow">></div>
          <BreadcrumbItem class="item-page__bc-item" href="#" bctext="Женщинам"/>
          <BreadcrumbItem class="item-page__bc-item" href="#" bctext="Мужчинам"/>
      </div>
      <div class="item-page__bc-what">
        <div class="item-page__arrow first-arrow">></div>
        <BreadcrumbItem class="item-page__bc-item" href="#" bctext="Одежда"/>
      </div>
      </ul>
    </main>
    <footer class="item-page__footer">
    <PageFooter />
  </footer>
    </div>
    </template>
    
    <script lang="ts" src="./item-page.ts"></script>
    <style lang="scss" src="./item-page.scss">
    </style>