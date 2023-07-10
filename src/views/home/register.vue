<template>
  <div class="userLoginOrRegister">
    <n-form ref="formRef1" :model="model" :rules="rules">
      <n-form-item path="username" label="username">
        <n-input v-model:value="model.username" @keydown.enter.prevent size="small"
                 placeholder="please input username"/>
      </n-form-item>
      <n-form-item path="email" label="email">
        <n-input v-model:value="model.email" @keydown.enter.prevent size="small" placeholder="please input email"/>
      </n-form-item>
      <n-form-item path="password" label="password">
        <n-input v-model:value="model.password" type="password" @keydown.enter.prevent size="small"
                 placeholder="please input password"/>
      </n-form-item>
    </n-form>
    <div class="btn">
      <button class="login" @click="register">Register</button>
      <button class="register" @click="goLogin">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import {NForm, NFormItem, NInput} from 'naive-ui'
import {useRouter} from 'vue-router';
import {FormRules, FormItemRule} from 'naive-ui'
import {http} from '@/util/fetchIntercept';

const model = reactive({
  username: "",
  email: "",
  password: ""
})
const rules: FormRules = {
  username: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) return new Error('username is not null')
        return true;
      },
      trigger: ['input']
    }
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) return new Error('password is not null')
        else if (!/^[A-Za-z0-9]{7,17}/.test(value)) return new Error('password show only contain number and word,and length between 8-18')
        return true;
      },
      trigger: ['input']
    }
  ],
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/.test(value))
          return new Error('email is incorrect')
        return true
      },
      trigger: ['input']
    }
  ]
}
const router = useRouter()
const goLogin = () => {
  router.push({
    path: "login"
  })
}
const register = () => {
  http('http://localhost:3000/users/', {
    method: "get"
  }).then(res=>{
    console.log(res)
  })
  // http("http://localhost:3000/register", {
  //   method: "post",
  //   body: JSON.stringify({
  //     username: model.username,
  //     password: model.password,
  //     email: model.email
  //   })
  // }).then(res=>{
  //   console.log(res)
  // })
}
</script>

<style scoped lang="scss">
.userLoginOrRegister {
  margin: 0 125px;
  margin-top: 40px;

  .n-form-item {
    :deep() .n-form-item-feedback-wrapper {
      --n-feedback-height: 15px;
    }

    :deep() .n-input__placeholder {
      text-align: left;
    }

    :deep() .n-form-item-feedback {
      text-align: left;
    }

    .n-input {
      text-align: left;
      background-color: #F4F4FF;
      --n-border: none !important;
    }
  }

  .btn {
    margin-top: 10px;

    // width: 100%;
    button {
      width: 100%;
      margin: 2px 0;
      height: 35px;
      border-radius: 3px;

      &:hover {
        cursor: pointer;
      }
    }

    .login {
      background-color: #EF6B4A;
      border: 0px;
      color: #fff;

    }

    .register {
      background: none;
      border: 1px solid #6251DD;
      color: #6251DD;
    }
  }

}
</style>