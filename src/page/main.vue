<template>
  <div>
  
    <y-nav></y-nav>
  
    <section class="s1">
      <p class="title">who are we?</p>
      <div class="horizen">
        <li class="item" v-for="i in 3" :key="i">
          <div class="top">this is Aasd asd dasd</div>
          <div class="content">blablablablablablablabla blablablablab lablablablablablabla blablablablabl ablablablablablablabl abla</div>
          <div class="btn">
            <span class="a">→</span>
            <span class="b animated swing">→</span>
          </div>
        </li>
      </div>
    </section>
  
    <q-music-puzzle></q-music-puzzle>
  
    <y-footer></y-footer>
  
  </div>
</template>

<script>
import yNav from '@/components/nav/main'
import qMusicPuzzle from '@/components/musicPuzzle'
import yFooter from '@/components/footer'

export default {
  name: 'homepage',
  components: {
    yNav, qMusicPuzzle, yFooter
  },
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

.s1 {
  .title {
    color: @C1;
    text-align: center;
    line-height: 200px;
    font-size: 60px;
  }
  .horizen {
    background: @Cbg;
    padding: 0 80px;
    list-style: none;
    text-align: center;
    .item {
      display: inline-block;
      width: 400px;
      .top {
        font-size: 40px;
        height: 120px;
        color: @C1;
        padding: 40px;
      }
      .content {
        word-wrap: break-word;
      }
      .btn {
        line-height: 100px;
        font-size: 30px;
        cursor: pointer;
        .a {
          color: @C2;
        }
        .b {
          color: @C1;
          display: none;
        }
        &:hover {
          .a {
            display: none;
          }
          .b {
            display: block;
          }
        }
      }
    }
  }
}
</style>
