<script setup lang="ts">
import {useRoute} from "vue-router";
const route = useRoute()
</script>
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="route.fullPath"/>
    </keep-alive>
  </router-view>
</template>
<style lang="scss">
:root {
  --background-color-main: #aaa;
}

:root[theme='dark'] {
  --background-color-main: red;
}

::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}

body {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'myfont';
  src: url("./assets/manrope/manrope-bold-2.otf");
}

#app {
  //font-family:  Avenir, Helvetica, Arial, sans-serif;
  font-family: myfont Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
<script setup lang="ts">
</script>