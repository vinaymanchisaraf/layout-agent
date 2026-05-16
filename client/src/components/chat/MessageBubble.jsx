export default function MessageBubble({ message }) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`
          max-w-xs p-3 rounded-2xl text-sm
          ${isUser ? 'bg-cyan-500' : 'bg-slate-800'}
        `}
      >
        {message.content}
      </div>
    </div>
  )
}