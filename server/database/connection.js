const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
  } catch (error) {
    throw new Error(error)
  }
}
