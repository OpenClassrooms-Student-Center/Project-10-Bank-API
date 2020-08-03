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
  <main class="main bg-dark">
    <section class="sign-in-content">
      <i class="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div class="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div class="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        <button class="sign-in-button" @click.prevent="signIn">Sign In</button>
      </form>
    </section>
  </main>
</template>

<style>
.sign-in-button {
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
}

.sign-in-content {
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
}

.sign-in-icon {
  font-size: 5rem;
}

.input-remember {
  display: flex;
}

.input-remember label {
  margin-left: 0.25rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
}

.input-wrapper label {
  font-weight: bold;
}

.input-wrapper input {
  padding: 5px;
  font-size: 1.2rem;
}
</style>
