<template>
  <span>{{ msg }}</span>
</template>

<script>
export default {
  async beforeCreate() {
    //let u = 'no';
    this.$store.state.stt = this.$route.fullPath;
    this.$route.fullPath;
    let user = await this.axios
      .get('http://localhost:3000/users')
      .then(response => {
        return response.data;
      });
    console.log(this.$store.state.jwt);
    for (let i = 0; i < user.length; i++) {
      if (user[i].jwt === this.$store.state.jwt) {
        this.msg = `Hello ${user[i].username}`;
        //this.username = u;
        return;
      }
    }

    this.$router.push('/about');
  },
  data() {
    return {
      username: '',
      password: '',
      msg: 'please Login'
    };
  }
};
</script>

<style></style>
