<template>
  <div class="home-body">
    <div class="control-panel">
      <template v-for="(item, index) in baseData.systemList">
        <el-button v-if="item.path" type="primary" @click="jumpToChildSystem(item)" :key="index">{{ item.name }}
        </el-button>
      </template>
      <el-button type="danger" @click="logOut">登出</el-button>
    </div>
  </div>
</template>

<script lang="ts">
// import { useStore } from '@/store'; // 获取缓存
import store from '@/store'
import {getCurrentInstance} from 'vue'
import {systemList} from '@/assets/base/systemList.ts'
import {ElMessage, ElMessageBox} from 'element-plus'
import {useRouter} from 'vue-router'
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
  name: "Home",
  // props:{},
  // components: {},
  setup() {
    const router = useRouter()
    const {proxy} = getCurrentInstance();
    // 基础数据
    let baseData = reactive({
      // 变量可以放这
      systemList: systemList()
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
    const logOut = () => {
      proxy.$logout()
      // ElMessageBox.confirm(
      //     '确定要登出么?',
      //     '提示',
      //     {
      //       confirmButtonText: '确定',
      //       cancelButtonText: '取消',
      //       type: 'warning',
      //     }
      // )
      //     .then(() => {
      //       store.dispatch('user/LogOut')
      //           .then((res:any)=>{
      //         router.push({path: '/login'})
      //             ElMessage({
      //               type: 'success',
      //               message: '登出成功',
      //             })
      //       }).catch((err:any)=>{
      //         console.log(err)
      //       })
      //     })
      //     .catch(() => {
      //       // ElMessage({
      //       //   type: 'info',
      //       //   message: 'Delete canceled',
      //       // })
      //     })
    }
    /**
     * 跳转到的子系统地址
     */
    const jumpToChildSystem = (data: any) => {
      console.log(data)
      router.push({path: data.path + '/home'})
    }
    return {baseData, logOut, jumpToChildSystem};
  },
});
</script>
<style lang="scss" scoped>
// 样式基础
@import '../../style/common/base-setting.scss';

.home-body {
  background-color: $lightGrey;
  width: 100%;
  height: 100%;
  //background-color: #4389b9;
  display: flex;
  justify-content: center;
  align-items: center;

  .control-panel {
    width: 560px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    background-color: $bcWhite;
    padding: 20px;

    .el-button {
      margin-left: 20px;
      min-width: 260px;
      //display: block;
      margin-top: 20px;
    }
  }
}
</style>
