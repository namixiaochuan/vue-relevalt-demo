<template>
  <div class="sidebar-body" :style="{height:(viewHeight - 50) + 'px'}" @mouseleave="showThis(false)">
    <div @mouseenter="showThis(true)">
      <div class="menu-button" v-for="(item, index) in baseData.menu" :key="index" :class="{'chooise-this': baseData.index == index}" @mouseenter="operationThis(item, false, index)"  @click="operationThis(item, true, index)">
        <span><el-icon> <component :is="item.icon"></component></el-icon></span>
        <span>{{ item.label }}</span>
      </div>
    </div>
    <draw-sidebar v-if="baseData.showDrawSidebar && baseData.showDraw" :viewHeight="viewHeight" :drawSodenarData="baseData.drawSodenarData"/>
  </div>
</template>

<script lang="ts">
// import { useStore } from '/@/store'; // 获取缓存
import store from '@/store'
import drawSidebar from "@/page/sidebar/drawSidebar.vue";
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
  name: "sidebar",
  props: {
    viewWidth: {
      type: [Number, String],
      default: ''
    },
    viewHeight: {
      type: [Number, String],
      default: ''
    },
  },
  components: {drawSidebar},
  setup() {
    console.log(store.userStore.menu, '=======store.getters.menu=======')
    let baseData = reactive({
      // 变量可以放这
      showDraw: false, // 是否显示抽屉目录
      index: -1, // 被选中的项
      showDrawSidebar: false,
      menu: store.userStore.menu,
      drawSodenarData: {}
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
    const showThis = (code: boolean) => {
      baseData.showDrawSidebar = code
    }
    const operationThis = (item: any, code:boolean = false, index: Number) => {
      baseData.drawSodenarData = item
      baseData.showDraw = false
      baseData.index = index
      if (baseData.drawSodenarData.children.length > 0) {
        for (let i = 0; i < baseData.drawSodenarData.children.length; i++) {
          if (baseData.drawSodenarData.children[i].children && baseData.drawSodenarData.children[i].children.length) {
            baseData.showDraw = true
          }
        }
      }
      if (!baseData.showDraw && code) {
        store.userStore.setTopMenu(baseData.drawSodenarData.children)
        // store.commit('user/SET_TOP_MENU', baseData.drawSodenarData.children)
      }
    }
    return {baseData, showThis, operationThis};
  },
});
</script>
<style lang="scss" scoped>
// 样式基础
@import '../../style/common/base-setting.scss';

.sidebar-body {
  display: inline-block;
  width: 66px;
  background-color: $bcBlue;
  vertical-align: top;

  .menu-button {
    //height: 40px;
    //line-height: 40px;
    padding: 6px 0px;
    text-align: center;
    color: $bcWhite;
    cursor: pointer;

    &.chooise-this {
      background-color: $dimBlue;
    }

    span {
      display: inline-block;
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: $normalSize;

      .el-icon {
        font-size: $bigIconSize;
      }
    }
  }
}
</style>
