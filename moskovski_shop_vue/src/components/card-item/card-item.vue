<template>
    <div class="card__wrapper">
        <div class="card__always-visible">
            <img class="card__main-pic" src="@/assets/clothes1.png">
            <div class="card__card-header"> {{ cheader }}</div>
            <div class="card__card-price"> {{ cprice }}</div>
        </div>
        <div class="card__hover-visible">
            <div class="card__hover-header">Выберите размер ru</div>
            <div class="card__hover-sizes">
                <SizeItem :number="snumber1"/>
                <SizeItem :number="snumber2"/>
                <SizeItem :number="snumber3"/>
                <SizeItem :number="snumber4"/>
            </div>
            <button class="card__hover-button">
                <img class="card__card-pic" src="@/assets/basket.png">
                <div class="card__card-text">добавить в корзину</div>
            </button>
        </div>
    </div>
</template>
      
<script lang="ts" src="./card-item.ts"></script>
<style lang="scss" src="./card-item.scss">
</style>