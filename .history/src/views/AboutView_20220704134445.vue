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
          <p class="sign">粉丝</p>
        </div>
        <div class="follow">
          <p>9999w</p>
          <p class="sign">关注</p>
        </div>
        <div class="getPraise">
          <p>不可思议</p>
          <p class="sign">获赞</p>
        </div>
      </div>
      <div>我吊你马的</div>
      <div>快手号:66666666666</div>
      <div>这个人很懒没留下什么东西</div>
      <div>
        <el-tag>♂️ 男</el-tag>
        <el-tag class="ml-2" type="success">Tag 2</el-tag>
        <el-tag class="ml-2" type="info">Tag 3</el-tag>
        <el-tag class="ml-2" type="warning">Tag 4</el-tag>
        <el-tag class="ml-2" type="danger">Tag 5</el-tag>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>


<style scoped>
.flow {
  width: calc(34.19vh);
  height: calc(5.666vh);
  position: absolute;
  top: 16.5%;
  left: 18%;
}

.flow div {
  float: left;
  width: calc(11.39vh);
  text-align: center;
  color: rgb(228, 228, 228);

}

.flow div .sign {
  color: rgb(108, 107, 112);
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