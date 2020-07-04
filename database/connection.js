const mongoose = require('mongoose')

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
