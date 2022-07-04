<template>
    <div class="Featured">
        <video autoplay muted loop class="video">
            <source src="../imgs/Featured/Example.mp4">
        </video>
    </div>
</template>

<script setup>

</script>

<style scoped>
.video {
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -9999;
    /*灰色调*/
    /*-webkit-filter:grayscale(100%)*/
}
</style>