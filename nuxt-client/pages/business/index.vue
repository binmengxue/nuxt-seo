<template>
   <div class="container">
      <el-image class="bananer-img"  fit="cover" :src="url" ></el-image>
      <div class="bread flex flex-hw justify-content align-center">
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{tabTitle}}</el-breadcrumb-item>
         </el-breadcrumb>
      </div>
      <div class="business flex justify-content">
         <div class="business-info">
            <h2 class="tab-title">关于业务</h2>
            <el-tabs :tab-position="tabPosition" @tab-click="tabClick"  v-model="activeName">
               <el-tab-pane label="投资银行"  name="tab1" >
                  <h2>业务介绍</h2>
                  <p>始终处在中国经济变化和挑战的最前沿</p>
                  <p>投资银行部致力于与包括国有企业、民营企业、政府机构、国际金融机构在内的广大客户群体建立合作、信任、共赢的长期伙伴关系。秉持“客户至上”的理念，中金凭借对中国国情的深刻理解与国际一流的专业能力，通过全方位的融资、顾问服务为客户不断创造价值，赢得了客户的广泛赞誉。</p>
                  <p>投资银行部自成立以来，始终处在中国经济变化和挑战的最前沿，服务支持国家重大发展战略，牢牢把握混合所有制改革、供给侧改革、“一带一路”倡议以及中国资本市场发展和开放带来的历史性机遇，不断增强金融服务实体经济的能力，所完成项目涵盖电信、金融、能源、交通、制造、互联网等众多与国计民生息息相关的行业。 </p>
                  <p>近年来，随着中国经济进入新时代，以创新型企业为代表的民营企业逐步成为推动中国经济增长的重要力量。中金投资银行部积极响应经济发展对金融服务的新需求，成立了成长型企业组，专门为民营企业及成长型企业提供全方位和综合性的资本市场服务，并设立多个行业组，深耕新兴行业，全面落实地方布局，积极强化全球布局，锐意创新，屡创佳绩。</p>
                  <p>投资银行业务范围</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">投资银行部为客户提供股权融资、债务及结构化融资以及财务顾问等全方位的投资银行服务：</p>
                  <ul class="flex">
                     <li class="flex1">
                        <p>股权融资业务</p>
                        <p>包括境内外资本市场主板及创业板、新三板等不同板块的首次公开发行、再融资以及私募融资等。</p>
                     </li>
                     <li class="flex1">
                        <p>债务及结构化融资业务</p>
                        <p>提供全面的境内外固定收益产品，包括企业债、公司债、优先股、可转换债券、可交换债券、短期融资券、中期票据、金融债、次级债、离岸债券、资产证券化产品及其它结构化产品。</p>
                     </li>
                     <li class="flex1">
                        <p>财务顾问业务</p>
                        <p>包括为企业间的兼并、收购和战略合作提供财务顾问服务，以及为企业内部的资产重组、改制等操作提供财务顾问服务。</p>
                     </li>
                  </ul>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">投资银行业务2018年业绩亮点</P>
                  <ul class="flex">
                     <li class="flex1">
                        <p>股权融资业务</p>
                        <p>包括境内外资本市场主板及创业板、新三板等不同板块的首次公开发行、再融资以及私募融资等。</p>
                     </li>
                     <li class="flex1">
                        <p>债务及结构化融资业务</p>
                        <p>提供全面的境内外固定收益产品，包括企业债、公司债、优先股、可转换债券、可交换债券、短期融资券、中期票据、金融债、次级债、离岸债券、资产证券化产品及其它结构化产品。</p>
                     </li>
                     <li class="flex1">
                        <p>财务顾问业务</p>
                        <p>包括为企业间的兼并、收购和战略合作提供财务顾问服务，以及为企业内部的资产重组、改制等操作提供财务顾问服务。</p>
                     </li>
                  </ul>

               </el-tab-pane>
               <el-tab-pane label="股票业务" name="tab2">
                  <h2>业务介绍</h2>
                  <p>为境内外专业投资者提供“销售、交易、投研、产品”一站式综合金融服务</p>
                  <p>股票业务部成立于1997年，是中国首支按照国际一流投行标准设立的股票销售交易团队，成立之初主要承担中国公司海外股票发行的销售工作。2000年初，股票业务部首先在中国资本市场引入投研服务模式。随着中国资本市场的发展，股票业务部不断开拓创新，转型升级，目前可以为境内外专业投资者提供“销售、交易、投研、产品”一站式综合金融服务，并可根据客户需求，为其设计和提供一站式最佳执行方案。</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">全球销售和交易网络</p>
                  <p>我们不断深化覆盖中国重点城市及香港、纽约、伦敦、新加坡等国际金融中心的全球销售布局和在北京、上海、深圳、香港、纽约和伦敦等金融中心的全球交易布局，被业界认为是海外布局最早、跨境平台整合效率最高、具有国际视野的“中国专家”。</p>
                  <p>近年来，我们全面推进扎根中国、布局全球的发展战略，基于国内外优质机构客群网络进一步打造全球资产配置平台，通过在中国重点城市和纽伦新港四大全球金融中心的专业团队更好地实现资本融通，实现境内外、场内外团队、客户、业务联动。</p>
                  <p>我们在互联互通市场的客户覆盖率和市场份额名列前茅。在境内，公司覆盖大部分基金及保险客户的港股业务，自交易所有统计数据以来，相关交易份额不断提升，截至2018年末达13%。在境外，公司通过港交所交易的沪股通和深股通的市场交易份额在所有国际券商中排名靠前。</p>
                  <p>我们在境内外大宗交易执行、闪电配售、大型A/H股IPO及增发、销售等领域享有盛誉，成功完成了多个里程碑式的超大规模境内外股票融资项目。</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">全球化高端机构客户</p>
                  <p>我们的主要服务对象为专业投资者，包括共同基金、QFII/RQFII、QDII、对冲基金、保险公司、企业年金、社保基金、主权财富基金、大型企业、银行等。</p>
                  <p>在国内市场，我们在基金、QFII、保险、私募基金等领域的客户覆盖率和市场份额均保持领先地位，其中QFII、RQFII客户覆盖率连续15年领先。在海外市场，我们与数百家一流机构投资者建立了密切的业务联系，获得了充分认可和信赖，公募基金QDII服务收入连续11年领先。</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">领先的产品设计</p>
                  <p>我们率先获得中国证监会颁发的创新业务试点资格，凭借精准灵活的产品设计在中国场外衍生品市场中保持领军地位；在场外融资融券、指数期权、个股期权、篮子股票期权、市值管理、跨境衍生品等领域开创行业先河，具有场外期权一级交易商资质；交易品种逐渐丰富，涵盖A股、港股、沪深港通、美股、期货、大宗商品等。</p>
                  <p>同时，我们加大力度建立综合金融服务平台，不断提升中后台运营能力，加强主经纪商、权益类衍生品、综合股权融资等产品线的团队、系统、制度、流程方面的建设，与销售团队、交易团队形成合力。</p>
               </el-tab-pane>
               <el-tab-pane label="财富管理" name="tab3">
                  <h2>业务介绍</h2>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">成就格局人生</p>
                  <p>“中金财富”是中金公司旗下财富管理业务品牌，是中国财富管理行业的先行者，由最早创建于2007年的“中金公司财富管理”和2005年启用的“中投证券”及其旗下财富管理与经纪业务“金中投”、“掌中投”等子品牌整合而成，是中金公司发力财富管理领域这一战略意图的最佳实践。中金财富致力于帮助客户制定服务人生目标的财富规划，并为客户提供专业的投资解决方案。</p>
                  <p>中金财富的愿景是成为值得客户信赖的国际一流财富管理机构，并在财富之外，与客户一起成就更大的人生价值与社会价值。</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">我们的业务</p>
                  <p>中金财富为您提供全资产、全生命周期的解决方案，为了更好地支持财富管理客户需求、接轨国际服务标准，中金整合内部资源，全力打造全链条、立体化、一站式的“财富服务中心”，提供具备国际视野的交易服务、产品与投资管理服务、融资服务以及与中金公司投行等业务板块联动的一体化综合解决方案。</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">1、创新高效的交易服务</p>
                  <p>股票交易: 我们的股票交易服务覆盖超过300万客户。利用中金公司的跨境优势，我们可以为个人和机构客户提供全市场（包括A股、港股、美股等）、全品种的交易服务，支持股票、基金、债券、期权、期货、港股通等交易。通过IMS系统、内存交易、智能算法服务、量化交易服务 、极速行情服务为客户打造极具竞争力的高端交易服务。</p>
                  <p>财富研究与投资顾问服务：通过全面的客户覆盖、丰富的服务体系以及完备的研究团队和投资顾问团队，为客户提供包括研究报告、路演服务、上市公司调研、交易咨询、投资组合和辅助投资决策等在内的全方位专业投研和投顾服务，助力客户资产保值增值，是国内最早成立专业财富研究和投资顾问团队的金融机构之一。</p>
                  <p>衍生品服务：中金公司是场外期权一级交易商，同时持有跨境交易牌照，是少数可以全面为客户提供境内外衍生品交易方案的券商之一。公司场外期权基本实现1000余只A股标的、港股通标的、各类指数、大宗商品的覆盖，具有常规期权、奇异期权等各种结构，并为机构投资者提供定制化综合解决方案。同时公司公开发行雪球结构、触发结构等产品，满足零售客户的衍生品投资需求，实现多元化的资产配置。</p>
                  <p>主经纪商服务: 立足于建设优质的机构业务服务平台，我们目前拥有托管和外包双牌照，同时获得ISAE 3402国际认证，跃入业内领先行列。以IMS交易系统为核心，为机构客户提供全品种、一体化、场内外投资交易平台。同时投入自有资金设立种子基金，为初创型证券私募管理机构提供支持，充分挖掘优秀管理机构的发展潜力。通过领先的跨境业务，支持私募管理人拓展全球化的投资服务。</p>
                  <p>一体化的零售金融APP：掌中投APP致力于以鲜明的差异化打造中国最领先的线上财富管理与零售经纪平台，紧密围绕客户线上化需求，积极探索“金融科技+财富管理”新型业务模式，提升金融科技水平和线上服务质量，实现高效流畅、涵盖用户生命周期的数据化运营流程，降本增效，扎实打造零售业务线上线下一体化的互联网模式。</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">2、成熟完善的产品与投资管理服务</p>
                  <p>产品平台：中金财富背靠中金公司产品资源，并对接市场各类资产管理机构，通过严格的研究评估筛选体系，为客户提供业界领先、国际水准、全资产类别的一站式产品配置平台，满足客户对现金管理、固定收益、权益市场、另类投资、跨境配置的需求，以及依托香港营业部提供离岸资金产品配置的服务。中金财富于2010年率先建立对产品市场的研究体系，是市场上最早建立专业产品研究团队的金融机构，产品研究团队已评估超过千支市场产品，力图帮助客户解决产品选择中信息不对称的问题。</p>
                  <p>首席投资官办公室：中金财富首席投资官立足买方视角，基于中金公司强大的宏观研究能力，进行大类资产战略配置和战术配置研究，从收益率、波动性、流动性等多个维度综合考量，提供国际水准的覆盖全类别的资产配置建议。</p>
                  <p>资产配置：基于完善的产品平台和首席投资官办公室的配置研究，凭借近十年的产品组合投资管理经验，中金财富投资管理团队通过国内、海外的定制专户、FOF等多种形式的投资组合，为客户提供业内领先的量身定制、目标导向的投资管理服务。</p>
                  <p>财富规划：中金财富率先建立财富规划团队，为客户提供由一位专属顾问+专业研究团队组成的“1+N”专业服务团队。背靠业内领先的系统化、专业化资产配置投研体系，以及中金财富产品平台和财富规划模型，为客户提供覆盖养老、子女教育等多个人生目标的规划和解决方案。</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">3、领先的融资服务</p>
                  <p>融资融券: 中金是最早为客户提供融资融券服务的券商之一，通过向客户出借资金供其买入证券，或者出借证券供其卖出，满足客户增加交易机会、获得财务杠杆的交易需求。我们的融资融券业务具有交易系统稳定、科创板股票融券券源较多、资讯服务支持能力强等优势。</p>
                  <p>股票质押：中金财富为个人或机构客户提供股票质押服务，资金融入方以所持有的股票或其他证券质押，向融出方（证券公司及其资产管理计划等）融入资金。我们的股票质押业务具有资金效率高、融资成本低、折算率高、期限灵活等优势。</p>
                  <p>金融市场：中金财富对接市场上的金融机构，为机构客户及个人客户提供创新的、多样化的融资服务，包括结构化融资、上市公司股东增持&减持、员工持股计划、定增融资、科创板打新及高管战略配售融资等。</p>
                  <p style="font-size:18px;color: #640000;margin-top:20px;">4、中金公司一体化综合服务</p>
                  <p>中金公司机构服务：背靠中金公司卓越的投资银行业务、直接投资业务、股票交易、固定收益等机构服务平台，中金财富是客户一站式链接中金公司机构服务的窗口，为高净值客户的企业提供上市前战略投资者引入、境内外股本融资、债券发行、并购、减持等综合投资银行服务。</p>
                  <p>上市公司综合服务：为国内和海外的上市公司提供股票账户开立、市值托管、市值管理、股票质押融资、员工期权激励（ESOP）、现金管理、资本增值、融资并购等一站式的投资银行服务。</p>
                  <p>国际金融服务：中金作为国内首家合资投行，具有先天的国际基因和丰富的跨境业务经验。中金财富以中金香港证券为桥梁，与全球一流的海外资产管理机构建立了广泛的合作关系，以专业和专注的服务为中国投资者寻找全球机会，包括全球场内与场外交易、环球金融产品平台以及海外财富规划等。</p>
                  <p>环球家族办公室：帮助家族、企业及其家族办公室解决全生命周期的客户需求，为其提供全面化、定制化、机构化的投资管理、投行业务、咨询顾问及家族事务等综合解决方案，助力家族客户实现基业长青。</p>





               </el-tab-pane>
            </el-tabs>
         </div>
         
      </div>
   </div>
  
