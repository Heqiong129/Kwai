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
        <div class="copywriting">
            <ul>
                <li class="authorSName">@一般蕊哥</li>
                <li class="describe">是你的理想女友吗 #身材</li>
                <li class="time">2022-5-14 20:30 · 四川</li>
                <li class="song">
                    <el-icon>
                        <Service />
                    </el-icon>
                    荷塘月色(DJ版) - 大辉哥 / 陈瑞泽
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.authorSName {
    font-size: 20px;
    height: 28px;
}

.describe {
    font-size: 14px;
    height: 27px;
}

.time {
    font-size: 12px;
    color: rgb(179, 168, 166);
    height: 15px;
}

.song {
    font-size: 14px;
}

.copywriting ul {
    list-style-type: none;
}

.copywriting {
    position: absolute;
    top: 85%;
    left: calc(1vh);
}

.record img {
    width: 55px;
}

.rightButton {
    position: absolute;
    left: calc(38vh);
    top: 50%;
    font-size: 13px;
    text-align: center;
}

.rightButton div {
    height: 68px;
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