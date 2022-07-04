<template>
    <div class="Featured">
        <video autoplay muted loop class="video">
            <source src="../imgs/Featured/Example.mp4">
        </video>
        <div></div>
        <div></div>
        <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <div></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.Featured {
    background-color: black;
}

.video {
    width: 100%;
    height: calc(94.6vh);
    z-index: -9999;
    /*灰色调*/
    /* -webkit-filter: grayscale(100%) */
}
</style>