<template>
  <div id="Intro">
    <h2>{{ msg }}</h2>
    <a href="#page=board">게시판 이동</a>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data: function () {
    return {
      msg : 'Intro Page'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
