<template>
  <div class="error000">
    <div class="error000-body-con">
      <el-card class="box-card">
        <div class="error000-body-con-title">5
          <span>0</span>0
        </div>
        <p class="error000-body-con-message">Oops! the server is wrong</p>
        <div class="error000-btn-con">
          <el-button @click="goHome" size="large" type="text">返回首页</el-button>
          <el-button @click="backPage" size="large" type="primary">返回上一页
          </el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import router from "../../router";
import {
  // watch,
  // computed,
  defineComponent, // 它并没有实现任何的逻辑，只是把接收的 Object 直接返回，它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的。
  reactive, // 实现响应式数据的方法
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

export default defineComponent({
  name: "000",
  // props:{},
  // components: {},
  setup() {
    let data = reactive({
      // 变量可以放这
    })
    // 【单步】模板编译/挂载之前
    // onBeforeMount(() => {})
    // 【单步】模板编译/挂载之时
    onMounted(() => {
      console.log(router)
    })
    // 【循环】更新时状态 前
    // onBeforeUpdate(() => {})
    // 【循环】更新时状态 时
    // onUpdated(() => {})
    // 【单步】在卸载前打开
    // onBeforeUnmount(() => {})
    // 【单步】在卸载时打开
    // onUnmounted(() => {})
    // 【单步】for keep-alive 组件被激活时调用
    // onActivated(() => {})
    // 【单步】 停步前执行
    // onDeactivated(() => {})
    // 错误捕获
    // onErrorCaptured(() => {})
    // 返回首页
    let goHome = () => {
      router.push({
        path: "/"
      });
    }
    // 返回上一页
    let backPage = () => {
      router.go(-1);
    }
    return {goHome, backPage};
  },
});
</script>
<style lang="scss" scoped>
</style>
