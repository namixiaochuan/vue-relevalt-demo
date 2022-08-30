<!--主体-->
<template>
  <div></div>
</template>


<!--逻辑代码-->
<script>
// 引入包
export default {
  name: 'page',
  // 父组件通过 props 向下传递数据给子组件；子组件通过 events 给父组件发送消息。
  props: {},
  // 調用组件
  components: {},
  // 定义参数
  data() {
    return {}
  },
  // 方法
  methods: {
    /**
     *  初始方法
     */
    init() {}
  },
  // 监听器：监听自己的参数变化，该参数不写在data中，而是要下载computed 中
  computed: {},
  // 监听器
  watch: {},
  // 1、【单步】组件实例被创建，组件属性计算之前，如data
  created() {},
  // 3、【单步】模板编译/挂载之前，compile("虚拟",$el)
  mounted() {
    // 初始方法
    this.init()
  },
  // 6、【循环】更新时状态
  updated() {},
  // 7、【单步】for keep-alive 组件被激活时调用
  activated() {},
  // 8、【单步】for keep-alive 组件被移出时调用
  deactivated() {},
  // 9、【单步】销毁前调用
  beforeDestroy() {},
  // 10、【单步】销毁时调用
  destroyed() {}
}
</script>

<!--样式-->
<style lang="scss">
</style>
