<!--主体-->
<template>
  <div class="top-right-body">
    <el-dropdown @command="handleClick">
  <span class="el-dropdown-link">
    {{ baseData.userInfo }}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>


<!--逻辑代码-->
<script>
// 引入包
export default {
  name: 'right',
  // 父组件通过 props 向下传递数据给子组件；子组件通过 events 给父组件发送消息。
  props: {},
  // 調用组件
  components: {},
  // 定义参数
  data() {
    return {
      baseData: {
        userInfo: ''
        // userInfo: this.$store.getters.userInfo
      }
    }
  },
  // 方法
  methods: {
    handleClick(command) {
      console.log(command)
      switch (command) {
        case 'logout':
          this.$logout()
          break
      }
    },
    /**
     *  初始方法
     */
    init() {
    }
  },
  // 过滤器
  filter: {},
  // 监听器：监听自己的参数变化，该参数不写在data中，而是要下载computed 中
  computed: {},
  // 监听器
  watch: {},
  // 1、【单步】组件实例被创建，组件属性计算之前，如data
  beforeCreate() {
  },
  // 2、【单步】组件实例已创建，属性已经绑定，但是DOM未生成（比如$el未生成）
  created() {
  },
  // 3、【单步】模板编译/挂载之前，compile("虚拟",$el)
  beforeMount() {
  },
  // 4、【单步】模板编译/挂载之后：虚拟替换真实
  mounted() {
    // 初始方法
    this.init()
  },
  // 5、【循环】更新前状态
  beforeUpdate() {
  },
  // 6、【循环】更新时状态
  updated() {
  },
  // 7、【单步】for keep-alive 组件被激活时调用
  activated() {
  },
  // 8、【单步】for keep-alive 组件被移出时调用
  deactivated() {
  },
  // 9、【单步】销毁前调用
  beforeDestroy() {
  },
  // 10、【单步】销毁时调用
  destroyed() {
  }
}
</script>

<style lang="scss" scoped>
// 样式基础
@import '../../../style/common/base-setting.scss';
.top-right-body {
  text-align: right;
  .el-dropdown {
    height: 80px;
    line-height: 80px;
    min-width: 80px;
    color: $bcBlack;
  }
}
</style>
