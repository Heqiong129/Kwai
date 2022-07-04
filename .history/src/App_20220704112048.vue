<template>
  <div class="main">
    <router-view />
    <div class="navigationBar">
      <span>
        <router-link to="/">首页</router-link>
      </span>
      <span>
        <router-link to="/about">精选</router-link>
      </span>
      <span>
        <router-link to="/">消息</router-link>
      </span>
      <span>
        <router-link to="/about">我</router-link>
      </span>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
* {
  margin: 0;
}

.main {
  height: calc(100vh);
  background-color: rgb(28, 27, 31);
  padding-bottom: 50%;
  position: relative;
}
</style>
