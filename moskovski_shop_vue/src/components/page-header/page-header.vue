<template>
    <div class="header__wrapper">
        <div class="header__upper-container">
            <div class="header__upper-tabs">
                <button class="header__upper-tab">Главная</button>
                <button class="header__upper-tab">Бренды</button>
                <button class="header__upper-tab tab-long">Акции и новости</button>
                <button class="header__upper-tab tab-long">Подарочные карты</button>
                <button class="header__upper-tab">Универмаг</button>
                <button class="header__upper-tab">Контакты</button>
            </div>
            <div class="header__upper-info">
                <div class="header__info-item">
                    <img class="header__info-pic" src="@/assets/location.png">
                    <div class="header__info-text">Санкт-Петербург</div>
                </div>
                <div class="header__info-item">
                    <img class="header__info-pic" src="@/assets/phone.png">
                    <div class="header__info-phone">8 800 301-78-87
                        <span class="header__info-time">с 11:00 до 21:00</span>
                    </div>
                </div>
                <div class="header__info-item">
                    <img class="header__info-pic pic-mail" src="@/assets/mail.png">
                    <div class="header__info-text">Написать нам</div>
                </div>
                <div class="header__info-item">
                    <div class="header__info-text">RU</div>
                    <img class="header__info-pic pic-arrow" src="@/assets/arrow.png">
                </div>
            </div>
        </div>
        <div class="header__middle-container">
            <img class="header__main-logo" src="@/assets/main_logo.png">
            <div class="header__search-field">
                <div class="header__search-text">Найти товары и бренды...</div>
                <img class="header__search-pic" src="@/assets/search.png">
            </div>
            <div class="header__info-item">
                <img class="header__info-pic" src="@/assets/personal.png">
                <div class="header__info-text">Личный кабинет</div>
            </div>
            <div class="header__info-item">
            <img class="header__info-pic" src="@/assets/cart.png">
        </div>
        </div>
        <div class="header__down-container">
            <div class="header__whose-container">
                <button class="header__upper-tab whose-button">Женщинам</button>
                <button class="header__upper-tab whose-button">Мужчинам</button>
            </div>
            <div class="header__clothes-container">
                <button class="header__down-button">Одежда</button>
                <button class="header__down-button">Верхняя одежда</button>
                <button class="header__down-button">Одежда из меха</button>
                <button class="header__down-button">Обувь</button>
                <button class="header__down-button">Сумки</button>
                <button class="header__down-button">Аксессуары</button>
                <button class="header__down-button">Белье</button>
                <button class="header__down-button">Одежда для дома</button>
                <button class="header__down-button">Одежда для пляжа</button>
                <button class="header__down-button">Колготки, чулки, носки</button>
            </div>
        </div>
    </div>
      </template>
      
<script lang="ts" src="./page-header.ts"></script>
<style lang="scss" src="./page-header.scss">
</style>