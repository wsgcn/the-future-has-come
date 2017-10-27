<style lang="less">
.about-us {
  font-size: 18px;
}

.title {
  font-size: 28px;
}

.img-tobe {
  width: 100%;
  height: 200px;
  background-color: red;
  margin-top: 20px;
}
.introduce {
  background-color: white;
  padding: 15px;
  margin-top: 20px;
  p {
    text-align: justify;
    text-indent: 20px;
    line-height: 30px;
  }
}

.branch-company {
  font-size: 18px;
  margin-top: 60px;
  .content {
    margin-top: 40px;
    padding: 20px;
    background: white;
    .branch {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      p {
        width: 20px;
      }
    }
  }
}

.our-team {
     margin-top: 60px;
    .content{
        display: flex;;
        flex-direction: row;
        justify-content:space-between;
        margin-top: 40px;
        padding:20px 30px;
        // background-color: white;
        .member {
        display: flex;
        flex-direction: column;
        align-items: center;    
        .avator{
            width: 220px;
            height: 240px;
        }
        .job{
            margin-top: 10px;
            font-size: 22px;
        }
        .desc{
            text-align: left;
            margin-top: 10px;
            padding-left: 20px;
            width: 240px;
            // font-size: 20px;
            color: #666;
            // background-color: red;
        }
        }
    }
}

.why-us {
    margin-top: 60px;
    .content {
         margin-top: 40px;
         background-color: white;
         padding: 20px 30px;
         box-sizing: border-box;
         :not(:first-child) {
             margin-top: 30px;
         }
         .item {
             .desc{
                 margin-top: 30px;
                 text-align: left;
             }
         }
    }
}

</style>

<template>
    <div class="about-us">
         <div class="future">
             <div class="title">关于我们</div>
             <img class="img-tobe" src="../../assets/images/about/to-be.png" alt="">
             <div class="introduce">
                 <p  class="what-do"> xx是杭州xxx科技有限公司旗下，专注于微信小程序开发、微信公众号开发、网站定制、软件系统开发的知名品牌，曾服务于火烈鸟、自然堂、水密码等知名企业。</p>
                 <p class="service-idea">
                     我们的服务理念：服务好每一个客户，做好口碑、才能带来更多的客户。
                 </p>
                 <p class="our-sense">
                     我们的价值观：简单、利他、找自己问题、主动变化。
                 </p>
                 <p class="our-believe">
                     我们的信仰：成为一家像华为、阿里巴巴一样的民族企业！做国家、社会所需要的产品，做对人类有利的事情...
                 </p>
             </div>
         </div>

         <div class="branch-company">
             <div class="title">分公司</div>
             <div class="content">
                 <div class="group">杭州xx科技集团</div>
                 <div class="branch">
                     <p v-for="branch in companyBranchs">{{branch}}</p>
                 </div>
             </div>
         </div>

         <div class="our-team">
             <div class="title">我们的团队</div>
             <div class="content" >
                 <div class="member" v-for="member in members">
                     <img class="avator" :src="member.avator"></img>
                     <div class="job">{{member.job}}</div>
                     <div class="desc">{{member.desc}}</div>
                 </div>
             </div>
         </div>

         <div class="why-us">
             <div class="title">我们的优势</div>
             <div class="content">
                 <div class="item" v-for="why in whyUs">
                     <div class="title">{{why.title}}</div>
                     <div class="desc">{{why.desc}}</div>
                 </div>
             </div>
         </div>
    </div>
</template>


<script>
import Designer from '@/assets/images/about/food.png';
import JavaEngineer from '@/assets/images/about/play.png';
import JsEngineer from '@/assets/images/about/js-engineer.png';
import ServiceManager from '@/assets/images/about/service-manager.png';


export default {
    data() {
        return {
            companyBranchs: ['贵阳xx科技', '南昌云客网络', '义乌创博网络', '宁波xx科技', '金华xx网络', '厦门xx网络'],
            members: [{avator: Designer, job: '首席设计师', desc: ''},
            {avator: JavaEngineer, job: '后端工程师', desc: '后端工程师'},
            {avator: JsEngineer, job: '前端工程师', desc: '曾任职于一线互联网名企,有千万用户的产品开发经验,立志做一家伟大的企业'},
            {avator: ServiceManager, job: '业务经理', desc: '曾任职于上线软件企业中企,为人真诚,不说大话, 说到做到,深受客户信任!'}],
            whyUs: [{title: '技术优势', desc: '核心的技术团队均来自于阿里巴巴、IBM、大搜车等知名互联网企业！大到千万用户的大型商业系统，小到个性化的网站、小程序、微信公众号，都有丰富的开发经验！'},
            {title: '设计优势', desc: '设计团队骨干成员来自蘑菇街、贝贝网、大搜车等一线电商企业、这些企业对产品的设计都有非常高的要求！我们有独特的设计理念，好产品应该是营销利器、是一个充分提高效率的工具！'},
            {title: '高性价比', desc: '性价比高于行业平均水平。我们要做软件服务行业的小米，为客户提供性价比更高的产品！给客户提供高效的网络营销、商机寻找方案！'}]
        };
    }
};
</script>

