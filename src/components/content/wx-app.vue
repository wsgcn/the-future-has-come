<style lang="less">
.wx-app {
    width: 100%;
    height: 100%;
    .swiper-container {
        .swiper-button-next,
        .swiper-button-prev {
            width: 30px;
            height: 20px;
        }
    }
    .swiper-slide {
        cursor: pointer;
        img {
            width: 100%;
            height: 300px;
        }
    }

    .success-case {
        margin-top: 20px;
        .title {
            font-size: 22px;
            font-weight: 400;
        }
        .label {
            font-size: 18px;  
        }
        .case-nav {
             display: flex;
             justify-content: center;
             margin-top: 20px;
            .case-item {
                margin-right: 40px;
                .case-img {
                    position: relative;
                    width: 218px;
                    height: 218px;
                    .down,
                    .over{
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                    }
                    .over {
                        opacity: 0;
                    }
                    .over:hover {
                        opacity: 100;
                    }
                }    
                .label {
                    font-size: 18px;
                }
            }
        }
    }
    .why-use{
        margin-top: 50px;
        .label {
            font-size: 22px;
        }
        .video {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 34px;
            height: 330px;
            width: 100%;
            background:#FFF;
            img {
                height: 54px;
                width: 54px;
            }
        }
    }
    .service-flow {
        margin-top: 50px;
        .label {
            font-size: 22px;
        }
        img {
            margin-top: 34px;
            height: 544px;
            width: 100%;
        }
    }
    .our-custom {
        margin-top:50px;
        .label {
            font-size: 22px;
        }
        img {
            margin-top: 34px;
            height: 360px;
            width: 100%;
        }
    }
}
</style>


<template>
    <div class="wx-app">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/images/wx-app/wx-app-banner.png"></img>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/wx-app/wx-gong.png"></img>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/wx-app/website.png"></img>
                </div>
            </div>
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>
        </div>

        <div class="success-case">
            <div class="title">成功案例</div>
            <div class="label">每一个小程序 都是一条销售渠道 都是一个好工具</div>
            <div class="case-nav">
                <div class="case-item" v-for="(item,index) in caseItem">
                    <div class="case-img">
                         <img class="down" :src="item.img" >
                         <img class="over" :src="item.overImg">
                    </div>
                    <div class="label">{{item.label}}</div>
                </div>
            </div>  
        </div>    
        <div class="why-use">
            <div class="label">为什么要使用小程序</div>
            <div class="video">
                <img src="../../assets/images/wx-app/play.png"/>
                <div class="label">查看视频,找到需求点</div>
            </div>
        </div>

        <div class="service-flow">
            <div class="label">服务流程</div>
            <img src="../../assets/images/wx-app/service-flow.png" alt="">
        </div>

        <div class="our-custom">
            <div class="label">我们的客户</div>
            <img src="../../assets/images/wx-app/custom.png" alt="">
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper//dist/css/swiper.min.css';
import show from '@/assets/images/wx-app/show.png';
import store from '@/assets/images/wx-app/store.png';
import food from '@/assets/images/wx-app/food.png';
import tool from '@/assets/images/wx-app/tool.png';

export default {
    data() {
        return {
            caseItem: [{ img: show, overImg: store, label: '门店展示' },
            { img: store, label: '定制商城'},
            { img: food, overImg: store, label: '订餐系统' },
            { img: tool, label: '管理工具' }]
        };
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 2000,
            pagination: '.swiper-pagination',
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next'
        });
    }
};
</script>
