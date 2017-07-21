<template>
  <div class="main">
  
    <section class="top">
      <div class="swiper">
        <img class="animated fadeIn" :src="swiperImg[swiperIndex]" :key="swiperIndex">
      </div>
      <header>
        <div class="logo">
          <img :src="logo">
        </div>
        <div class="nav">
          <div class="navtop">
            <li class="item">weibo</li>
            <li class="item">wechat</li>
            <li class="item">twitter</li>
            <li class="item">facebook</li>
            <li class="item last">youku</li>
            <div class="lang">
              <span class="e">En</span>
              <span class="c">中文</span>
            </div>
          </div>
          <li class="navList animated fadeInLeftBig" v-for="l in mainNavData" :key="l" v-show="webwid>1400">
            <span class="title">{{ l.title }}</span>
            <div class="subnavContent animated fadeIn">
              <ul class="left">
                <li class="subnav" v-for="s in 12" :key="s">
                  {{ s+' '+s+' '+s+' '+s+' '+s+' '+s }}
                </li>
              </ul>
              <div class="right">
                <img :src="l.mainImg">
  
              </div>
              <div class="btn">
                <div>Overview</div>
                <div class="bottom"> > </div>
              </div>
  
            </div>
  
          </li>
          <div class="navCollapsed animated fadeInRightBig" v-show="webwid<1401">
            <div class="icon">menu</div>
          </div>
        </div>
      </header>
  
      <div class="content">
        <div class="tip">
          <img src="../assets/tip.png">
        </div>
        <div class="mainBtn">
          <button>Heven Left</button>
          <button>Hell Right</button>
        </div>
      </div>
  
      <footer>
        <div class="left">
          <span>think more</span>
        </div>
        <div class="right">
          <span>talk less</span>
        </div>
  
      </footer>
    </section>
  
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
  
    <section class="s3">
      <div class="left">
        <div class="item" v-for="(i,index) in puzzleNav" :key="index" @click="switchMusic(index)" :class="index==puzzleIndex?'active':null">
          <div :class="'n'+(index+1)"></div>
          <div :class="'content content'+(index+1)">
            <span class="a">{{ i.a }}</span>
            <span class="b animated tada">{{ i.b }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="header">{{ puzzleContent[puzzleIndex].title }}</div>
        <div class="content">
          <pre class="info">{{ puzzleContent[puzzleIndex].content }}</pre>
          <img :src="puzzleContent[puzzleIndex].img">
        </div>
        <div class="btn" @click="playMp3">start play -></div>
        <div class="audio" ref="audioContent">
          <div class="played" :style="{width:musicProgress+'%'}"></div>
          <span class="dot" :style="{left:musicProgress+'%'}"></span>
          <span class="before">{{musicTime.before}}</span>
          <span class="after">{{musicTime.after}}</span>
          <audio ref="audio" @timeupdate="updateTime">
            <source :src="puzzleContent[puzzleIndex].mp3" type="audio/mpeg">
          </audio>
        </div>
  
      </div>
    </section>
  
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
  
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      logo: require('@/assets/logo.png'),
      swiperImg: [
        require('@/assets/main/1.jpg'),
        require('@/assets/main/2.jpg'),
        require('@/assets/main/3.jpg'),
        require('@/assets/main/4.jpg'),
        require('@/assets/main/5.jpg'),
        require('@/assets/main/6.jpg'),
        require('@/assets/main/7.jpg'),
      ],
      mainNavData: [
        {
          title: 'about yuren',
          mainImg: require('@/assets/main/1.jpg'),
          subnav: [
            {
              title: 'name',
              link: '/'
            },
          ]
        },
        {
          title: 'living today',
          mainImg: require('@/assets/main/2.jpg'),
          subnav: [
            'a',
            'b',
          ]
        },
        {
          title: 'champion',
          mainImg: require('@/assets/main/3.jpg'),
          subnav: [
            'a',
            'b',
            'c',
          ]
        },
        {
          title: 'complicated',
          mainImg: require('@/assets/main/4.jpg'),
          subnav: [
            'a',
            'b',
            'c',
          ]
        },
        {
          title: 'innocence',
          mainImg: require('@/assets/main/5.jpg'),
          subnav: [
            'a',
            'b',
            'c',
          ]
        },
        {
          title: 'born alone',
          mainImg: require('@/assets/main/6.jpg'),
          subnav: [
            'a',
            'b',
            'c',
          ]
        },
      ],
      swiperIndex: 0,
      loopTime: 3500,
      puzzleIndex: 0,
      puzzleNav: [
        {
          a: 'Wish You Were Here',
          b: 'Pink Floyd',
        },
        {
          a: 'Complicated',
          b: 'Avril Lavigne',
        },
        {
          a: 'Tomorrow',
          b: 'Avril Lavigne',
        },
        {
          a: 'Numb',
          b: 'Linkin Park',
        },
        {
          a: 'Bang Bang',
          b: 'Jessie J',
        },
        {
          a: '500 Miles',
          b: 'The Innocence Mission',
        },
        {
          a: 'Good Time',
          b: 'Owl City',
        },
      ],
      puzzleContent: [
        {
          title: 'Wish You Were Here',
          content: "So you think you can tell\nHeaven from Hell\nBlue skies from pain\nCan you tell a green field\nFrom a cold steel rail?\nA smile from a veil?\nDo you think you can tell?\nAnd did they get you to trade\nYour heroes for ghosts?\nHot ashes for trees?\nHot air for a cool breeze?\nCold comfort for change?\nAnd did you exchange\nA walk on part in the war\nFor a lead role in a cage?",
          img: require('@/assets/cd/4.jpg'),
          link: '/',
          mp3: "http://yrgroup.oss-cn-beijing.aliyuncs.com/mp3/WishYouWereHere.mp3",
        },
        {
          title: 'Complicated',
          content: "tell me\nwhy you have to go and make things so complicated\ni see the way you're acting like you're somebody else\ngets me frustrated\nlife's like this you\nand you fall and you crawl and you break\nand you take what you get\nand you turn it into honesty\nand promise me\ni'm never gonna find you fake it",
          img: require('@/assets/cd/1.jpg'),
          link: '/',
          mp3: "http://yrgroup.oss-cn-beijing.aliyuncs.com/mp3/Complicated.mp3",
        },
        {
          title: 'Tomorrow',
          content: "And I wanna believe you\nWhen you tell me that it'll be ok\nYa I try to believe you\nBut I don't\nWhen you say that it's gonna be\nIt always turns out to be a different way\nI try to believe you\nNot today today today today today\nI don't know how I'll feel\ntomorrow tomorrow",
          img: require('@/assets/cd/2.jpg'),
          link: '/',
          mp3: "http://yrgroup.oss-cn-beijing.aliyuncs.com/mp3/Tomorrow.mp3",
        },
        {
          title: 'Numb',
          content: "i've become so numb i can't feel you there\ni've become so tired so much more aware\ni've becoming this all i want to do\nis be more like me and be less like you\nand i know\ni may end up failing too\nbut i know\nyou were just like me with someone disappointed in you",
          img: require('@/assets/cd/3.jpg'),
          link: '/',
          mp3: "http://yrgroup.oss-cn-beijing.aliyuncs.com/mp3/Numb.mp3",
        },
        {
          title: 'Bang Bang',
          content: "She got a body like an hourglass, but I can give it to you all the time\nShe got a booty like a Cadillac, but I can send you into overdrive (oh)\n(Stop and wait, wait for that, stop, hold up, swing your bat\nSee anybody could be bad to you, you need a good girl to blow your mind, yeah\nBang bang into the room (I know you want it)\nBang bang all over you (I’ll let you have it)\nWait a minute let me take you there (ah)\nWait a minute tell you (ah)\nBang bang there goes your heart (I know you want it)\nBack, back seat of my car (I’ll let you have it)\nWait a minute let me take you there (ah)\nWait a minute tell you (ah)",
          img: require('@/assets/cd/5.jpg'),
          link: '/',
          mp3: "http://yrgroup.oss-cn-beijing.aliyuncs.com/mp3/BangBang.mp3",
        },
        {
          title: '500 Miles',
          content: "If you miss the train I'm on\nYou will know that I am gone\nYou can hear the whistle blow\nA hundred miles\nA hundred miles, a hundred miles\nA hundred miles, a hundred miles\nYou can hear the whistle blow\nA hundred miles\nLord I'm one, lord I'm two\nlord I'm three, lord I'm four\nLord I'm five hundred miles\nRun my door",
          img: require('@/assets/cd/6.jpg'),
          link: '/',
          mp3: "http://yrgroup.oss-cn-beijing.aliyuncs.com/mp3/500Miles.mp3",
        },
        {
          title: 'Good Time',
          content: "Woah-oh-oh-oh\nIt's always a good time\nWoke up on the right side of the bed\nWhat's up with this Prince song inside my head?\nHands up if you're down to get down tonight\nCuz it's always a good time.\nSlept in all my clothes like I didn't care\nHopped into a cab, take me anywhere\nI'm in if you're down to get down tonight\nCuz it's always a good time",
          img: require('@/assets/cd/7.jpg'),
          link: '/',
          mp3: "http://yrgroup.oss-cn-beijing.aliyuncs.com/mp3/GoodTime.mp3",
        },
      ],
      musicProgress: 0,
      musicTime: {
        before: 0, after: 0,
      },
      webwid: window.innerWidth,
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
    this.startSwiper()
  },
  mounted() {
    window.onresize = () => {
      setTimeout(this.setNewWidth, 500)
    }
  },
  methods: {
    changeTime(time) {
      var minute = parseInt(time / 60);
      if (minute < 10) {
        minute = '0' + minute;
      }
      var secound = parseInt(time % 60);
      if (secound < 10) {
        secound = '0' + secound;
      }
      return minute + ':' + secound;
    },
    updateTime() {
      let myaudio = this.$refs.audio
      let time = parseInt(myaudio.currentTime)
      let timelength = myaudio.duration
      this.musicProgress = time / timelength * 100
      this.musicTime.before = this.changeTime(time)
      this.musicTime.after = this.changeTime(timelength - time)
    },
    switchMusic(index) {
      this.puzzleIndex = index
      this.$refs.audio.pause()
      this.$refs.audio.currentTime = 0
    },
    playMp3() {
      this.$refs.audio.load()
      this.$refs.audio.play()
    },
    setNewWidth() {
      this.webwid = window.innerWidth
    },
    startSwiper() {
      setInterval(this.loop, this.loopTime)
    },
    loop() {
      if (this.swiperIndex < this.swiperImg.length - 1) {
        this.swiperIndex++
      } else {
        this.swiperIndex = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/theme.less';

.top {
  position: relative;
  .swiper {
    z-index: 10;
    min-width: 320px;
    max-height: 100vh;
    overflow: hidden;
    width: auto;
    white-space: nowrap;
    img {
      width: 100vw;
      min-width: 320px;
    }
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
        width: 150px;
      }
    }
    .nav {
      text-align: right;
      display: inline-block;
      width: calc(~"100% - 200px");
      position: absolute;
      top: 0;
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
      .navList {
        display: inline-block;
        margin: 0 20px;
        .title {
          cursor: pointer;
        }
        .title:after {
          content: "";
          display: none;
          margin-left: calc(~"50% - 20px");
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
          left: -190px;
          right: -9px;
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
}

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

.s3 {
  margin: 50px 0;
  text-align: center;
  height: 500px;
  .left {
    width: 500px;
    height: 500px;
    background: @Cbg;
    padding: 20px;
    display: inline-block;
    position: absolute;
    left: 50px;
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      z-index: 2;
      border-top: 45px solid @Cbg;
      border-right: 45px solid transparent;
      transform: rotate(135deg);
      position: absolute;
      top: 250px;
      left: 515px;
    }
    * {
      transition: all 0.3s ease-in;
    }
    .item {
      cursor: pointer;
      .content {
        color: #fff;
        position: absolute;
        width: 200px;
        line-height: 100px;
        z-index: 10;
        .b {
          display: none;
        }
      }
      .content1 {
        top: 100px;
        left: 175px;
      }
      .content2 {
        top: 210px;
        left: 50px;
      }
      .content3 {
        top: 115px;
        left: 335px;
      }
      .content4 {
        top: 290px;
        left: 175px;
      }
      .content5 {
        top: 375px;
        left: 325px;
      }
      .content6 {
        top: 220px;
        left: 280px;
      }
      .content7 {
        top: 390px;
        left: 100px;
      }
      &:hover {
        .content {
          .a {
            display: none;
          }
          .b {
            display: block;
          }
        }
        .n1 {
          border-top: 305px solid @C2;
        }
        .n2 {
          border-top: 299px solid @C2;
        }
        .n3 {
          border-top: 145px solid @C2;
        }
        .n4 {
          border-top: 145px solid @C2;
        }
        .n5 {
          border-right: 205px solid @C2;
        }
        .n6 {
          border: 72.5px solid @C2;
        }
        .n7 {
          background: @C2;
        }
      }
      .n1 {
        width: 0;
        height: 0;
        z-index: 2;
        border-top: 305px solid @C1;
        border-right: 305px solid transparent;
        transform: rotate(225deg);
        position: absolute;
        top: -102px;
        left: 115px;
      }
      .n2 {
        width: 0;
        height: 0;
        border-top: 299px solid @C1;
        border-right: 299px solid transparent;
        transform: rotate(135deg);
        position: absolute;
        top: 123px;
        left: -99px;
      }
      .n3 {
        width: 0;
        height: 0;
        z-index: 1;
        border-top: 145px solid @C1;
        border-right: 145px solid transparent;
        transform: rotate(-45deg);
        position: absolute;
        top: 92.5px;
        left: 410px;
      }
      .n4 {
        width: 0;
        height: 0;
        z-index: 2;
        border-top: 145px solid @C1;
        border-right: 145px solid transparent;
        transform: rotate(45deg);
        position: absolute;
        top: 307.5px;
        left: 195px;
      }
      .n5 {
        width: 0;
        height: 0;
        z-index: 1;
        border-right: 205px solid @C1;
        border-top: 205px solid transparent;
        position: absolute;
        top: 278px;
        left: 278px;
      }
      .n6 {
        width: 0;
        height: 0;
        z-index: 2;
        border: 72.5px solid @C1;
        transform: rotate(45deg);
        position: absolute;
        top: 200px;
        left: 303px;
      }
      .n7 {
        width: 205px;
        height: 97px;
        background: @C1;
        transform: skew(-45deg);
        position: absolute;
        top: 386px;
        left: 110px;
      }
    }
    .active {
      .content {
        .a {
          display: none;
        }
        .b {
          display: block;
        }
      }
      .n1 {
        border-top: 305px solid @C2;
      }
      .n2 {
        border-top: 299px solid @C2;
      }
      .n3 {
        border-top: 145px solid @C2;
      }
      .n4 {
        border-top: 145px solid @C2;
      }
      .n5 {
        border-right: 205px solid @C2;
      }
      .n6 {
        border: 72.5px solid @C2;
      }
      .n7 {
        background: @C2;
      }
    }
  }
  .right {
    height: 500px;
    padding: 20px 50px;
    background: @Cbg;
    display: inline-block;
    position: absolute;
    left: 600px;
    right: 50px;
    min-width: 500px;
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-top: 45px solid #fff;
      border-right: 45px solid transparent;
      transform: rotate(135deg);
      position: absolute;
      top: 250px;
      left: -25px;
    }
    .header {
      color: @C1;
      line-height: 100px;
      font-size: 40px;
    }
    .content {
      .info {
        text-align: left;
        display: inline-block;
        line-height: 25px;
        width: calc(~"100% - 300px");
        height: 300px;
        overflow: hidden;
      }
      img {
        float: right;
        width: 200px;
        margin-right: 50px;
      }
    }
    .btn {
      display: inline-block;
      padding: 10px 30px;
      background: @C2;
      color: #fff;
      cursor: pointer;
      &:hover {
        background: @C1;
      }
    }
    .audio {
      width: 80%;
      height: 1px;
      background: @C2;
      margin: 30px auto;
      position: relative;
      .played {
        width: 100%;
        height: 1px;
        background: @C1;
        position: absolute;
        left: 0;
        top: 0;
      }
      .dot {
        width: 10px;
        height: 10px;
        background: @C1;
        border-radius: 50%;
        position: absolute;
        top: -5px;
      }
      .before {
        position: absolute;
        left: -50px;
        top: -11px;
      }
      .after {
        position: absolute;
        top: -11px;
        right: -50px;
      }
    }
    audio {
      display: block;
      margin: 20px auto;
    }
  }
}

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
