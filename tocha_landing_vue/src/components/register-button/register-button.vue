<script setup lang="ts">
  const props = defineProps<{
  rbtext: string
}>()
</script>


<template>
    <button class="register-button__wrapper">
        {{ rbtext }}
    </button>
</template>
        
<style lang="scss" src="./register-button.scss"></style>