<template>
   <div class="container">
      <div class="content">
         <h2>新闻中心</h2>
         <ul >
            <li v-for="item in dataNew" :key="item.id" @click="detail(item)">
               <p class="p1">{{item.dateTime}}</p>
               <p>{{item.name}}</p>
            </li>
         </ul>
      </div>
      
   </div>
  
</template>

<script>
export default {
   data() {
      return {
          dataNew:[],
          baseImageUrl: "https://fuss10.elemecdn.com"
      };
   },
   created(){
      
   },
   head () {
    return {
      title: '我是首页这是官网1',
      meta: [
       { charset: 'utf-8' },
       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
       { hid: 'description', name: 'description', content: 'Meta description' }
      ]
    }
   },
   mounted(){
     this.fetchSomething(); 
   },
   methods: {
       async fetchSomething() {
         const {data}=await this.$axios.$get('/api/news');
         this.dataNew=data
       },
       detail(obj){
          this.$router.push({path:'prouctDetail',query:{obj:JSON.stringify(obj)}})
       }
   }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  text-align: center;
  flex-direction: column;
  text-align: center;
  .content{
  width:1200px;
  margin:0 auto;
  h2{
     font-size: 26px;
     line-height: 26px;
     text-align: left;
     margin-left:40px;
     padding-left:10px;
     border-left:4px solid #7f0101;
     margin-top:40px;
  }
  ul{
      font-size: 14px;
      display: flex;
      flex-direction: column;
      padding:40px;
      li{
        display: flex; 
        padding:20px 0px;
        border-bottom:solid 1px #f0f0f0;
        cursor: pointer;
        p{
           margin-right:30px;
           font-size: 14px;
        }
        p.p1{
          color: #aaaaaa;
        }
      }
  }
  }
  
}
</style>