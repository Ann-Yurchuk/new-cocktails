<script setup>
const props = defineProps({
    cocktail: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="root">
        <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
            <div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="picture"></div>
        </RouterLink>
        <div class="name">{{ cocktail.strDrink }}</div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';

.root {
    width: calc((100% - 76px)/3);
}

.picture {
    width: 120px;
    height: 120px;
    background-repeat: no-repeat;
    background-size: 100%;
}

.name {
    letter-spacing: 0.1em;
    padding-top: 15px;
    text-align: center;
}
</style>