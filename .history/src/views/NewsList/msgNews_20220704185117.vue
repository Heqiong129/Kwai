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
]
</script>