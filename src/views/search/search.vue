<template>
  <header-component @submit="submit" :value="value" ref="headerCom"></header-component>
  <div class="category">
    <div class="header">
      <img :src="require('@/assets/Arrow.png')" alt="返回主页" @click="()=>router.back()">
      <span>{{ title }}</span>
    </div>
    <div class="box__list">
      <div class="box" v-for="(item,index) in BoxArray" :key="index">
        <img :src="item.imgUrl" alt="">
        <span>{{ item.bookname }}</span>
        <span>{{ item.auther }}</span>
        <span>{{ item.price == 0 ? 'Free' : item.price + " $" }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderComponent from "@/components/headerComponent.vue";
import {useRoute, useRouter} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";
import {http} from "@/util/fetchIntercept";

const route = useRoute()
const router = useRouter()
const value = ref()
value.value = route.query.value
router.replace({
  path: '/search',
  query: null
})
const title = "Search Result"
const BoxArray = ref([])
const headerCom = ref()
onMounted(() => {
  if (value.value) {
    headerCom.value.submit()
  }
})
const submit = (value: any) => {
  BoxArray.value = value
}
</script>
<style lang="scss" scoped>
.category {
  margin: 20px;

  .header {
    height: 30px;
    line-height: 30px;

    img {
      vertical-align: middle;
      scale: 0.7;
      cursor: pointer;
    }

    span {
      vertical-align: middle;
      font-weight: bold;
      font-size: 18px;
      margin-left: 5px;
    }
  }

  .box__list {
    cursor: pointer;
    display: grid;
    grid-template-columns:repeat(auto-fit, 180px);
    justify-content: space-between;
    justify-items: center;

    .box {
      background: #F4F4FF;
      width: 180px;
      height: 260px;
      margin: 10px 0px;

      &:hover {
        transform: scale(1.1);
        transition: .5s ease-in-out;
      }

      img {
        width: 120px;
        height: 180px;
        margin: 10px auto;
        display: block;

      }

      span {
        display: block;
        margin-left: 10px;
      }

      span:nth-child(2) {
        font-size: 13px;
        font-weight: 700;
      }

      span:nth-child(3) {
        font-size: 10px;
        position: relative;
        left: 0px;
        scale: 0.9;
      }

      span:nth-child(4) {
        position: relative;
        color: #6251DD;
        font-weight: bold;
        font-size: 15px;
        left: 100px;
        top: -23px;
      }
    }
  }
}
</style>