<template>
    <div class="News">
        <el-tabs stretch="false" v-model="activeName" class="demo-tabs">
            <el-tab-pane label="消息" name="first"></el-tab-pane>
            <el-tab-pane label="私信" name="second"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
</script>


<style scoped>
.News {
    margin: auto;
    width: calc(20vh);
}

.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>