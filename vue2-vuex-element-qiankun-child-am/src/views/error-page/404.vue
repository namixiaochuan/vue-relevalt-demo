<template>
  <div class="error000">
    <div class="error000-body-con">
      <el-card class="box-card">
        <div class="error000-body-con-title">4
          <span>0</span>4
        </div>
        <p class="error000-body-con-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
        <div class="error000-btn-con">
          <el-button @click="goHome" size="large" type="text">返回首页</el-button>
          <el-button @click="backPage" size="large" type="primary">返回上一页
          </el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>


<!--逻辑代码-->
<script>
// 引入包
export default {
  name: '404',
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
    backPage() {
      this.$router.go(-1);
    },
    /**
     *  返回首页
     */
    goHome(){
      this.$router.push({
        path: "/amWel/index"
      });
    },
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
