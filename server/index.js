import dotenv from 'dotenv'
dotenv.config()

console.log('API KEY:', process.env.OPENAI_API_KEY)

import express from 'express'
import cors from 'cors'
import chatRoute from './routes/chat.js'

const app = express()

app.use(cors())

app.use(express.json({ limit: '10mb' }))

app.use('/api/chat', chatRoute)

app.get('/', (req, res) => {
  res.send('AI Layout Agent Server Running')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})