<template>
  <header-component></header-component>
  <div class="category">
    <div class="header">
      <img :src="require('@/assets/Arrow.png')" alt="返回主页" @click="()=>router.back()">
      <span>Book Detail</span>
    </div>
    <div class="content">
      <div class="imgDiv">
        <img :src="bookInfo.imgUrl" alt="">
      </div>
      <div class="Info">
        <div class="love"></div>
        <div class="Info__ba">
          <span>{{ bookInfo.bookname }}</span>
          <span>{{ bookInfo.auther }}</span>
        </div>
        <div class="article">
          <p>Summary</p>
          <p>
            {{bookInfo.Summary}}
          </p>
        </div>
      </div>
    </div>
    <div class="myBtn">
      <span>{{ bookInfo.price == 0 ? 'Free' : bookInfo.price + " $" }}</span>
      <span>Buy Now</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderComponent from "@/components/headerComponent.vue";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";

const route = useRoute()
const bookInfo = JSON.parse(route.query.t as any)
const router = useRouter()
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

  .content {
    margin: 15px 0px;
    display: flex;

    .imgDiv {
      width: 252px;
      height: 342px;
      background: #F4F4FF;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 180px;
        height: 270px;
      }
    }

    .Info {
      flex: 1;
      padding-left: 50px;
      padding-top: 10px;

      .love {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: url(../../assets/Icons.png) no-repeat -40px 0;
        background-size: cover;
        position: absolute;
        right: 20px;
        top: 150px;
      }

      .Info__ba {
        margin-bottom: 20px;

        span {
          display: block;

          &:nth-child(1) {
            font-weight: bold;
            font-size: 24px;
          }

          &:nth-child(2) {
            font-size: 16px;
            opacity: 0.7;
            font-weight: 500;
          }
        }
      }
    }

    .article {
      font-weight: bold;
      font-size: 15px;

      p {
        margin: 5px 0;
      }

      p:nth-child(2) {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: justify;
      }
    }
  }

  .myBtn {
    height: 36px;
    width: 240px;
    background: #EF6B4A;
    color: #ffffff;
    line-height: 36px;
    display: flex;
    justify-content: space-between;
    float: right;
    cursor: pointer;

    span {
      margin: 0 10px;
      font-size: 14px;
    }
  }
}
</style>