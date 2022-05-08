<template>
  <div class="draw-sidebar-body" :style="{height:(viewHeight - 50) + 'px'}">
    <div class="draw-sidebar-title">{{ drawSodenarData.label }}</div>
    <div>
      <div class="draw-menu-button" v-for="(item, index) in drawSodenarData.children" :key="index" :class="{'chooise-this': baseData.index == index}"  @mouseenter="operationThis(item, false, index)">
        <span><el-icon> <component :is="item.icon"></component></el-icon></span>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { useStore } from '/@/store'; // 获取缓存
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
import store from "@/store";

export default defineComponent({
  name: "drawSidebar",
  props: {
    viewHeight: {
      type: [Number, String],
      default: ''
    },
    drawSodenarData: {
      type: [Object, Array],
      default: {}
    },
  },
  // components: {},
  setup() {
    let baseData = reactive({
      // 变量可以放这
      index: -1
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
    const operationThis = (item: any, code:boolean = false, index: Number) => {
      baseData.index = index
      store.userStore.setTopMenu(item.children)
    }
    return {baseData, operationThis};
  },
});
</script>
<style lang="scss" scoped>
// 样式基础
@import '../../style/common/base-setting.scss';

.draw-sidebar-body {
  position: fixed;
  left: 66px;
  top: 50px;
  width: 200px;
  background: $bcWhite;
  padding: 10px;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 12%);

  .draw-sidebar-title {
    font-size: $titleSize;
    color: $bcBlue;
    font-weight: 700;
    padding-bottom: 10px;
  }
  .draw-menu-button {
    padding: 6px;
    text-align: center;
    color: $bcBlack;
    cursor: pointer;
    display: inline-block;
    width: 54px;

    span {
      display: inline-block;
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: $normalSize;
      white-space: nowrap;

      .el-icon {
        color: $bcBlack;
        font-size: $bigIconSize;
      }
    }

    &.chooise-this {
      //background-color: $lineBlue;
      span {
        //color: $bcWhite;
        font-weight: bolder;
        .el-icon {
          font-weight: bolder;
          //color: $bcWhite;
        }
      }
    }
  }
}
</style>
