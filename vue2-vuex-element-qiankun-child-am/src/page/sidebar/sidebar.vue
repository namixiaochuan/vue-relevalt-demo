<!--主体-->
<template>
  <el-menu
      :default-active="baseData.activeIndex"
      class="sidebar-body"
      mode="horizontal"
      background-color="#3569e7"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <div v-for="(item,index) in baseData.menu" :key="index">
      <el-menu-item v-if="!item.children" :index="item.name">{{ item.label }}</el-menu-item>
      <el-sub-menu  v-else-if="!!item.children&&item.children.length" :index="item.name">
        <template #title>{{ item.label }}</template>
        <div v-for="(item2,index2) in item.children" :key="index2">
          <el-menu-item v-if="!item2.children" :index="item2.name">{{ item2.label }}</el-menu-item>
          <el-sub-menu v-else-if="!!item2.children&&item2.children.length" :index="item2.name">
            <template #title>{{ item2.label }}</template>
            <div v-for="(item3,index3) in item2.children" :key="index3">
              <el-menu-item :index="item3.name">{{ item3.label }}</el-menu-item>
            </div>
          </el-sub-menu>
        </div>
      </el-sub-menu>
    </div>
  </el-menu>
</template>


<!--逻辑代码-->
<script>
// 引入包
export default {
  name: 'sidebar',
  // 父组件通过 props 向下传递数据给子组件；子组件通过 events 给父组件发送消息。
  props: {},
  // 調用组件
  components: {},
  // 定义参数
  data() {
    return {
      baseData: {
        // 变量可以放这
        showDraw: false, // 是否显示抽屉目录
        activeIndex: '-1', // 被选中的项
        showDrawSidebar: false,
        menu: this.$store.getters.menu || [],
        drawSodenarData: {}
      }
    }
  },
  // 方法
  methods: {
    handleSelect(item, code, index){
      console.log(item, code, index)
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
    },
    /**
     *  初始方法
     */
    init() {
      console.log(this.$store.getters.menu)
    }
  },
  // 过滤器
  filter: {},
  // 监听器：监听自己的参数变化，该参数不写在data中，而是要下载computed 中
  computed: {},
  // 监听器
  watch: {},
  // 1、【单步】组件实例被创建，组件属性计算之前，如data
  beforeCreate() {},
  // 2、【单步】组件实例已创建，属性已经绑定，但是DOM未生成（比如$el未生成）
  created() {},
  // 3、【单步】模板编译/挂载之前，compile("虚拟",$el)
  beforeMount() {},
  // 4、【单步】模板编译/挂载之后：虚拟替换真实
  mounted() {
    // 初始方法
    this.init()
  },
  // 5、【循环】更新前状态
  beforeUpdate() {},
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
