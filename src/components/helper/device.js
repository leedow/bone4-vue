/**
 * 查询设备dpr
 * 设置正确的缩放尺寸
 * 需配合媒体查询引用对应的CSS
 */
module.exports = {
  initScale: function (){
    var meta = window.document.querySelector('meta[name="viewport"]')
    var scale = 1.0;
    var ratio = 1;
    if (window.devicePixelRatio >= 2) {
        scale *= 0.5;
        ratio *= 2;
    }
    meta.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    document.documentElement.style.fontSize = 14*ratio + "px";
    try{
        window.r = ratio
    } catch(e){
      console.warm('Missing window')
    }
  },
  dpr: function(){
    return window.devicePixelRatio
  }
}