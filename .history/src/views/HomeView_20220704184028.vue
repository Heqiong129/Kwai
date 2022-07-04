<template>
  <div class="home">
    <div class="labelGroup">
      <router-link to="/home/friend">朋友</router-link>
      <router-link to="/home/follow">关注</router-link>
      <router-link to="/home/find">发现</router-link>
      <router-link to="/home/sameCity">同城</router-link>
      <router-link to="/home/projectionHall">放映厅</router-link>
      <router-link to="/home/jobHunting">找工作</router-link>
      <router-link to="/home/longVideo">长视频</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
.labelGroup {
  height: ;
}

.router-link-active {
  color: rgb(253, 253, 253);
  border-bottom: 1px solid rgb(255, 255, 255);
  padding-bottom: 3px
}

a {
  margin: 2%;
  color: rgb(178, 178, 178);
  text-decoration: none;
}
</style>