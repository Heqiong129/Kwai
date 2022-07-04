<template>
  <div class="about">
    <div class="head">
      <img class="headPicture" src="../imgs/About/H.jpg" alt="头图">
    </div>
    <div class="personalData">
      <el-avatar :size="75" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <div class="flow">
        <div class="fans">
          <p>2356w</p>
          <p>粉丝</p>
        </div>
        <div class="follow">
          <p>9999w</p>
          <p>关注</p>
        </div>
        <div class="getPraise">
          <p>不可思议</p>
          <p>获赞</p>
        </div>
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
  width: calc(34.3332vh);
  height: calc(5.666vh);
  background-color: rgb(182, 27, 27);
  position: absolute;
  top: 17%;
  left: 18%;
}

.flow div {
  float: left;
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