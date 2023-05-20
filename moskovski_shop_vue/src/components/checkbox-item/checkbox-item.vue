<template>
    <div class="checkbox__wrapper">
    <input type="checkbox" class="checkbox__input" :id="id" checked>
    <label :for="label" class="checkbox__label">{{ ltext }}</label>
    </div>
</template>
      
<script lang="ts" src="./checkbox-item.ts"></script>
<style lang="scss" src="./checkbox-item.scss">
</style>