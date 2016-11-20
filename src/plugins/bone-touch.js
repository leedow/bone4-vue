/**
 * @params eventType swipeDown|swipeUp
 */
var touch = function(dom, callback){
  alert('fsdsd')
  this.distanceX = 0
  this.distanceY = 0
  this.startPos = [0,0]
  this.currentPos = [0,0]
  this.endPos = [0,0]
  this.state = 'FREE' //START|MOVING|END|FREE
  this.dom = dom
  this.callback = callback
  var _this = this

  this.handleTouchStart = function(e){
    console.log('start')
    this.state = 'START'
    var touch = e.targetTouches[0]
    this.startPos = [touch.pageX, touch.pageY]
    this.callback('touchstart', {
      distance: [this.distanceX, this.distanceY],
      startPos: this.startPos
      state: this.state
    })
  }

  this.handleTouchMove = function(e){
    this.state = 'MOVING'
    var touch = e.targetTouches[0]
    this.currentPos = [touch.pageX, touch.pageY]
    this.distanceX = this.currentPos[0] - this.startPos[0]
    this.distanceY = this.currentPos[1] - this.startPos[1]
    this.callback('touchmove', {
      distance: [this.distanceX, this.distanceY],
      currentPos: this.currentPos
      state: this.state
    })
  }

  this.handleTouchEnd = function(e){
    this.state = 'END'
    var touch = e.targetTouches[0]
    this.endPos = [touch.pageX, touch.pageY]
    this.distanceX = this.endPos[0] - this.startPos[0]
    this.distanceY = this.endPos[1] - this.startPos[1]
    this.callback('touchend', {
      distance: [this.distanceX, this.distanceY],
      currentPos: this.currentPos
      state: this.state
    })
    this.state = 'FREE'
  }

  this.init = function(){
    console.log('init')
    this.dom.addEventListener('touchstart', this.handleTouchStart)
    this.dom.addEventListener('touchmove', this.handleTouchMove)
    this.dom.addEventListener('touchend', this.handleTouchEnd)
  }

  this.destory = function(){
    this.dom.removeEventListener('touchstart', this.handleTouchStart)
    this.dom.removeEventListener('touchmove', this.handleTouchMove)
    this.dom.removeEventListener('touchend', this.handleTouchEnd)
  }

  this.init();
}

export default touch
