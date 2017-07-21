<template>
  <div class="bigNav">
  
    <y-nav-swiper></y-nav-swiper>
  
    <header>
      <div class="logo">
        <img :src="logo">
      </div>
      <div class="nav">
        <div class="navtop">
          <li class="item">Weibo</li>
          <li class="item">Wechat</li>
          <li class="item">Twitter</li>
          <li class="item">Facebook</li>
          <li class="item last">Youku</li>
          <div class="lang">
            <span class="e">中文</span>
            <span class="c">En</span>
          </div>
        </div>
  
        <y-nav-list></y-nav-list>
  
      </div>
    </header>
  
    <div class="content">
      <div class="tip">
        <img :src="tip">
      </div>
      <div class="mainBtn">
        <button>Heven Left</button>
        <button>Hell Right</button>
      </div>
    </div>
  
    <y-nav-footer>
      <span slot="left" @click="$router.push('/')">think more</span>
      <span slot="right" @click="$router.push('/')">talk less</span>
    </y-nav-footer>
  
  </div>
</template>

<script>
import yNavList from '@/components/nav/navList'
import yNavFooter from '@/components/nav/navFooter'
import yNavSwiper from '@/components/nav/navSwiper'

export default {
  components: {
    yNavList, yNavFooter, yNavSwiper
  },
  data() {
    return {
      logo: require('@/assets/logo.png'),
      tip: require('@/assets/tip.png'),
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
@import '../../style/theme.less';

.bigNav {
  position: relative;
}

header {
  z-index: 20;
  position: absolute;
  top: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: #fff;
  .logo {
    text-align: left;
    display: inline-block;
    padding: 20px;
    img {
      width: 300px;
    }
  }
  .nav {
    text-align: right;
    display: inline-block;
    width: calc(~"100% - 200px");
    position: absolute;
    top: 0;
    left: 150px;
    .navtop {
      padding: 25px;
      list-style: none;
      .item {
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: @C2;
        }
        &:after {
          content: "";
          display: inline-block;
          height: 12px;
          width: 1px;
          background: @C2;
          margin: 0 15px;
        }
      }
      .last:after {
        display: none;
      }
      .lang {
        display: inline-block;
        padding: 5px 15px;
        margin-left: 30px;
        border: 1px solid @C2;
        width: 50px;
        text-align: center;
        cursor: pointer;
        .c {
          display: none;
        }
        &:hover {
          background: @C2;
          .e {
            display: none;
          }
          .c {
            display: block;
          }
        }
      }
    }
  }
}

.content {
  .tip {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    font-size: 30px;
    color: #fff;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    img {
      position: absolute;
      bottom: 50px;
      left: 20px;
    }
  }
  .mainBtn {
    position: absolute;
    bottom: 150px;
    text-align: center;
    width: 100%;
    button {
      padding: 15px 45px;
      background: @C1;
      color: #fff;
      border: 1px solid #fff;
      margin-right: 15px;
      margin-left: 25px;
      cursor: pointer;
      opacity: 0.8;
      font-size: 18px;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
