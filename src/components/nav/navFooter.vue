<template>
  <footer>
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:{
  },
  computed: {
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import '../../style/theme.less';

footer {
  z-index: 20;
  @h: 50px;
  width: 100%;
  color: #fff;
  height: @h;
  position: absolute;
  margin-top: -50px;
  .left,
  .right {
    background: @C2;
    width: calc(~"50% - (@{h}/2)");
    text-align: center;
    position: absolute;
    bottom: 0;
    line-height: @h;
    span {
      cursor: pointer;
    }
    span:hover {
      color: black;
    }
  }
  .left {
    left: 0;
    span {
      margin-right: -70%;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      right: -@h;
      width: 0;
      height: 0;
      border-bottom: @h solid @C2;
      border-right: @h solid transparent;
    }
  }
  .right {
    right: 0;
    span {
      margin-left: -70%;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: -@h;
      width: 0;
      height: 0;
      border-bottom: @h solid @C2;
      border-left: @h solid transparent;
    }
  }
}
</style>
