<script>
export default {
  data() {
    return {
      features: [
        {
          icon: require('../assets/icon-chat.png'),
          title: 'You are our #1 priority',
          description:
            'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
        },
        {
          icon: require('../assets/icon-money.png'),
          title: 'More savings means higher rates',
          description:
            'The more you save with us, the higher your interest rate will be!'
        },
        {
          icon: require('../assets/icon-security.png'),
          title: 'Security you can trust',
          description:
            'We use top of the line encryption to make sure your data and money is always safe.'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="main">
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
        <h2 class="sr-only">Features</h2>
        <div
          v-for="(feature, index) in features"
          :key="`feature-${index}`"
          class="feature-item"
        >
          <img class="feature-icon" :src="feature.icon" alt="Chat Icon" />
          <h3 class="feature-item-title">{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.hero {
  background-image: url('../assets/bank-tree.jpeg');
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
}

.hero-content {
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
}

.hero-content .subtitle {
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
}

.hero-content .text {
  margin-bottom: 0;
  font-size: 0.9rem;
}

@media (min-width: 920px) {
  .hero {
    height: 400px;
    background-position: 0% 33%;
  }

  .hero-content {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }

  .hero-content .subtitle {
    font-size: 1.5rem;
  }

  .hero-content .text {
    font-size: 1.2rem;
  }
}

.features {
  display: flex;
  flex-direction: column;
}

@media (min-width: 920px) {
  .features {
    flex-direction: row;
  }
}

.feature-icon {
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
}

.feature-item {
  flex: 1;
  padding: 2.5rem;
}

.feature-item-title {
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
