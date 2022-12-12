<template>
  <div id="app">
    <ScaleBox>
      <router-view />
    </ScaleBox>
  </div>
</template>

<script>
import ScaleBox from "@/components/ScaleBox";
export default {
  name: 'App',
  components: { ScaleBox },
  mounted(){},
  methods: {},
}
</script>
<style lang="scss" scoped>
  #app{
    height: 100%;
    width: 100%;
    background: url("./assets/images/bg1.png") left top;
  }
</style>
