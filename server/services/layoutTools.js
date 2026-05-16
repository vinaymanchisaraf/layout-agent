function matchesTarget(node, target) {
  const content =
    node?.data?.content?.toLowerCase() || ''

  const name =
    node?.name?.toLowerCase() || ''

  const lowerTarget =
    target?.toLowerCase() || ''

  if (lowerTarget === 'headline') {
    return (
      content.includes('comfort') ||
      content.includes('modern living') ||
      name.includes('headline')
    )
  }

  if (lowerTarget === 'product') {
    return (
      name.includes('product') ||
      name.includes('sofa') ||
      content.includes('sofa')
    )
  }

  return (
    content.includes(lowerTarget) ||
    name.includes(lowerTarget)
  )
}

export function resizeArtboard(
  layout,
  width,
  height
) {
  const updated = structuredClone(layout)

  const rootId = updated.rootNodes[0]
  const artboard = updated.nodes[rootId]

  artboard.width = width
  artboard.height = height

  artboard.children.forEach((id) => {
    const node = updated.nodes[id]

    if (!node) return

    node.x = node.nx * width
    node.y = node.ny * height
    node.width = node.nw * width
    node.height = node.nh * height
  })

  return updated
}

export function moveNode(
  layout,
  target,
  position
) {
  const updated = structuredClone(layout)

  const rootId = updated.rootNodes[0]
  const artboard = updated.nodes[rootId]

  const nodeId =
    artboard.children.find((id) => {
      const node = updated.nodes[id]

      return matchesTarget(
        node,
        target
      )
    })

  if (!nodeId) {
    return updated
  }

  const node = updated.nodes[nodeId]

  switch (position) {

    case 'top':
      node.y = 60
      break

    case 'bottom':
      node.y =
        artboard.height -
        node.height -
        60
      break

    case 'left':
      node.x = 40
      break

    case 'right':
      node.x =
        artboard.width -
        node.width -
        40
      break

    case 'center':
      node.x =
        (artboard.width -
          node.width) /
        2

      node.y =
        (artboard.height -
          node.height) /
        2

      break

    default:
      break
  }

  node.nx =
    node.x / artboard.width

  node.ny =
    node.y / artboard.height

  return updated
}

export function resizeText(
  layout,
  target,
  scale
) {
  const updated = structuredClone(layout)

  Object.values(updated.nodes).forEach(
    (node) => {
      if (node.type !== 'text') return

      if (
        matchesTarget(node, target)
      ) {
        const currentSize =
          node.style?.visual
            ?.fontSize || 40

        node.style.visual.fontSize =
          currentSize * scale
      }
    }
  )

  return updated
}

export function resizeNode(
  layout,
  target,
  scale
) {
  const updated = structuredClone(layout)

  const rootId =
    updated.rootNodes[0]

  const artboard =
    updated.nodes[rootId]

  Object.values(updated.nodes).forEach(
    (node) => {
      if (
        matchesTarget(node, target)
      ) {
        node.width *= scale
        node.height *= scale

        node.nw =
          node.width /
          artboard.width

        node.nh =
          node.height /
          artboard.height
      }
    }
  )

  return updated
}

export function changeTextColor(
  layout,
  target,
  color
) {
  const updated = structuredClone(layout)

  Object.values(updated.nodes).forEach(
    (node) => {
      if (node.type !== 'text')
        return

      if (
        matchesTarget(node, target)
      ) {
        node.style.visual.color.value =
          color
      }
    }
  )

  return updated
}

export function centerNode(
  layout,
  target
) {
  const updated = structuredClone(layout)

  const rootId =
    updated.rootNodes[0]

  const artboard =
    updated.nodes[rootId]

  Object.values(updated.nodes).forEach(
    (node) => {
      if (
        matchesTarget(node, target)
      ) {
        node.x =
          (artboard.width -
            node.width) /
          2

        node.y =
          (artboard.height -
            node.height) /
          2

        node.nx =
          node.x /
          artboard.width

        node.ny =
          node.y /
          artboard.height
      }
    }
  )

  return updated
}