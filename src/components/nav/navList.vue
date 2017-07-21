<template>
  <div>
  
    <li class="navList animated fadeInLeftBig" v-for="l in mainNavData" :key="l.title" v-show="webwid>1400">
      <span class="title">{{ l.title }}</span>
      <div class="subnavContent animated fadeIn">
        <ul class="left">
          <li class="subnav" v-for="s in l.subnav" :key="s.title" @click="$router.push(s.link)">
            {{ s.title }}
          </li>
        </ul>
        <div class="right">
          <img :src="l.mainImg">
        </div>
        <div class="btn" @click="$router.push(l.link)">
          <div>Overview</div>
          <div class="bottom"> > </div>
        </div>
  
      </div>
  
    </li>
    <div class="navCollapsed animated fadeInRightBig" v-show="webwid<1401">
      <div class="icon">menu</div>
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    webwid() {
      return window.innerWidth
    },
    mainNavData() {
      return this.$store.getters.nav
    }
  },
  watch: {
  },
  created() {
  },
  mounted() {
    window.onresize = () => {
      setTimeout(this.setNewWidth, 500)
    }
  },
  methods: {
    setNewWidth() {
      this.webwid = window.innerWidth
    },
  }
}
</script>

<style lang="less" scoped>
@import '../../style/theme.less';

.navList {
  display: inline-block;
  margin: 0 20px;
  .title {
    cursor: pointer;
  }
  .title:after {
    content: "";
    display: none;
    margin-left: calc(~"50% - 15px");
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid rgba(0, 0, 0, 0.7);
    animation: fade .3s ease-in-out;
  }
  .subnavContent {
    z-index: 30;
    display: none;
    position: absolute;
    left: -150px;
    right: -50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    height: 600px;
    text-align: left;
    .left {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 40%;
      padding: 50px 0;
      float: left;
      list-style: none;
      column-count: 2;
      .subnav {
        padding-left: 30%;
        line-height: 60px;
        cursor: pointer;
        &:hover {
          color: @C2;
        }
      }
    }
    .right {
      z-index: 20;
      position: absolute;
      left: 45%;
      top: 0;
      line-height: 600px;
      text-align: left;
      img {
        vertical-align: middle;
        max-width: 550px;
        max-height: 550px;
        border-radius: 10px;
        border: 10px solid rgba(255, 255, 255, 0.2);
      }
    }
    .btn {
      position: absolute;
      right: 0;
      top: 0;
      width: calc(~"50% - 550px");
      vertical-align: middle;
      font-size: 30px;
      text-align: center;
      padding: 260px 0px;
      color: @C2;
      cursor: pointer;
      .bottom {
        transition: all .3s ease;
      }
      &:hover {
        color: @C1;
      }
      &:hover .bottom {
        transform: rotate(360deg)
      }
    }
  }
  &:hover .title {
    color: @C2;
  }
  &:hover .title:after {
    display: block;
  }
  &:hover .subnavContent {
    display: block;
  }
}

.navCollapsed {
  text-align: left;
  margin-left: 20px;
  .icon {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #fff;
    cursor: pointer;
    &:hover {
      border: 1px solid @C2;
    }
  }
}
</style>
