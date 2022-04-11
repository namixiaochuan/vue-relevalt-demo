<template>
  <el-card :shadow="data.baseDataShow.shadow">
    <template v-if="data.baseDataShow.title" #header>
      <slot name="header"></slot>
    </template>
    <el-row :gutter="data.baseDataShow.gutter">
      <el-col :span="data.baseDataShow.span">
        <slot></slot>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import {
  defineComponent, // 它并没有实现任何的逻辑，只是把接收的 Object 直接返回，它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的。
  reactive, // 实现响应式数据的方法
  watch,
  onMounted, // 【单步】模板编译/挂载之时
} from 'vue'

export default defineComponent({
  name: "reactive",
  props: {
    baseData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  // components: {},
  setup(props) {
    let data = reactive({
      // 变量可以放这
      baseDataShow: {
        title: '',
        shadow: "never",
        span: '24',
        gutter: 0,
      },
    })
    onMounted(() => {
    })
    watch(props, ({baseData}) => {
      Object.assign(data.baseDataShow, baseData)
      console.log(data.baseDataShow, baseData)
    }, {immediate: true, deep: true})
    return {data};
  },
});
</script>
<style lang="scss">
</style>
