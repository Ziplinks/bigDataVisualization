<template>
  <!-- 模块通用弹框组件 -->
  <el-dialog
    v-dialogDrag
    :modal="modal"
    :title="title"
    :top="top"
    :width="size"
    :center="center"
    :visible.sync="dialogVisible"
    :append-to-body="true"
    :close-on-click-modal="closeModal"
    :show-close="showClose"
    @close="cancel"
  >
    <!-- 中间内容 -->
    <slot name="content" />
    <!-- 底部内容 -->
    <div class="dialog-footer-box">
      <slot name="footer" />
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'ModuleTitle',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    closeModal: {
      // 点击遮罩是否关闭弹框
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    size: {
      type: String,
      default: '390px'
    },
    modal: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    }

  },
  data() {
    return {
      dialogVisible: false
    }
  },
  watch: {
    show(val) {
      this.dialogVisible = val
    }
  },
  methods: {
    // 关闭弹框
    cancel() {
      this.dialogVisible = false
      this.$emit('cancel')
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-footer-box {
  margin-top: 15px;
  text-align: center;
}
</style>

<style lang="scss">
.el-dialog__body{
  padding: 20px 20px;
  background-color: #27296d;
}
.el-dialog__header {
  background-color: #27296d;
  // border-bottom: solid 1px #404857;
  padding: 10px 20px !important;
  // border-radius: 6px;
  .el-dialog__title {
    color: #fff;
    font-size: 16px;
  }
  .el-dialog__headerbtn {
    .el-dialog__close {
      color: #BBC1CA;
      font-size: 22px;
      margin-top: -18px;
    }
    .el-dialog__close:hover {
      opacity: 0.7;
    }
  }
}
.dialog-footer-box {
  text-align: center;
}
</style>
