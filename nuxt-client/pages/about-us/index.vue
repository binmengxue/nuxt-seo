<template>
   <div class="container">
      <el-image class="bananer-img"  style="height:200px;"  fit="cover" :src="url[0]" ></el-image>
      <div class="info">
         <h2>公司简介</h2>
         <p>中国国际金融股份有限公司（中金, 3908.HK）是中国首家中外合资投资银行。凭借率先采用国际最佳实践以及深厚的专业知识，我们完成了众多开创先河的交易，并深度参与中国经济改革和发展，与客户共同成长。我们的目标是成为一家具有全球影响力的世界级金融机构。</p>
         <p>自1995年成立以来，中金一直致力于为客户提供高质量金融增值服务，建立了以研究为基础，投资银行、股票业务、固定收益、财富管理和投资管理全方位发展的业务结构。凭借深厚的经济、行业、法律法规等专业知识和优质的客户服务，中金在海内外媒体评选中屡获“中国最佳投资银行”“最佳销售服务团队”“最具影响力研究机构”等殊荣。</p>
         <p>2015年，中金在香港联交所主板成功挂牌上市。2017年，中金与中国中金财富证券有限公司（简称“中金财富证券”，原中国中投证券有限责任公司）的战略重组完成，中金财富证券成为中金的全资子公司。本次交易使公司规模显著扩大，综合实力进一步提升, 将实现对大、中小企业及机构、个人客户更为深度的覆盖，构建更为均衡的一二级市场业务结构。2018年，中金成功完成引入腾讯作为战略投资者。</p>
         <p>中金总部设在北京，在境内设有多家子公司，在上海、深圳、厦门、成都等地设有分公司，在中国大陆29个省、直辖市拥有200多个营业网点。公司亦积极开拓境外市场，在香港、纽约、新加坡、伦敦、旧金山、法兰克福等国际金融中心设有分支机构。凭借广泛的业务网络及杰出的跨境能力，中金能够为客户提供全方位的金融服务。</p>
         <p>秉承“植根中国，融通世界”的理念，通过境内外业务的无缝对接，中金将持续为客户提供一流的金融服务，协助客户实现其战略发展目标。</p>
         <h2> 我们的优势</h2>
         <p>独特的国际化基因</p>
         <p>自成立以来，中金一直致力于在业务运营、公司治理以及人才、文化培育方面遵守最佳国际实践。经过多年的发展，中金已建立起强大的国际网络，能够为客户提供一站式的全球服务。</p>
         <h4>多元化的优质客户群体</h4>
         <p>中金拥有高品质、多元化的客户基础，与客户建立并保持长期合作，致力于为其提供全面的产品和服务。通过与客户的深入接触，以及对客户业务的深度理解，中金赢得了客户的信任。</p>
         <h4>领先的研究实力</h4>
         <p>研究是中金业务的重要基础。中金一贯坚持客观、独立、严谨和专业的原则向机构和个人投资者企业和政府机构提供各种深入及时的研究。</p>
         <h4>丰富的项目执行经验</h4>
         <p>中金已建立起中国领先的投资银行业务，主导了众多复杂且开创先河的大型交易。凭借对中国国情的深刻理解与国际一流水准的专业能力，中金获得了客户的广泛赞誉，并成为很多客户的首选投行。</p>
         <h4>卓越的创新能力</h4>
         <p>中金真诚与合作的企业文化，营造了产生创意解决方案的环境。高素质的专业人才及其开阔的视野和丰富的经验，使中金能够牢牢把握市场脉搏为客户提供创新型产品及服务，满足客户需求。</p>
         <h4>全面有效的风险管理</h4>
         <p>中金始终关注客户及自身面临的风险，采用国际最佳实践，实施有效的风险管理和内部控制。</p>
         <h4>出众的专业团队</h4>
         <p>中金凝聚了一批海内外优秀人才, 培养了一支具有高水准职业操守, 卓越创新精神、出众业务能力以及成熟项目执行经验的专业团队。</p>
         <h2>里程碑</h2>
         <div class="history">
             <p class="title">2018</p>
             <div class="list">
                <p>完成年内最大可交换债——中国石油公募可交换债券。</p>
                <p>完成年内最大私募双创可转债——君实生物转债。&nbsp;</p>
             </div>
             <p class="title">2019</p>
             <div class="list">
                <p>完成年内最大可交换债——中国石油公募可交换债券。</p>
                <p>完成年内最大私募双创可转债——君实生物转债。&nbsp;</p>
             </div>

         </div>
      </div>
   </div>
</template>

<script>
import img4 from '../../assets/img/prouct-01.png'
import img5 from '../../assets/img/prouct-02.jpg'
import img6 from '../../assets/img/prouct-03.jpg'
export default {
   data() {
      return {
        url:[img4,img5,img6]
      };
  },
}
</script>

<style lang="scss" scoped>
.container {
   .info{
      padding:20px 100px;
      h2{
         text-align: left;
         margin-bottom:20px;
         padding:0px 20px;
         border-left:10px solid #640000;
        
      }
      h4{
        padding-left:20px; 
        text-align: left;
        padding-bottom:15px;
        text-indent: 2em;
      }
      p{
         
         padding-bottom:15px;
         padding-left:20px;
         text-indent: 2em;
         line-height: 30px;
      }

   }
   .history {
      .title {
         font-size: 26px;
         color: #2a2a2a;
         padding-left: 40px;
      }
      .list {
         border-left: solid 1px #d8d8d8;
         font-size: 16px;
         color: #424242;
         margin-left: 120px;
         padding: 5px 0 5px 35px;
         font-size: 14px;
         p {
            line-height: 1.5;
            position: relative;
            padding: 3px 0;
            text-align: justify;
         }
         p:before {
            content: '';
            position: absolute;
            top: 12px;
            left: 0px;
            background: #640000;
            width: 6px;
            height: 6px;
            border-radius: 100%;
         }
      }
   }
   
}

</style>