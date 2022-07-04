<template>
  <div class="about">
    <div class="head">
      <img class="headPicture" src="../imgs/About/H.jpg" alt="头图">
    </div>
    <div class="personalData">
      <div>
        <el-avatar src="../imgs/About/1.jpg" />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>


<style scoped>
.head {
  float: left;
}

.headPicture {
  width: calc(45vh);
  height: calc(20.625vh);
}

.headPortrait {
  height: calc(8.33vh);
}

.demo-type {
  display: flex;
}

.demo-type>div {
  flex: 1;
  text-align: center;
}

.demo-type>div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>