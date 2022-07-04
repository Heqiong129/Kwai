<template>
  <div class="about">
    <div class="head">
      <img class="headPicture" src="../imgs/About/H.jpg" alt="头图">
    </div>
    <div class="personalData">
      <el-avatar :size="75" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <div class="flow">
        <div class="fans"><span>2356w</span><span>粉丝</span></div>
        <div class="follow"><span>9999w</span><span>关注</span></div>
        <div class="getPraise"><span>不可思议</span><span>获赞</span></div>
      </div>
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
.flow {
  float: right:;
  ;
}

.headPicture {
  width: calc(45vh);
  height: calc(20.625vh);
}

.personalData {
  position: absolute;
  top: 17%;
  width: calc(41.666vh);
  height: calc(21.875vh);
  margin-left: calc(3.334vh);
}
</style>