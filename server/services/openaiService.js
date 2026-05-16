export async function askOpenAI(
  message,
  layout,
  history
) {
  const lower = message.toLowerCase()

  if (
    lower.includes('headline') &&
    lower.includes('top')
  ) {
    return {
      action: 'move',
      target: 'headline',
      position: 'top',
      explanation: 'Moved headline to top',
    }
  }

  if (
    lower.includes('center') &&
    lower.includes('product')
  ) {
    return {
      action: 'center',
      target: 'product',
      explanation: 'Centered product',
    }
  }

  if (
    lower.includes('smaller')
  ) {
    return {
      action: 'resize_text',
      target: 'headline',
      scale: 0.8,
      explanation: 'Reduced headline size',
    }
  }

  if (
    lower.includes('9:16')
  ) {
    return {
      action: 'convert_9_16',
      explanation: 'Converted layout to 9:16',
    }
  }

  return {
    action: 'none',
    explanation: 'No matching action found',
  }
}