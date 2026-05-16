import useLayoutStore from '../../store/useLayoutStore'
import RenderNode from './RenderNode'

export default function WireframePreview() {
  const { layout } = useLayoutStore()

  if (!layout) return null

  const rootId = layout.rootNodes[0]

  const artboard =
    layout.nodes[rootId]

  const PREVIEW_WIDTH = 520

  const scale =
    PREVIEW_WIDTH / artboard.width

  return (
    <div
      className="relative bg-white overflow-hidden rounded-4xl shadow-2xl"
      style={{
        width: PREVIEW_WIDTH,

        height:
          artboard.height * scale,
      }}
    >
      {artboard.children?.map((id) => {
        const node = layout.nodes[id]

        if (!node) return null

        return (
          <RenderNode
            key={id}
            node={node}
            artboard={artboard}
          />
        )
      })}
    </div>
  )
}