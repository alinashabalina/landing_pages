<script setup lang="ts">
import CloseButton from "../close-button/close-button.vue"
import RegisterButton from "../register-button/register-button.vue"
</script>


<template>
    <div class="register-popup__wrapper">
        <CloseButton class="register-popup__close-pic" />
        <div class="register-popup__header">Регистрация</div>
        <form class="register-popup__form-container">
            <input type="phone" class="register-popup__form-field" 
            placeholder="Телефон">
            <input type="email" class="register-popup__form-field" 
            placeholder="Электронная почта">
            <input type="password" class="register-popup__form-field" 
            placeholder="Пароль">
            <input type="password" class="register-popup__form-field" 
            placeholder="Повторите пароль">
            <RegisterButton class="register-popup__form-button" rbtext="Войти"/>
        </form>
</div>
</template>
        
<style lang="scss" src="./register-popup.scss"></style>