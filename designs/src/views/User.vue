<script>
export default {
  name: 'User',
  data() {
    return {
      accounts: [
        {
          title: 'Argent Bank Checking (x8349)',
          amount: 2082.79,
          amountDescription: 'Available Balance'
        },
        {
          title: 'Argent Bank Checking (x8349)',
          amount: 2082.79,
          amountDescription: 'Available Balance'
        },
        {
          title: 'Argent Bank Checking (x8349)',
          amount: 2082.79,
          amountDescription: 'Available Balance'
        }
      ]
    }
  }
}
</script>

<template>
  <main>
    <h1>Welcome back Tony Jarvis!</h1>
    <button>Edit Name</button>
    <h2>Accounts</h2>
    <section v-for="(account, index) in accounts" :key="`account-${index}`">
      <div>
        <h3>{{ account.title }}</h3>
        <p>{{ account.amount }}</p>
        <p>{{ account.amountDescription }}</p>
      </div>
      <div>
        <button>View transactions</button>
      </div>
    </section>
  </main>
</template>

<style></style>
