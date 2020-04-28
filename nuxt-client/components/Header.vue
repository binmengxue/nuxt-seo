<template>
<div class="flex headerConent">
  <div class="flex justify-start align-center header">
    <el-image
    style="width:320px; height:62px;cursor: pointer;"
    :src="url"
    fit="contain"
     @click="gotoUrl"
    
    >
    </el-image>
    <el-menu 
      :default-active="activeIndex" 
      router class="el-menu-demo" 
      mode="horizontal" 
      menu-trigger="hover"
    >
      <el-menu-item index="/">网站首页</el-menu-item>
      <el-menu-item index="/about-us">关于我们</el-menu-item>
      <el-submenu index="/business" popper-class="sub">
          <template slot="title">业务介绍</template>
          <el-menu-item index="/business/?type=tab1">投资银行</el-menu-item>
          <el-menu-item index="/business/?type=tab2">股票业务</el-menu-item>
          <el-menu-item index="/business/?type=tab3">财富管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/new">新闻中心</el-menu-item>
      <el-menu-item index="/contact">加入我们</el-menu-item>
    </el-menu>
  </div> 
</div>
</template>
<script>
/* eslint-disable no-new */
import urlImage from '../assets/img/logo.png'
export default {
    props: {
      navAry: Array
    },
    data() {
      return {
        url: urlImage,
        activeIndex: '/'
      };
    },
     methods: {
      gotoUrl(){
        this.$router.replace({ path: '/'})
      }
    }
}
</script>

<style  lang="scss" scoped>
.headerConent{
  width:100%;
  justify-content:center;
.header{
  width:1280px;
  position: relative;
  .el-menu-demo{
    margin-left:30px;
  }
}

}

</style>
