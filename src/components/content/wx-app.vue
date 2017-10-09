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
        color: #000;
        .title {
            font-size: 28px;
        }
        .label {
            font-size: 24px;
            color: #000;
        }
        .case-nav {
            display: flex;
            margin-top: 20px;
            justify-content: center;
            .nav-item {
                margin-right: 40px;
                img {
                    width: 218px;
                    height: 218px;
                }
                .label {
                    font-size: 24px;
                    color: #000;
                }
            }
        }
    }
    .why-use{
        margin-top: 50px;
        .label {
            font-size: 28px;
            color:#000;
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
            font-size: 28px;
            color:#000;
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
            font-size: 28px;
            color:#000;
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
                    <img src="http://mooc.inxedu.com/images/upload/image/20151026/1446026886181.jpg"></img>
                </div>
                <div class="swiper-slide">
                    <img src="http://mooc.inxedu.com/images/upload/image/20151026/1446026905031.jpg"></img>
                </div>
            </div>
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>
        </div>
        <div class="success-case">
            <div class="title">成功案例</div>
            <div class="label">每一个小程序 都是一条销售渠道 都是一个好工具</div>
            <div class="case-nav">
                <div class="nav-item">
                    <img src="../../assets/images/wx-app/show.png" />
                    <div class="label">门店展示</div>
                </div>
                <div class="nav-item">
                    <img src="../../assets/images/wx-app/food.png" />
                    <div class="label">餐饮行业</div>
                </div>
                <div class="nav-item">
                    <img src="../../assets/images/wx-app/store.png" />
                    <div class="label">定制商城</div>
                </div>
                <div class="nav-item">
                    <img src="../../assets/images/wx-app/tool.png" />
                    <div class="label">管理工具</div>
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

export default {
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 2000,
            pagination: '.swiper-pagination',
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next'
        });
    },
    methods: {
    }
};
</script>
