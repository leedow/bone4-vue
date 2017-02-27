/**
 * 查询设备dpr
 * 设置正确的缩放尺寸
 * 需配合媒体查询引用对应的CSS
 */

/* eslint-disable */
module.exports = {
  initScale() {
    const meta = window.document.querySelector('meta[name="viewport"]')
    let scale = 1.0
    let ratio = 1
    if (window.devicePixelRatio >= 2) {
      scale *= 0.5
      ratio *= 2
    }
    meta.setAttribute('content', `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`)
    document.documentElement.style.fontSize = `${14 * ratio}px`
    try {
      window.r = ratio
    } catch (e) {
      console.warm('Missing window')
    }
  },
  dpr() {
    return window.devicePixelRatio
  }
}
/* eslint-enable */
