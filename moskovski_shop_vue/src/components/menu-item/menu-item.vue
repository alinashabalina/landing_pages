<template>
    <div class="menu-item__wrapper">
        <div class="menu-item__always-visible"> 
            <div class="menu-item__text">{{ mitext }}</div>
            <button class="menu-item__button" @click="onClick">
        </button>
        </div>
        <form class="menu-item__click" :class="isVisible ? 'menu-item__click_visible' : 'menu-item__click_invisible'" ref="click">
            <CheckboxItem :id="miid" :label="milabel" :ltext="miltext"/>
            <CheckboxItem :id="miid1" :label="milabel1" :ltext="miltext1"/>
            <CheckboxItem :id="miid2" :label="milabel2" :ltext="miltext2"/>
        </form>
    </div>
</template>
      
<script lang="ts" src="./menu-item.ts"></script>
<style lang="scss" src="./menu-item.scss">
</style>