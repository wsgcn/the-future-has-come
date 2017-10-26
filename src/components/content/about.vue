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
</style>

<template>
    <div class="about-us">
         <div class="future">
             <div class="title">关于我们</div>
             <img class="img-tobe" src="../../assets/images/wx-app/to-be.png" alt="">
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

         </div>

         <div class="why-us">

         </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            companyBranchs: ['贵阳xx科技', '南昌云客网络', '义乌创博网络', '宁波xx科技', '金华xx网络', '厦门xx网络']
        };
    }
};
</script>

