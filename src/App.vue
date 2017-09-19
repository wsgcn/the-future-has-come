<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app'
};
</script>

<style lang="less" type="text/less">
@import url('./assets/less/global.less');
#app {
    //font-family: Arial,'Avenir', Helvetica, sans-serif;
    font-family: 'Courier New', Monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:#33485D;
    background-color: #EFF3F5;
    height: 100%;
    width: 100%;
}
</style>
