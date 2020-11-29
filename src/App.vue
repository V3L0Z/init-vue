<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";
export default {
  name: 'App',
  components: {
    Calculator
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
}
</style>
