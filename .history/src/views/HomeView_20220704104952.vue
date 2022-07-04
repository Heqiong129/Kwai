<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="wc" />

    <Space direction="vertical">
      <Space wrap>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
      </Space>
      <Space wrap>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
      </Space>
    </Space>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


</script>
