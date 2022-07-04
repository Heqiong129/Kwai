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


<style scoped>
.main {
  height: calc(100vh);
  width: calc(45vh);
  background-color: rgb(28, 27, 31);
}

.navigationBar {
  position: absolute;
  top: 95%;
  color: rgb(178, 178, 178);
}

.navigationBar {
  position: absolute;
  top: 95%;
  color: rgb(178, 178, 178);
  height: calc(0.458vh);
  ;
}

.navigationBar span {
  background-color: aqua;
}

.navigationBar a {
  color: rgb(178, 178, 178);
  text-decoration: none
}
</style>

<style>
* {
  margin: 0;
}
</style>
