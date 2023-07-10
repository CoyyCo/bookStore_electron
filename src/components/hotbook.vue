<template>
  <div class="hotbook">
    <div class="header">
      <span>{{ title }}</span>
      <span @click="viewallClick">View All</span>
    </div>
    <div class="box__list">
      <template v-for="(item,index) in boxarray" :key="index">
        <div class="list__item">
          <img :src="item.imgUrl"/>
          <div class="item__info">
            <span>{{ item.bookname }}</span>
            <span>{{ item.auther }}</span>
            <span>{{ item.price == 0 ? 'Free' : item.price + " $" }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {defineProps, defineEmits} from 'vue'
import {useRouter} from "vue-router";

const props = defineProps({
  title: {
    type: String
  },
  viewall: {
    type: String,
  },
  boxarray: {
    type: Array,
    default: []
  }
})
const router = useRouter()
const viewallClick = ()=>{
  router.push({
    path:'/category',
    query:{
      c:props.viewall,
      t:props.title
    }
  })
}
</script>
<style lang="scss" scoped>
.hotbook {
  margin: 10px 30px;
  margin-right: 20px;
  color: #090937;
  margin-bottom: 50px;
  .header {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {

      &:nth-child(1) {
        font-size: 19px;
        font-weight: bold;

      }

      &:nth-child(2) {
        color: #EF6B4A;
        font-weight: bold;
        font-size: 12px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }

  .box__list {
    display: flex;
    justify-content: space-between;

    .list__item {
      background: #F4F4FF;
      //transform: scale(1.1);
      width: 225px;
      height: 120px;
      display: flex;
      border-radius: 5px;

      img {
        height: 108px;
        width: 72px;
        margin: 6px;
        float: left;
      }

      .item__info {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-left: 2px;

        span:nth-child(1) {
          font-size: 14px;
          font-weight: 700;
        }

        span:nth-child(2) {
          font-size: 10px;
          opacity: 0.6;
        }

        span:nth-child(3) {
          position: relative;
          bottom: -30px;
          color: #6251DD;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
  }
}

</style>