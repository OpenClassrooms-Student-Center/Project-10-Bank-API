const User = require('../database/models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

module.exports.loginUser = async serviceData => {
  try {
    const user = await User.findOne({ email: serviceData.email })

    if (!user) {
      throw new Error('User not found!')
    }

    console.log(serviceData)
    console.log(user.password)

    const isValid = await bcrypt.compare(serviceData.password, user.password)

    if (!isValid) {
      throw new Error('Password is invalid')
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    )

    return { token }
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
