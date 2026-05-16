import express from 'express'
import { askOpenAI } from '../services/openaiService.js'
import { executeTransformation } from '../services/transformEngine.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { message, layout, history } = req.body

    const aiResponse = await askOpenAI(
      message,
      layout,
      history
    )

    console.log('AI RESPONSE:', aiResponse)

    const updatedLayout =
      executeTransformation(layout, aiResponse)

    res.json({
      explanation:
        aiResponse.explanation ||
        'Layout updated',

      updatedLayout,
    })

  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Something went wrong',
    })
  }
})

export default router