<template>
  <div class="top-sidebar-body">
    <a v-for="(item, index) in baseData.topMenu" :key="index">{{item.label}}</a>
  </div>
</template>

<script lang="ts">
// import { useStore } from '/@/store'; // 获取缓存
import store from '@/store'
import {
  defineComponent, // 它并没有实现任何的逻辑，只是把接收的 Object 直接返回，它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的。
  reactive, // 实现响应式数据的方法
  computed, // 动态计算属性
  // onBeforeMount, // 【单步】模板编译/挂载之前
  onMounted, // 【单步】模板编译/挂载之时
  watch, // 监听参数变化
  // onBeforeUpdate,  // 【循环】更新时状态 前
  // onUpdated,  // 【循环】更新时状态 时
  // onBeforeUnmount, // 【单步】在卸载前打开
  // onUnmounted, // 【单步】在卸载时打开
  // onActivated, // 【单步】for keep-alive 组件被激活时调用
  // onDeactivated, // 【单步】 停步前执行
  // onErrorCaptured // 错误捕获
} from 'vue'

export default defineComponent({
  name: "topSideBar",
  // props:{},
  // components: {},
  setup() {
    let baseData = reactive({
      // 变量可以放这
      subMenuList: [{label: '第一页', value: 'pageOne'}],
      topMenu: computed(() => store.getters.top_menu)
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

    // watch监听ref声明属性的变化
    watch(baseData.topMenu, (newVal, oldVal)=> {
      console.log('watch监听inputVal的变化 newVal ------>', newVal);
      console.log('watch监听inputVal的变化 oldVal ------>', oldVal);
    });
    return {baseData};
  },
});
</script>
<style lang="scss" scoped>
// 样式基础
@import '../../style/common/base-setting.scss';
.top-sidebar-body {
  height: 30px;
  width: 100%;
  background-color: $bcWhite;
  a {
    padding: 0px 10px;
    font-size: $miniSize;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    color: $bcBlack;
  }
}
</style>
