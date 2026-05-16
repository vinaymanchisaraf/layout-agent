import { useState } from 'react'
import useChat from '../../hooks/useChat'

export default function ChatInput() {
  const [text, setText] = useState('')

  const { sendMessage } = useChat()

  const handleSend = async () => {
    if (!text.trim()) return

    await sendMessage(text)

    setText('')
  }

  return (
    <div className="flex gap-3">

      <input
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }

        placeholder="Ask AI to modify layout..."

        className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500"
      />

      <button
        onClick={handleSend}
        className="px-6 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-bold"
      >
        Send
      </button>
    </div>
  )
}