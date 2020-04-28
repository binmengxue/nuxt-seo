<template>
  <div class="container">
    <div v-swiper:mySwiper="swiperOption" style="height:300px">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" :key="index" v-for="(item,index) in banners">
          <el-image  style="width:100%;height:300px" fit="cover" :src="item.img" ></el-image>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="bananer">
      <div class="bananer-inner">
          <div class="font-headline-3 wow fadeInDown">OnePlus 8 Pro</div>
          <div class="font-subheading wow fadeInDown"> | 骁龙 865 | 30W 无线充电</div>
          <div class="homepage-empty-line wow fadeInDown"></div>
          <el-button class="font-btn" type="primary wow fadeInDown">立刻预约</el-button>
          <div class="text-arrow wow fadeInDown">了解产品</div>
      </div>
      <el-image class="bananer-img"  fit="cover" :src="url[0]" ></el-image>
    </div>
    <div class="bananer" >
      <div class="bananer-inner hw" @click="gotoDetail">
          <div class="font-headline-3 center wow bounceIn"  data-wow-delay="1s">OnePlus 8</div>
          <div class="font-subheading center wow bounceIn" data-wow-delay="1s">90Hz 瞳孔屏 | 骁龙 865｜180g 轻薄</div>
          <div class="homepage-empty-line center wow bounceIn" data-wow-delay="1s"></div>
          <el-button type="primary" class="font-btn center wow bounceIn" data-wow-delay="1s" >立刻预约</el-button>
          <div class="center wow bounceIn" style="visibility: hidden;" data-wow-delay="1s">了解产品</div>
      </div>
      <el-image class="bananer-img"  fit="cover" :src="url[1]" ></el-image>
    </div>
    <div class="bananer">
      <div class="bananer-inner">
          <div class="font-headline-3 wow fadeInDown"  data-wow-delay="2s">OnePlus 8 Pro</div>
          <div class="font-subheading wow fadeInDown" data-wow-delay="2s"> | 骁龙 865 | 30W 无线充电</div>
          <div class="homepage-empty-line wow fadeInDown" data-wow-delay="2s"></div>
          <el-button class="font-btn" type="primary wow fadeInDown" data-wow-delay="2s">立刻预约</el-button>
          <div class="wow fadeInDown" data-wow-delay="2s" style="text-align: left;visibility: hidden;">了解产品</div>
      </div>
      <el-image class="bananer-img"  fit="cover" :src="url[2]" ></el-image>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/img/4.jpg'
import img2 from '../assets/img/2.webp'
import img3 from '../assets/img/6.jpg'
import img4 from '../assets/img/prouct-01.png'
import img5 from '../assets/img/prouct-02.jpg'
import img6 from '../assets/img/prouct-03.jpg'
import '../assets/css/swiper.css'
export default {
  data() {
      return {
        url:[img4,img5,img6],
        banners: [{img:img1},{img:img2},{img:img3} ],
        swiperOption: {
          loop : true,
          autoplay: true,//可选选项，自动滑动
          pagination: {
            el: '.swiper-pagination',
            bulletActiveClass: 'my-bullet-active'
          },
          // ...
        }
      };
  },
  head () {
    return {
      title: '我是首页这是官网',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  components: {
    
  },
  watch: {
  },
  mounted() {
    if (process.browser) {
      var { WOW } = require("wowjs");
    }
    if (process.browser) {
        let wow = new WOW({
            live: false
        });
        wow.init();
    }
  
  },
  methods:{
     gotoDetail(){
       this.$store.commit('changeActive','/contact')
       this.$router.push({path:'/prouctDetail',query: {id: "0001"}})
     }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  text-align: center;
  flex-direction: column;
 .swiper-container{
    width:100%;
 }
 .bananer{
    position: relative;
    .bananer-inner{
      position: absolute;
      left: 20%;
      right: 52%;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: 1;
      text-align: left;
      .font-btn{
         visibility: hidden;
      }
      .font-headline-3{
        font-size: 34px;
        font-weight: bold;
        visibility: hidden;
      }
      .font-subheading{
          margin-top: 6px;
          font-size: 24px;
          visibility: hidden;
      }
      .homepage-empty-line{
        height:30px;
        visibility: hidden;
      }
      .text-arrow{
        margin-top:5px;
        font-size: 18px;
        visibility: hidden;
      }
      .textFont{
        margin-top:5px;
        font-size: 18px;
        visibility: hidden;
      }
      .center{
        text-align: center;
      }
    }
    .bananer-inner.hw{
     left: 20%;
     right: 20%;
     text-align: center;
    }
    .bananer-img{
      width:100%;
      height:300px;
    }
  }
}

</style>
