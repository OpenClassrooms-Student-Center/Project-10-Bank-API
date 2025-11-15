const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const path = require('path')
const dbConnection = require('./database/connection')

// Charger les variables d'environnement
dotEnv.config()

// Charger Swagger avec chemin absolu
const swaggerDocs = yaml.load(path.join(__dirname, '../swagger.yaml'))

const app = express()
const PORT = process.env.PORT || 3001

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors({
  origin: [
    'http://localhost:5173',           // Dev local
    'https://argent-bank-brown.vercel.app'    
  ],
  credentials: true
}))

// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentation (disponible même en production pour tester)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Endpoint de base
app.get('/', (req, res) => {
  res.send('Hello from Argent Bank API! 🏦')
})

// Health check endpoint
app.get('/health', (req, res) => {
  const mongoose = require('mongoose')
  const isConnected = mongoose.connection.readyState === 1
  
  res.status(isConnected ? 200 : 503).json({
    status: isConnected ? 'OK' : 'ERROR',
    mongodb: isConnected ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})