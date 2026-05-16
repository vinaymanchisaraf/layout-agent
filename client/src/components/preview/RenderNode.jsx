export default function RenderNode({
  node,
  artboard,
}) {
  if (!node) return null

  const PREVIEW_WIDTH = 520

  const scale =
    PREVIEW_WIDTH / artboard.width

  const style = {
    position: 'absolute',

    left: node.x * scale,
    top: node.y * scale,

    width: node.width * scale,
    height: node.height * scale,
  }

  // IMAGE
  if (node.type === 'image') {
    return (
      <img
        src={node.data?.sourceUrl}
        alt=""
        style={{
          ...style,

          objectFit:
            node.data?.fit || 'contain',

          borderRadius:
            node.style?.visual
              ?.borderRadius || 0,
        }}
      />
    )
  }

  // TEXT
  if (node.type === 'text') {
    return (
      <div
        style={{
          ...style,

          color:
            node.style?.visual?.color
              ?.value || '#000',

          fontSize:
            (node.style?.visual
              ?.fontSize || 40) *
            scale,

          fontWeight:
            node.style?.visual
              ?.fontWeight || 700,

          lineHeight: 1.2,

          whiteSpace: 'pre-wrap',

          overflow: 'hidden',
        }}
      >
        {node.data?.content}
      </div>
    )
  }

  // SHAPE
  return (
    <div
      style={{
        ...style,

        background:
          node.style?.visual?.fill
            ?.value || '#3b82f6',

        borderRadius:
          node.style?.visual
            ?.borderRadius || 0,
      }}
    />
  )
}