import { toPng } from 'html-to-image'

export async function downloadStoryImage() {
  const node = document.getElementById('story')
  if (!node) return;

  const scale = 3 // Increase this for better quality (e.g. 2x, 3x)

  const style = {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${node.offsetWidth}px`,
    height: `${node.offsetHeight}px`,
  }

  const param = {
    width: node.offsetWidth * scale,
    height: node.offsetHeight * scale,
    style,
  }

  const dataUrl = await toPng(node, param)
  const link = document.createElement('a')
  link.download = 'live-report.png'
  link.href = dataUrl
  link.click()
}

