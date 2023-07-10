<template>
  <div class="header">
    <div class="left__logo">
      <n-image :src="require('@/assets/Logo.png')"/>
    </div>
    <div class="center__input">
      <n-auto-complete
          v-model:value="value"
          :input-props="{autocomplete: 'disabled'}"
          :options="options"
          placeholder="输入书籍简介/作者/书名"
          size="small"
          ref="search"
          @keyup.enter="submit"
      />
    </div>
    <div class="right__menu">
      <div class="menu">
        <div class="munu__item"></div>
        <div class="munu__item"></div>
        <div class="munu__item"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {NImage, NAutoComplete} from 'naive-ui';
import {computed, onMounted, ref, watch} from "vue";
import {http} from '@/util/fetchIntercept'
import {useRoute, useRouter} from "vue-router";

const props = defineProps({
  value: {
    type: String,
    default: ""
  }
})
const value = ref("")
value.value = props.value
const options = computed(() => {
  return [value.value + ""]
})
const emit = defineEmits(['submit'])
const router = useRouter()
const route = useRoute()
const submit = () => {
  if (route.path == '/search') {
    http(`http://localhost:3000/book/search?searchWord=${value.value}`, {method: 'get'}).then(res => {
      if (res.code == 200) {
        emit('submit', res.data.result)
      }
    })
  } else {
    router.push({
      path: '/search',
      query: {
        value: value.value
      }
    })
  }
}
defineExpose({
  submit  //暴露方法让父组件调用
})
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 10px 1px #F4F4FF;

  .left__logo {
    width: 150px;
    height: 72px;

    .n-image {
      transform: scale(0.5);
    }
  }

  .right__menu {
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .menu {
      width: 108px;
      height: 30px;
      display: flex;
      justify-content: space-between;

      .munu__item {
        height: 30px;
        width: 30px;
        @for $i from 1 through 3 {
          &:nth-child(#{$i}) {
            background: url(../assets/Icons.png) no-repeat (1-$i)*40px 0;
            background-size: cover;
          }
        }
      }
    }
  }

  .center__input {
    flex: 1;
    height: inherit;
    margin-right: 100px;

    :deep() .n-input {
      margin-top: 36px;
      transform: translateY(-50%);
      background-color: #F4F4FF;
    }
  }
}
</style>