<template>
  <div class="top-right-body">
    <el-dropdown @command="handleClick">
    <span class="el-dropdown-link">
      {{baseData.userInfo.realname}}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">登出</el-dropdown-item>
<!--        <el-dropdown-item>Action 2</el-dropdown-item>-->
<!--        <el-dropdown-item>Action 3</el-dropdown-item>-->
<!--        <el-dropdown-item disabled>Action 4</el-dropdown-item>-->
<!--        <el-dropdown-item divided>Action 5</el-dropdown-item>-->
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
</template>

<script lang="ts">
// import { useStore } from '/@/store'; // 获取缓存
import {getCurrentInstance} from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import store from '@/store'
import { useRouter } from 'vue-router'

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
  name: "right",
  // props:{},
  components: {ArrowDown},
  setup() {
    const {proxy} = getCurrentInstance();
    const router = useRouter()
    let baseData = reactive({
      // 变量可以放这
      userInfo: store.getters.userInfo
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
    /**
     * 点击下拉展示
     * @param data
     */
    const handleClick = (command: string | number | object) => {
      console.log(command)
      switch (command) {
        case 'logout':
          console.log(proxy)
          proxy.$logout()
          break
      }
    }
    return {baseData, handleClick};
  },
});
</script>
<style lang="scss" scoped>
.top-right-body {
  text-align: right;
}
</style>
