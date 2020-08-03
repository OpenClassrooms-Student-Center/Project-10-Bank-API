<script>
export default {
  methods: {
    signIn() {
      this.$router.push('/user')
    }
  }
}
</script>

<template>
  <main>
    <h1>Sign In</h1>
    <form>
      <label for="username">Username</label>
      <input type="text" id="username" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <input type="checkbox" id="remember-me" />
      <label for="remember-me">Remember me</label>
      <button @click.prevent="signIn">Sign In</button>
    </form>
  </main>
</template>

<style></style>
