<script setup lang="ts">
const props = defineProps<{
  isShown: Boolean
}>()
</script>

<template>
    <Transition name="modal">
        <div v-if="isShown" class="modal-screen">
            <div class="modal-container">
                <div class="modal-container__header">
                    <slot name="header">status header</slot>
                </div>
                <div class="modal-container__body">
                    <slot name="body">status body</slot>
                </div>
                <div class="modal-container__footer">
                    <slot name="footer">status extra info
                        <button class="modal-container__button" @click="$emit('close')">Close</button>
                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" src="./modal-window.scss"></style>