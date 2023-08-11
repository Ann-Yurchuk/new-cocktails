<script setup>
import { storeToRefs } from "pinia";
import AppLayout from "../components/AppLayout.vue";
import CocktailThumb from "../components/CocktailThumb.vue"
import { useRootStore } from "../stores/root";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore);

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredient() {
  rootStore.setIngredient(null)
}

</script>

<template>
  <!-- <AppLayout image="/src/assets/img/dawa-cocktail.jpg" :backFunc="removeIngredient" :is-back-button-visible="!!ingredient"> -->
  <AppLayout :backFunc="removeIngredient" :is-back-button-visible="!!ingredient">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select v-model="rootStore.ingredient" 
          placeholder="Choose main ingredient" 
          size="large" 
          filterable
          allow-create class="select" 
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
        <img src="../assets/img/shot-cocktail.png" alt="Shot Cocktail" class="img" />
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
  align-items: flex-start;
  gap: 38px;
  width: 436px;
  max-height: 400px;
  margin-top: 60px;
  overflow-y: auto;
}
</style>
