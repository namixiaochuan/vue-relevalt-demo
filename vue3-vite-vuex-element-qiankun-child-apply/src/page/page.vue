<template>
  <div class="page-body">
    <!--    顶部样式-->
    <top/>
    <!--    侧面菜单-->
    <sidebar :viewWidth="baseData.viewWidth" :viewHeight="baseData.viewHeight"/>
    <!--    主题内容-->
    <am-body :viewWidth="baseData.viewWidth" :viewHeight="baseData.viewHeight"/>
  </div>
</template>

<script lang="ts">
// import { useStore } from '/@/store'; // 获取缓存
import Top from './top/top.vue' // 顶部栏
import Sidebar from './sidebar/sidebar.vue' // 侧边目录
import AmBody from './amBody/amBody.vue'
import {
  defineComponent, // 它并没有实现任何的逻辑，只是把接收的 Object 直接返回，它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的。
  reactive, // 实现响应式数据的方法
  // onBeforeMount, // 【单步】模板编译/挂载之前
  onMounted, // 【单步】模板编译/挂载之时
  // watch,
  // onBeforeUpdate,  // 【循环】更新时状态 前
  // onUpdated,  // 【循环】更新时状态 时
  // onBeforeUnmount, // 【单步】在卸载前打开
  // onUnmounted, // 【单步】在卸载时打开
  // onActivated, // 【单步】for keep-alive 组件被激活时调用
  // onDeactivated, // 【单步】 停步前执行
  // onErrorCaptured // 错误捕获
} from 'vue'

export default defineComponent({
  name: "page",
  // props:{},
  components: {Top, Sidebar, AmBody},
  setup() {
    let baseData = reactive({
      // 变量可以放这
      viewWidth: document.documentElement.clientWidth || document.body.clientWidth,
      viewHeight: document.documentElement.clientHeight || document.body.clientHeight,
  })
    // const st = useStore();
    // console.log(st); // 正常
    // 【单步】模板编译/挂载之前
    // onBeforeMount(() => {})
    // 【单步】模板编译/挂载之时
    onMounted(() => {
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
    return {baseData};
  },
});
</script>
<style lang="scss" scoped>
.page-body {
  height: 100%;
}
</style>