</template>

<script>
import newPoto from '../../assets/img/new.png'
export default {
   data() {
      return {
        url:newPoto,
        tabPosition: 'left',
        activeName:'tab1',
        tabTitle:'投资银行'
      };
  },
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
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  text-align: center;
  flex-direction: column;
  .bread{
     width:100%;
     background: #e4e4e4;
     height:30px;
     .el-breadcrumb{
        width:1280px
     }
  }
  .business{
    width:100%;
     background:#fff;
     padding:20px 0px;
     .business-info{
        width:1280px;
        padding-top:20px;
        position: relative;
        .tab-title{
           position: absolute;
           width: 144px;
           height:80px;
           line-height: 80px;
           background: #7d2522;
           font-size: 20px;
           color:#fff;
           z-index: 10;
        }
        .el-tabs__content{
           h2{
              margin-bottom:20px;
           }
            p{
               font-size: 14px;
               padding-bottom:15px;
            } 
            ul li{
               margin-right: 10px;
               background: #f9f5f0;
               padding:20px;
            }
            ul li p:first-child{
               color: #5c5c5c;
               padding: 1.2% 0 1.8% 0;
               border-bottom: solid 1px #c0b09c;
            }
            ul li p:last-child{
               line-height: 1.5;
               padding: 6% 0 8% 0;
               color: #8d7d65;
            }
        }
     }
  }
}

</style>