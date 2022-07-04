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
      <div class="name">
        我吊你马的
      </div>
      <div class="id">
        快手号:66666666666
      </div>
      <div class="autograph">
        这个人很懒没留下什么东西
      </div>
      <div class="label">
        <el-tag color="rgb(42,41,46)" hit="">♂️ 男</el-tag>
        &nbsp;
        <el-tag color="rgb(42,41,46)" hit="" class="ml-2" type="success">日本 我孙子市</el-tag>
      </div>
    </div>
    <div class="advertisement">
      <span>
        <el-icon>
          <Avatar />
        </el-icon>我的群聊
      </span>
      <span>
        <el-icon>
          <ShoppingCart />
        </el-icon>快手小店
      </span>
    </div>
    <div class="labelGroup">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>

    </div>

  </div>
</template>


<style scoped>
.labelGroup {}

.advertisement {
  position: absolute;
  top: 40%;
  left: 1.8%;
}

.autograph {
  font-size: 14px;
  color: rgb(229, 229, 229);
  height: calc(3vh);
}

.id {
  font-size: 11px;
  color: rgb(130, 130, 130);
  height: calc(2.5vh);
}

.name {
  font-size: 24px;
  height: calc(4.5vh);
}

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
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}