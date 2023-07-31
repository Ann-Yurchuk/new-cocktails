<script setup>
import { ref } from "vue";
import AppLayout from "../components/AppLayout.vue";
import CocktailThumb from "../components/CocktailThumb.vue"
import { useRootStore } from "../stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, cocktails } = storeToRefs(rootStore);
const ingredient = ref(null);

function getCocktails() {
  rootStore.getCocktails(ingredient.value);
}
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select v-model="ingredient" 
            placeholder="Choose main ingredient" 
            size="large" class="select"
            @change="getCocktails">
            <el-option v-for="item in ingredients"
            :key="item.strIngredient1" 
            :label="item.strIngredient1"
            :value="item.strIngredient1" />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/shot-cocktail.png" alt="Shot Cocktail" class="img" />
      </div>
      <div v-else="" class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb v-for="cocktail in cocktails"
          :key="cocktail.idDrink" 
          :cocktail="cocktail" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
}

.title {
  margin-top: 100px;
}

.select-wrapper {
  padding-top: 50px;
}

.select {
  width: 220px;
}

.text {
  max-width: 516px;
  padding-top: 50px;
  line-height: 2.25;
  text-align: center;
  letter-spacing: 0.1em;
  color: $textMuted;
}

.img {
  margin-top: 60px;
}

.cocktails {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 38px;
  width: 436px;
  max-height: 400px;
  margin-top: 60px;
  overflow-y: auto;
}
</style>
