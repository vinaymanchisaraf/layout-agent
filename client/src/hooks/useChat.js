import api from '../services/api'
import useLayoutStore from '../store/useLayoutStore'

export default function useChat() {
  const {
    layout,
    messages,
    addMessage,
    setLayout,
    setLoading,
  } = useLayoutStore()

  const sendMessage = async (text) => {
    if (!text.trim()) return

    addMessage({
      role: 'user',
      content: text,
    })

    setLoading(true)

    try {
      const response = await api.post('/chat', {
        message: text,
        layout,
        history: messages,
      })

      setLayout(response.data.updatedLayout)

      addMessage({
        role: 'assistant',
        content:
          response.data.explanation ||
          'Layout updated successfully',
      })
    } catch (error) {
      console.error(error)

      addMessage({
        role: 'assistant',
        content: 'Something went wrong',
      })
    }

    setLoading(false)
  }

  return {
    sendMessage,
  }
}