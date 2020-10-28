<template>
  <div>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background: aliceblue;
}

* {
  box-sizing: border-box;
  margin: 0;
}
</style>
