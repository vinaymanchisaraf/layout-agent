import useLayoutStore from '../../store/useLayoutStore'

export default function ChatWindow() {
  const { messages } = useLayoutStore()

  return (
    <div className="p-5 space-y-5">

      {messages.length === 0 && (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-gray-400 text-sm leading-relaxed">
          Try prompts like:
          <ul className="mt-3 space-y-2 text-white">
            <li>• Move headline to top</li>
            <li>• Convert to 9:16</li>
            <li>• Center the product</li>
            <li>• Make headline smaller</li>
          </ul>
        </div>
      )}

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-[85%] px-5 py-4 rounded-3xl text-[15px] leading-relaxed shadow-lg ${
            msg.role === 'user'
              ? 'bg-cyan-500 ml-auto'
              : 'bg-white/10 backdrop-blur-xl border border-white/10'
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  )
}