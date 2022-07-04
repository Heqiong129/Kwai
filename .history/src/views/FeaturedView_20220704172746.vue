<template>
    <div class="Featured">
        <video autoplay muted loop class="video">
            <source src="../imgs/Featured/Example.mp4">
        </video>
        <div></div>
        <div></div>
        <div class="rightButton">
            <div>
                <el-avatar size="45"
                    src="https://p2.a.yximgs.com/uhead/AB/2022/04/26/23/BMjAyMjA0MjYyMzUxMjNfNTM3ODM0MjM1XzFfaGQ4MzlfNTIw_s.jpg" />
            </div>
            <div></div>
            <div>
                <el-icon>
                    <ChatDotRound />
                </el-icon>
            </div>
            <div>
                <el-icon>
                    <Star />
                </el-icon>
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.rightButton {
    right: 37%;
    top: 80%;
}

.Featured {
    background-color: black;
}

.Featured div {
    position: absolute;
}

.video {
    width: 100%;
    height: calc(94.6vh);
    z-index: -9999;
    /*灰色调*/
    /* -webkit-filter: grayscale(100%) */
}
</style>