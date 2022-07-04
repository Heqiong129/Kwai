<template>
    <div class="News">
        <div class="labelGroup">
            <router-link to="/news/msg">消息</router-link>
            <router-link to="/news/privateLetter">私信</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
</script>


<style scoped>
.News {
    margin: auto;
    width: calc(20vh);
}

.labelGroup {
    height: calc(3vh);
    padding-top: 10px;
}

.router-link-active {
    color: rgb(253, 253, 253);
    border-bottom: 1px solid rgb(255, 255, 255);
    padding-bottom: 3px
}

a {
    margin: 30%;
    color: rgb(178, 178, 178);
    text-decoration: none;
}
</style>