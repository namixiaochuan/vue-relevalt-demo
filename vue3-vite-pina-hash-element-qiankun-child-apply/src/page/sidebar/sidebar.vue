<template>
<!--  <div class="sidebar-body">-->
    <el-menu
        :default-active="baseData.activeIndex"
        class="sidebar-body"
        mode="horizontal"
        background-color="#3569e7"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
      <template v-for="(item,index) in baseData.menu" :key="index">
        <el-menu-item v-if="!item.children" :index="item.name">{{ item.label }}</el-menu-item>
        <el-sub-menu  v-else-if="!!item.children&&item.children.length" :index="item.name">
          <template #title>{{ item.label }}</template>
          <template v-for="(item2,index2) in item.children" :key="index2">
            <el-menu-item v-if="!item2.children" :index="item2.name">{{ item2.label }}</el-menu-item>
            <el-sub-menu v-else-if="!!item2.children&&item2.children.length" :index="item2.name">
              <template #title>{{ item2.label }}</template>
              <template v-for="(item3,index3) in item2.children" :key="index3">
                <el-menu-item :index="item3.name">{{ item3.label }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
<!--  </div>-->
</template>

<script lang="ts">
// import { useStore } from '/@/store'; // 获取缓存
import store from '@/store'
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
  components: {},
  setup() {
    console.log(store.userStore.menu, '=======store.userStore.menu=======')
    let baseData = reactive({
      // 变量可以放这
      showDraw: false, // 是否显示抽屉目录
      activeIndex: -1, // 被选中的项
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
    // 选择菜单
    const handleSelect = (item: any, code:boolean = false, index: Number) => {
      // baseData.drawSodenarData = item
      // baseData.showDraw = false
      // baseData.index = index
      // if (baseData.drawSodenarData.children.length > 0) {
      //   for (let i = 0; i < baseData.drawSodenarData.children.length; i++) {
      //     if (baseData.drawSodenarData.children[i].children && baseData.drawSodenarData.children[i].children.length) {
      //       baseData.showDraw = true
      //     }
      //   }
      // }
      // if (!baseData.showDraw && code) {
      //   store.commit('user/SET_TOP_MENU', baseData.drawSodenarData.children)
      // }
    }
    return {baseData, handleSelect};
  },
});
</script>
<style lang="scss" scoped>
// 样式基础
@import '../../style/common/base-setting.scss';

.sidebar-body {
  width: 100%;
  height: 40px;
  //background-color: $bcBlue;
}
</style>
