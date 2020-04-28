# nuxt-seo
#### 启动服务
#### npm run start
#### 安装需要的插件，然后启动
#### npm install
#### npm run dev
# 开发中重点代码
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
