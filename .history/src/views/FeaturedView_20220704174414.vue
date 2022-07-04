<template>
    <div class="Featured">
        <video autoplay muted loop class="video">
            <source src="../imgs/Featured/Example.mp4">
        </video>
        <div></div>
        <div></div>
        <div class="rightButton">
            <div class="author">
                <el-avatar :size="55"
                    src="https://p2.a.yximgs.com/uhead/AB/2022/04/26/23/BMjAyMjA0MjYyMzUxMjNfNTM3ODM0MjM1XzFfaGQ4MzlfNTIw_s.jpg" />
            </div>
            <div class="giveTheThumbsUp">
                <el-icon :size="40">
                    <MostlyCloudy />
                </el-icon>
                <p>喜欢</p>
            </div>
            <div class="comment">
                <el-icon :size="40">
                    <ChatDotRound />
                </el-icon>
                <p>评论</p>
            </div>
            <div class="collection">
                <el-icon :size="40">
                    <Star />
                </el-icon>
                <p>收藏</p>
            </div>
            <div class="share">
                <el-icon :size="40">
                    <Share />
                </el-icon>
                <p>分享</p>
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
.record img {
    width: 35px;
}

/* 

.share {
    top: 80%;
    right: 37%;
}

.collection {
    top: 80%;
    right: 37%;
}

.comment {
    top: 80%;
    right: 37%;
}

.giveTheThumbsUp {
    top: 80%;
    right: 37%;
} */

.rightButton {
    position: absolute;
    right: 37%;
    top: 50%;
    font-size: 13px;
    text-align: center;
}

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