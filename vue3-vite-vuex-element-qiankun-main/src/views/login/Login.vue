<template>
  <div class="login-body">
    <basic-container class="login-form" :baseData="baseData">
      <el-form :model="loginForm" ref="ruleFormRef" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"/>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-button type="primary" @click="submitForm(ruleFormRef)">提交
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </basic-container>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { useRouter } from 'vue-router'
import axios from 'axios'
const instance = axios.create()
import {hitokoto} from '../../api/login'
// import {createStore, useStore, Store, createLogger} from "vuex"
import {
  defineComponent, // 它并没有实现任何的逻辑，只是把接收的 Object 直接返回，它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的。
  reactive, // 实现响应式数据的方法
  ref,
  // onBeforeMount, // 【单步】模板编译/挂载之前
  onMounted, // 【单步】模板编译/挂载之时
  // onBeforeUpdate,  // 【循环】更新时状态 前
  // onUpdated,  // 【循环】更新时状态 时
  // onBeforeUnmount, // 【单步】在卸载前打开
  // onUnmounted, // 【单步】在卸载时打开
  // onActivated, // 【单步】for keep-alive 组件被激活时调用
  // onDeactivated, // 【单步】 停步前执行
  // onErrorCaptured // 错误捕获
} from 'vue'

import type {FormInstance} from 'element-plus'
import {ElNotification} from 'element-plus'

export default defineComponent({
  name: "reactive",
  // props:{},
  // components: {},
  setup() {
    const router = useRouter()
    let baseData = reactive({
      title: ''
    })
    let loginForm = reactive({
      username: '',
      password: ''
    })
    let rules = reactive({
      username: [
        {required: true, message: '请输入用户名', trigger: 'blur'},
      ],
      password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
      ],
    })
    const ruleFormRef = ref<FormInstance>()
    // 【单步】模板编译/挂载之时
    onMounted(() => {
      console.log("=============234================"); // 正常
    })
    // 这是一个导出api
    // hitokoto()
    //     .then((res) => {
    //       console.log('请求成功数据', res.data)
    //     })
    //     .catch((err) => {
    //       console.log('请求失败数据', err)
    //     })
    const reqData = {
      name: '张三',
      age: 12,
      birthday: '2021/12/21'
    }
    instance.post('/api/post/delay', reqData)

    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!')
          store.dispatch('user/LoginByUsername', loginForm)
          .then((res:any)=>{
            router.push({path: '/home'})
          }).catch((err:any)=>{
            console.log(err)
          })
        } else {
          ElNotification({
            title: '提示',
            message: '有必填项没有填写',
            type: 'warning',
          })
          return false
        }
      })
    }

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.resetFields()
    }
    return {baseData, loginForm, rules, ruleFormRef, submitForm, resetForm};
  },
});
</script>
<style lang="scss">
.login-body {
  width: 100%;
  height: 100%;
  background-color: #4389b9;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 300px;
  }
}
</style>
