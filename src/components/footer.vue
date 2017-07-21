<template>
  <section class="footer">
    <div class="info">
      <div class="item" v-for="i in 4" :key="i">
        <div class="title">Primary</div>
        <div class="content">32132a</br>sda</br>s</br>dasd</br>asdas\n123132</div>
      </div>
    </div>
    <div class="end">
      <span class="left">Copyright Quincy 2017</span>
      <span class="right">All Rights Reserved</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    }
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
@import '../style/theme.less';

.footer {
  color: #fff;
  .info {
    width: 100%;
    background: @C1;
    padding: 20px 0;
    height: 300px;
    position: relative;
    .item {
      display: inline-block;
      width: 25%;
      text-align: center;
      .title {
        line-height: 100px;
        font-size: 30px;
      }
      &:after {
        content: "";
        display: block;
        width: 1px;
        height: 140px;
        background: #fff;
        position: absolute;
        top: 120px;
      }
    }
    .item:first-child {
      &:after {
        display: none;
      }
    }
  }
  .end {
    background: @C2;
    height: 40px;
    line-height: 40px;
    padding: 0 30px;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
}
</style>
