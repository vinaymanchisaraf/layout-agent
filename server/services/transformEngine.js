import {
  moveNode,
  resizeArtboard,
  resizeText,
  resizeNode,
  centerNode,
  changeTextColor,
} from './layoutTools.js'

export function executeTransformation(
  layout,
  actionObject
) {
  const { action, target } = actionObject

  switch (action) {

    case 'convert_9_16':
      return resizeArtboard(
        layout,
        1080,
        1920
      )

    case 'move':
      return moveNode(
        layout,
        target,
        actionObject.position
      )

    case 'resize_text':
      return resizeText(
        layout,
        target,
        actionObject.scale
      )

    case 'resize_node':
      return resizeNode(
        layout,
        target,
        actionObject.scale
      )

    case 'center':
      return centerNode(
        layout,
        target
      )

    case 'change_text_color':
      return changeTextColor(
        layout,
        target,
        actionObject.color
      )

    default:
      return layout
  }
}