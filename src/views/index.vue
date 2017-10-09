<style lang="less">
.pg-nav {
    display: flex;
    height: 70px;
    background-color: #FFF;
    padding-left: 60px;
    font-size: 14px;
    .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 18px;
        padding-right: 18px;
        box-sizing: border-box;
    }
    .z-active {
        border-top: 2px solid #3498DB;
        color: #3498DB;
    }
}
.pg-body {
    padding: 20px 50px 0px 50px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
</style>

<template>
    <div class="pg-index">
        <nav class="pg-nav">
            <div class="nav-item">LOGO</div>
            <div class="nav-item" :class="{'z-active':isWxApp}" @click="onWxApp" @mouseover="onWxApp">微信小程序</div>
            <div class="nav-item">微信公众号</div>
            <div class="nav-item">网站定制</div>
            <div class="nav-item" :class="{'z-active':isCase}" @click="onCase" @mouseover="onCase">案例</div>
            <div class="nav-item" :class="{'z-active':isWhyUs}" @click="onWhyUs" @mouseover="onWhyUs">优势</div>
            <div class="nav-item" :class="{'z-active':isService}" @click="onService" @mouseover="onService">售后服务</div>
            <!-- <div class="nav-item" :class="{'z-active':isReport}" @click="onReport" @mouseover="onReport">媒体报道</div> -->
            <div class="nav-item" :class="{'z-active':isAbout}" @click="onAbout" @mouseover="onAbout">关于我们</div>
        </nav>
         
        <div class="pg-body">
            <WxApp v-if="isWxApp" class="pg-nav-item" ref="wxApp"></WxApp>
            <Case v-if="isCase" class="pg-nav-item" ></Case>
            <WhyUs v-if="isWhyUs" class="pg-nav-item"></WhyUs>
            <Service v-if="isWhyUs" class="pg-nav-item"></Service>
            <!-- <Report v-if="isReport" class="pg-nav-item"></Report> -->
            <About v-if="isAbout" class="pg-nav-item"></About>
        </div>

        <Foot>

        </Foot>
    </div>
</template>

<script>
import WxApp from '../components/content/wx-app';
import Case from '../components/content/case';
import WhyUs from '../components/content/why-us';
import Service from '../components/content/service';
import Report from '../components/content/report';
import About from '../components/content/about';
import Foot from '../components/foot.vue';

export default {
    name: 'index',
    data() {
        return {
            nav: this.$route.query.nav || 'wxApp'
        };
    },
    computed: {
        isWxApp() {
            return this.nav === 'wxApp';
        },
        isCase() {
            return this.nav === 'case';
        },
        isWhyUs() {
            return this.nav === 'whyUs';
        },
        isService() {
            return this.nav === 'service';
        },
        isReport() {
            return this.nav === 'report';
        },
        isAbout() {
            return this.nav === 'about';
        }
    },
    methods: {
        onWxApp() {
            this.nav = 'wxApp';
        },
        onCase() {
            this.nav = 'case';
        },
        onWhyUs() {
            this.nav = 'whyUs';
        },
        onService() {
            this.nav = 'service';
        },
        onReport() {
            this.nav = 'report';
        },
        onAbout() {
            this.nav = 'about';
        }
    },
    components: {
        WxApp,
        Case,
        WhyUs,
        Service,
        Report,
        About,
        Foot
    }
};
</script>
