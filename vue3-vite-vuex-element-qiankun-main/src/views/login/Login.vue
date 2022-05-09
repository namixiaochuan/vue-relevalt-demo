<template>
  <div class="login-body">
    <basic-container class="login-form" :baseData="baseData">
      <el-form class="login-form-body" :model="loginForm" ref="ruleFormRef" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input :type="baseData.passwdType" v-model="loginForm.password" placeholder="请输入密码">
            <template #suffix>
              <el-icon class="el-input__icon password-icon" @click="changePassword">
                <View v-if="baseData.passwdType == 'password'"/>
                <Hide v-else/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="操作系统" prop="password">
          <el-radio-group v-model="loginForm.system">
            <el-radio v-for="(item, index) in baseData.systemList" :label="item.path" :key="index">{{ item.name }}</el-radio>
<!--            <el-radio :label="'/apply'">申报端</el-radio>-->
<!--            <el-radio :label="'/am'">管理端</el-radio>-->
            <!--          <el-radio :label="6">Option B</el-radio>-->
            <!--          <el-radio :label="9">Option C</el-radio>-->
          </el-radio-group>
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
import {systemList} from '@/assets/base/systemList.ts'
import {useRouter} from 'vue-router'
import {Hide, View} from '@element-plus/icons-vue'
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
  components: {Hide, View},
  setup() {
    console.log('store.getters.login_syetem=========',store.getters.login_syetem)
    const router = useRouter()
    let passwdType = 'password'
    let baseData = reactive({
      title: '',
      passwdType: 'password',
      systemList:systemList()
    })
    let loginForm = reactive({
      username: 'admin',
      password: '1qaz!QAZ1qaz',
      system: store.getters.login_syetem || ''
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
    /**
     * 改变密码展示隐藏功能
     * @param formEl
     */
    const changePassword = () => {
      console.log('=====================')
      if (baseData.passwdType == 'password') {
        baseData.passwdType = 'text'
      } else {
        baseData.passwdType = 'password'
      }
    }
    /**
     * 登录调用方法
     * @param formEl
     */
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!')
          store.dispatch('user/LoginByUsername', loginForm)
              .then((res: any) => {
                store.commit("user/SET_LOGIN_SYSTEM", loginForm.system)
                store.dispatch('user/GetMenu').then(res=>{
                  router.push({path: loginForm.system})
                })
              }).catch((err: any) => {
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
      console.log(formEl)
      // if (!formEl) return
      loginForm.username = ''
      loginForm.password = ''

      // formEl.resetFields()
    }
    return {baseData, passwdType, changePassword, loginForm, rules, ruleFormRef, submitForm, resetForm};
  },
});
</script>
<style lang="scss" scoped>
.login-body {
  width: 100%;
  height: 100%;
  background-color: #4389b9;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 760px;
    .login-form-body {
      margin-left: 50px;
      .el-radio {
        min-width: 250px;
      }
    }
  }

  .el-input__icon.password-icon {
    cursor: pointer;
  }
}
</style>
