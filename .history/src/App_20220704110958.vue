<template>
  <div>
    <!-- <router-link to="/">首页</router-link> |
    <router-link to="/about">我</router-link> -->
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>

<style>
</style>
