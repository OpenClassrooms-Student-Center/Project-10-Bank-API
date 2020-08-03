<script>
export default {}
</script>

<template>
  <nav class="main-nav">
    <a class="main-nav-logo" href="/">
      <img
        class="main-nav-logo-image"
        src="../assets/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
      <h1 class="sr-only">Argent Bank</h1>
    </a>
    <div v-if="$route.path === '/user'">
      <a href="/sign-out">
        <i class="fa fa-user-circle"></i>
        Sign Out
      </a>
    </div>
    <div v-else>
      <a href="/sign-in">
        <i class="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
  </nav>
</template>

<style>
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
}

.main-nav a {
  font-weight: bold;
  color: #2c3e50;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}

.main-nav-logo {
  display: flex;
  align-items: center;
}

.main-nav-logo-image {
  max-width: 100%;
  width: 200px;
}
</style>
