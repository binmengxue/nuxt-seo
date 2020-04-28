<template>
  <div class="container">
    <div class="content">
      <h2>{{obj.name}}</h2>
      <p>{{obj.dateTime}}</P>
      <div class="detail" v-html="obj.htmlString"></div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
        obj:{}
      };
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.obj=JSON.parse(to.query.obj)
    })
  },
  mounted() {
  }
  
}
</script>

<style lang="scss" scoped>
.content{
  width:1200px;
  margin:20px auto 0 auto;
  h2{
    text-align: left;
    font-size: 16px;
  }
  p{
    margin-top:20px;
    font-size: 14px;
    color:#b9b9b9;
  }
  .detail{
     margin-top:20px;
    
  }
}
</style>
<style>
  .detail p{
       text-indent: 2em;
       font-size: 14px;
       line-height: 20px;
       padding-bottom:20px;
     }
</style>