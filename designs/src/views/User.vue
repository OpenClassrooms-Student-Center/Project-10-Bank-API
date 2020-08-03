<script>
export default {
  name: 'User',
  data() {
    return {
      accounts: [
        {
          title: 'Argent Bank Checking (x8349)',
          amount: '$2,082.79',
          amountDescription: 'Available Balance'
        },
        {
          title: 'Argent Bank Savings (x6712)',
          amount: '$10,928.42',
          amountDescription: 'Available Balance'
        },
        {
          title: 'Argent Bank Credit Card (x8349)',
          amount: '$184.30',
          amountDescription: 'Current Balance'
        }
      ]
    }
  }
}
</script>

<template>
  <main class="main bg-dark">
    <div class="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button class="edit-button">Edit Name</button>
    </div>
    <h2 class="sr-only">Accounts</h2>
    <section
      v-for="(account, index) in accounts"
      :key="`account-${index}`"
      class="account"
    >
      <div class="account-content-wrapper">
        <h3 class="account-title">{{ account.title }}</h3>
        <p class="account-amount">{{ account.amount }}</p>
        <p class="account-amount-description">
          {{ account.amountDescription }}
        </p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  </main>
</template>

<style>
.account {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
}

.account-amount {
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
}

.account-amount-description {
  margin: 0;
}

.account-title {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
}

.account-content-wrapper {
  width: 100%;
  flex: 1;
}

.edit-button {
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
}

.header {
  color: #fff;
  margin-bottom: 2rem;
}

.transaction-button {
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

@media (min-width: 720px) {
  .account {
    flex-direction: row;
  }

  .account-content-wrapper.cta {
    flex: 0;
  }

  .transaction-button {
    width: 200px;
  }
}
</style>
