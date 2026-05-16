import ChatWindow from './components/chat/ChatWindow'
import ChatInput from './components/chat/ChatInput'
import WireframePreview from './components/preview/WireframePreview'

export default function App() {
  return (
    <div className="h-screen bg-linear-to-br from-[#020617] via-[#081028] to-[#020617] text-white overflow-hidden">

      <div className="flex h-full">

        {/* SIDEBAR */}
        <div className="w-85 border-r border-white/10 backdrop-blur-xl bg-white/5 flex flex-col">

          {/* HEADER */}
          <div className="p-8 border-b border-white/10">

            <h1 className="text-5xl font-black tracking-tight bg-linear-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Layout
            </h1>

            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Transform layouts intelligently using AI-powered semantic editing.
            </p>
          </div>

          {/* CHAT */}
          <div className="flex-1 overflow-y-auto">
            <ChatWindow />
          </div>

          {/* INPUT */}
          <div className="p-5 border-t border-white/10">
            <ChatInput />
          </div>
        </div>

        {/* MAIN PREVIEW */}
        <div className="flex-1 flex flex-col">

          {/* TOP BAR */}
          <div className="px-10 py-7 border-b border-white/10 backdrop-blur-xl bg-white/5 flex items-center justify-between">

            <div>
              <h2 className="text-4xl font-black">
                Live Preview
              </h2>

              <p className="text-gray-400 mt-1">
                Real-time AI layout transformation canvas
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold">
                Export
              </button>

              <button className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition font-semibold">
                History
              </button>
            </div>
          </div>

          {/* PREVIEW AREA */}
          <div className="flex-1 flex items-center justify-center p-12 overflow-hidden">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-12 shadow-2xl">

              <WireframePreview />

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}