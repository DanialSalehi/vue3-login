<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">About</router-link>|
    <router-link to="/Protected">Protected</router-link>|
    <router-link to="/Notepad">Notepad</router-link>|
    <router-link to="/DoughnutChart">DoughnutChart</router-link>|
    <router-link to="/LineChart">LineChart</router-link>|
    <router-link to="/BarChart">BarChart</router-link>
  </div>
  <router-view />
  <vue-progress-bar></vue-progress-bar>
</template>
<script>
export default {
  async create() {
    await setTimeout(function() {
      this.$Progress.finish();
    }, 1000);
  },

  beforeCreated() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();

    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
