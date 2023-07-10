<template>
  <headerComponent></headerComponent>
  <div class="carousel">
    <n-carousel>
      <template v-for="$img in imgUrls" :key="$img">
        <img
            class="carousel-img"
            :src="$img"
        />
      </template>
    </n-carousel>
  </div>
  <hotbook :title="MostLikeTitle" :viewall="MostLikeViewAll" :boxarray="MostLikeBoxArray"></hotbook>
  <hotbook :title="ChassisTitle" :viewall="ChassisViewAll" :boxarray="ChassisBoxArray"></hotbook>
</template>
<script setup lang="ts">
import headerComponent from '@/components/headerComponent.vue'
import hotbook from '@/components/hotbook.vue'
import {NCarousel} from 'naive-ui'
import {ref} from "vue";
import {http} from '@/util/fetchIntercept'
const imgUrls = ref([
  require('@/assets/BannerArea.png'),
  "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
])
const MostLikeTitle = ref("Best Seller")
const MostLikeViewAll = "mostlike"
const MostLikeBoxArray = ref([])
const ChassisTitle = ref("Chassis")
const ChassisViewAll = "chassis"
const ChassisBoxArray = ref([])
http(`http://localhost:3000/book/getbook?type=hot&start=0&len=4`,{
  method:'get'
}).then(res=>{
  MostLikeBoxArray.value = res.data.result;
})
http(`http://localhost:3000/book/getbook?type=chassis&hot=1&start=0&len=2`,{
  method:'get'
}).then(res=>{
  ChassisBoxArray.value = res.data.result;
})
</script>

<style lang="scss" scoped>
.carousel {
  margin: 10px 30px;
  border-radius: 5px;
  overflow: hidden;
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
}

</style>