<template>
  <div>
    <router-view />
    <div>
      <router-link to="/">首页</router-link>
    </div>
    <div>
      <router-link to="/about">精选</router-link>
    </div>
    <div>
      <router-link to="/">消息</router-link>
    </div>
    <div>
      <router-link to="/about">我</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (TabsPaneContext, Event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
