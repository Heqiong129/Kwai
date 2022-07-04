<template>
    <div class="Featured">
        <video autoplay muted loop class="video">
            <source src="../imgs/Featured/Example.mp4">
        </video>
        <div></div>
        <div></div>
        <div class="rightButton">
            <div class="author">
                <el-avatar size="45"
                    src="https://p2.a.yximgs.com/uhead/AB/2022/04/26/23/BMjAyMjA0MjYyMzUxMjNfNTM3ODM0MjM1XzFfaGQ4MzlfNTIw_s.jpg" />
            </div>
            <div class="点赞">
                <el-icon size="65">
                    <MostlyCloudy />
                </el-icon>
            </div>
            <div class="评论">
                <el-icon size="65">
                    <ChatDotRound />
                </el-icon>
            </div>
            <div class="collection">
                <el-icon size="65">
                    <Star />
                </el-icon>
            </div>
            <div class="share">
                <el-icon size="65">
                    <Share />
                </el-icon>
            </div>
            <div class="record">
                <img src="../imgs/Featured/2.png" alt="">
            </div>
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