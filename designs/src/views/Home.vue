<template>
  <div class="home">
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2>Features</h2>
        <div>
          <h3>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div>
          <h3>More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div>
          <h3>Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.hero {
  background-image: url('../assets/bank-tree.jpeg');
  background-position: 0% 33%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  position: relative;
}

.hero-content {
  position: absolute;
  right: 50px;
  top: 50px;
  width: 300px;
  background: white;
  margin: 2rem;
  padding: 2rem;
  text-align: left;
}

.hero-content .subtitle {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}

.hero-content .text {
  margin-bottom: 0;
  font-size: 1.2rem;
}
</style>
