<template>
    <div class="">
        <ul>
            <li v-for="(item, index) in Data" :key="index"></li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const Data = [
    { name: "吊毛", content: "啊对对对" },
    { name: "牛马", content: "点赞" },
    { name: "AA", content: "鲜花*999" },
    { name: "傻狗", content: "我是恁爹" },
    { name: "。", content: "你在狗叫什么？" },
    { name: "无名", content: "?????????" },
]
</script>