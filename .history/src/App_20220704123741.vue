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
      <span class="icon">
        <el-icon :size="26.2">
          <CirclePlus />
        </el-icon>
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
  top: 95.3%;
  height: calc(4.58vh);
  width: calc(45vh);
  border-style: solid;
  border-width: 1px 0 0 0;
  border-color: rgb(43, 42, 47);
}

.navigationBar span {
  color: rgb(178, 178, 178);
  display: inline-block;
  width: calc(9.6246vh);
  text-align: center;
  height: auto
}

.navigationBar .icon {
  color: rgb(253, 253, 253);
  width: calc(6.498vh);
}

.navigationBar a {
  color: rgb(178, 178, 178);
  text-decoration: none;
  margin: auto;
}
</style>

<style>
* {
  margin: 0;
}
</style>
