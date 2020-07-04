const User = require('../database/models/userModel')
const bcrypt = require('bcrypt')

module.exports.createUser = async serviceData => {
  try {
    const user = await User.findOne({ email: serviceData.email })
    if (user) {
      throw new Error('Email already exists')
    }

    const hashPassword = await bcrypt.hash(serviceData.password, 12)

    const newUser = new User({
      email: serviceData.email,
      password: hashPassword
    })

    let result = await newUser.save()

    return result.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
