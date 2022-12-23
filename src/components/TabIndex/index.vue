<template>
  <div
    class="tab-index-box"
    :style="{
      height: height,
      lineHeight: height,
    }"
  >
    <div class="item-box" :class="{'sel': currentIndex === index}" v-for="(item, index) in tabList" :key="index" @click="tabClick(item,index)">
      {{ item.label }}
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  props: {
    height: {
      type: String,
      default: "30px",
    },
    tabList: {
      type: Array,
      default: [],
    },
  },
  computed: {},
  data() {
    return {
      currentIndex:0
    };
  },
  mounted() {},
  methods: {
    tabClick(item,index){
      this.currentIndex = index;
      this.$emit("tabChange",item)
    }
  },
};
</script>

<style lang="scss" scoped>
.tab-index-box {
  display: flex;
  border: 1px solid #fff;
  border-radius: 3px;
  .item-box {
    padding: 0 20px;
    font-size: 14px;
    cursor: pointer;
    &.sel,&:hover {
      background: rgba($color: #fff, $alpha: .2);
    }
  }
}
</style>
