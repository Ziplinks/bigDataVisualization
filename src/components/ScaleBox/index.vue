<template>
  <div
    class="scale-box"
    :style="{
      width: width,
      height: height,
      transform: `scale(${scale}) translate(-50%, -50%)`,
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "index",
  props: {
    width: {
      type: String,
      default: "1920px",
    },
    height: {
      type: String,
      default: "1080px",
    },
  },
  computed: {},
  data() {
    return {
      scale: 1,
    };
  },
  mounted() {
    window.onresize = () => {
      this.setScale();
    };
  },
  methods: {
    setScale() {
      let designWidth = 1920; //设计稿的宽度，根据实际项目调整
      let designHeight = 1080; //设计稿的高度，根据实际项目调整

      // 缩放比
      this.scale =
        document.documentElement.clientWidth /
          document.documentElement.clientHeight <
        designWidth / designHeight
          ? document.documentElement.clientWidth / designWidth
          : document.documentElement.clientHeight / designHeight;

      // 获取所有类名为  trans-common 的元素，设置 transform 属性
      // let selectorAll = document.querySelectorAll(".trans-common");
      // for (let i = 0; i < selectorAll.length; i++) {
      //   selectorAll[i].style = "transform: scale(" + this.scale + "); ";
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.scale-box {
  // width: v-bind("props.width");
  // height: v-bind("props.height");
  // transform: scale(v-bind(scale)) translate(-50%, -50%);
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}
</style>
