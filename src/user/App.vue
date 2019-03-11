<template>
  <div id="user">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, #user {
  height: 100%;
}
</style>
