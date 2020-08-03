<script>
export default {}
</script>

<template>
  <nav class="main-nav">
    <a href="/"><h1>Argent Bank</h1></a>
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
  background-color: #ccc;
}

.main-nav a {
  font-weight: bold;
  color: #2c3e50;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}
</style>
