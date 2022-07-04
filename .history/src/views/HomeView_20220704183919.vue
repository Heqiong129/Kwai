<template>
  <div class="home">
    <router-link to="/home/friend">朋友</router-link>
    <router-link to="/home/follow">关注</router-link>
    <router-link to="/home/find">发现</router-link>
    <router-link to="/home/sameCity">同城</router-link>
    <router-link to="/home/projectionHall">放映厅</router-link>
    <router-link to="/home/jobHunting">找工作</router-link>
    <router-link to="/home/longVideo">长视频</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
  color: rgb(253, 253, 253);
  border-bottom: 1px solid black;
  padding-bottom: 10px
}

a {
  margin: 2%;
  color: rgb(178, 178, 178);
  text-decoration: none;
}
</style>