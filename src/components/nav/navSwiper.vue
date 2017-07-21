<template>
  <div class="swiper">
    <img class="animated fadeIn" :src="swiperImg[swiperIndex]" :key="swiperIndex">
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperImg: [
        require('@/assets/main/1.jpg'),
        require('@/assets/main/2.jpg'),
        require('@/assets/main/3.jpg'),
        require('@/assets/main/4.jpg'),
        require('@/assets/main/5.jpg'),
        require('@/assets/main/6.jpg'),
        require('@/assets/main/7.jpg'),
      ],
      swiperIndex: 0,
      loopTime: 3500,
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
  },
  methods: {
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
@import '../../style/theme.less';


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
</style>
