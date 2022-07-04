<template>
    <div class="Featured">
        <video autoplay loop class="video">
            <source src="../imgs/Featured/Example.mp4">
        </video>
        <div></div>
        <div></div>
        <div class="rightButton">
            <div class="author">
                <el-avatar
                    src="https://p2.a.yximgs.com/uhead/AB/2022/04/26/23/BMjAyMjA0MjYyMzUxMjNfNTM3ODM0MjM1XzFfaGQ4MzlfNTIw_s.jpg" />
            </div>
            <div class="giveTheThumbsUp">
                <el-icon>
                    <MostlyCloudy />
                </el-icon>
                <p>喜欢</p>
            </div>
            <div class="comment">
                <el-icon>
                    <ChatDotRound />
                </el-icon>
                <p>评论</p>
            </div>
            <div class="collection">
                <el-icon>
                    <Star />
                </el-icon>
                <p>收藏</p>
            </div>
            <div class="share">
                <el-icon>
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
.song .el-icon {
    font-size: 0.8rem;
}

.el-avatar--circle {
    --el-avatar-size: 3rem;
}

.el-icon {
    font-size: 2rem;
}

.authorSName {
    font-size: 1rem;
    height: calc(4vh);
}

.describe {
    font-size: 0.8rem;
    height: calc(3.5vh);
}

.time {
    font-size: 0.6rem;
    color: rgb(179, 168, 166);
    height: calc(2.5vh);
}

.song {
    font-size: 0.7rem;
}

.copywriting ul {
    list-style-type: none;
}

.copywriting {
    position: absolute;
    top: 82%;
    left: -10%;
}

.record img {
    width: calc(6vh);
}

.rightButton {
    position: absolute;
    left: calc(38vh);
    top: calc(38vh);
    font-size: 0.7rem;
    text-align: center;
}

.rightButton div {
    height: calc(10vh);
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