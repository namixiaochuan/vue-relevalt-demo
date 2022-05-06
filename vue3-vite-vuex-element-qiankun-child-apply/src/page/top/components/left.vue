<template>
  <div class="top-left-body">
    <img class="title-logo" src="../../../assets/img/logo.jpg"/>
    <h3 class="top-title">{{ baseData.website.title }}</h3>
  </div>
</template>

<script lang="ts">
// import { useStore } from '/@/store'; // 获取缓存
import {website} from '@/assets/base/website'
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
  name: "left",
  // props:{},
  // components: {},
  setup() {
    console.log(website)
    let baseData = reactive({
      // 变量可以放这
      website: website('')
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
// 样式基础
@import '../../../style/common/base-setting.scss';
.top-left-body {
  .title-logo {
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 20px;
    display: inline-block;
    vertical-align: top;
  }
  .top-title {
    font-size: $largestSize;
    color: $bcBlack;
    height: 80px;
    line-height: 80px;
    padding-left: 10px;
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 80px);
  }
}
</style>
