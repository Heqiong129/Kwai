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

}

.navigationBar {
  position: absolute;
  top: 95.45%;
  height: calc(4.58vh);
  width: calc(45vh);
  border-bottom: 1px top red;
}

.navigationBar span {
  color: rgb(178, 178, 178);
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
