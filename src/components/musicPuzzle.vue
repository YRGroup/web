<template>
  <div class="musicPuzzle">
  
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
  
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style lang="less" scoped>
@import '../style/theme.less';

.musicPuzzle {
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
</style>
