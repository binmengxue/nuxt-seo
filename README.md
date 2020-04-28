# nuxt-seo
#### 启动服务
#### npm run start
#### 安装需要的插件，然后启动
#### npm install
#### npm run dev
# 开发中重点代码
##  同个组件不同路由参数显示不同内容
``` python
 created() {
      this.activeName=this.$route.query.type
   },
   watch: {//这个地方是需要注意的，打开一个组件传不同参数显示不同内容
      '$route' () {
          this.activeName=this.$route.query.type;
          if(this.$route.query.type==="tab1"){
             this.tabTitle='投资银行'
          }else if(this.$route.query.type==="tab2"){
            this.tabTitle='股票业务'
          }else{
            this.tabTitle='财富管理' 
          }
      }
   },
   methods: {
      tabClick(e){
         this.tabTitle=e.label
      }
   }
 ```
##  静态化SEO设置
``` python
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
 ```
##  点击列表页面中某个LI，进入详情页面，携带数据，详情页面刷新的时候数据丢失问题
``` python
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.obj=JSON.parse(to.query.obj)//obj是携带的数据
    })
  },
  mounted() {
  }
 ```
