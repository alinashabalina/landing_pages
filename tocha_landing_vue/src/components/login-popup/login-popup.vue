<script setup lang="ts">
import CloseButton from "../close-button/close-button.vue"
import RegisterButton from "../register-button/register-button.vue"
</script>


<template>
    <div class="login-popup__wrapper">
        <CloseButton class="login-popup__close-pic" />
        <div class="login-popup__header">Вход</div>
        <form class="login-popup__form-container">
            <input type="phone" class="login-popup__form-field" 
            placeholder="Телефон">
            <input type="password" class="login-popup__form-field" 
            placeholder="Пароль">
            <button class="login-popup__remind-password">Напомнить пароль
            </button>
            <RegisterButton class="login-popup__form-button" rbtext="Войти"/>
        </form>
</div>
</template>
   
<style lang="scss" src="./login-popup.scss">
</style>