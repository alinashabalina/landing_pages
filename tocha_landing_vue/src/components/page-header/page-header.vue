<script setup lang="ts">
</script>



<template>
    <div class="header__wrapper">
        <div class="header__logo-container">
            <img class="header__logo-pic" src="@/assets/header_logo.png">
            <img class="header__logo-text" src="@/assets/tocha.png">
        </div>
        <div class="header__menu-container_unlogged">
            <button class="header__menu-button header__menu-enter">Вход</button>
            <button class="header__menu-button header__menu-register">Регистрация</button>
        </div>
        <div class="header__menu-container_logged">
            <div class="header__menu-item">Подключение</div>
            <div class="header__menu-item">Оплата</div>
            <div class="header__menu-item">Контакты</div>
            <div class="header__menu-item">Выход</div>
        </div>
    </div>
      </template>
      
    <style lang="scss" src="./page-header.scss"></style>