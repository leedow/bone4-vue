/**
 * @params config.type swipe|swipeDown|swipeUp|swipeLeft|swipeRight|swipeX
 * @params config.dom object
 * @params config.done function
 * @params config.doing function
 */
module.exports = function(config){
  this.distanceX = 0
  this.distanceY = 0
  this.startPos = [0,0]
  this.currentPos = [0,0]
  this.startTime = 0
  this.endTime = 0
  this.speedX = 0
  this.speedY = 0
  //this.endPos = [0,0]
  this.state = 'FREE' //START|MOVING|END|FREE
  this.dom = config.dom
  this.eventType = config.type||'swipeDown'
  this.callback = config.doing||function(){}
  this.donecallback = config.done||function(){}

  /**
   * strict or unstrict
   * "touchend" event function will be invoked
   * no matter if event happend
   * when this.mode is setted as 'unstrict'
   */
  this.mode = config.mode||'strict'

  //console.log(this.dom)

  var t = this

  this.handleTouchStart = function(e){
    t.startTime  = new Date().getTime()
    t.state = 'START'
    var touch = e.targetTouches[0]
    t.startPos = [touch.pageX, touch.pageY]
    t.callback('touchstart', {
      distance: {x:t.distanceX, y:t.distanceY},
      position: t.startPos,
      state: t.state
    })
  }

  this.handleTouchMove = function(e){
    t.state = 'MOVING'
    var touch = e.targetTouches[0]
    t.currentPos = [touch.pageX, touch.pageY]
    t.distanceX = t.currentPos[0] - t.startPos[0]
    t.distanceY = t.currentPos[1] - t.startPos[1]
    t.callback('touchmove', {
      distance: {x:t.distanceX, y:t.distanceY},
      position: t.currentPos,
      state: t.state
    })
  }

  this.handleTouchEnd = function(e){
    t.state = 'END'
    t.endTime = new Date().getTime()
    var time = Math.floor((t.endTime - t.startTime)/1000)

    t.distanceX = t.currentPos[0] - t.startPos[0]
    t.distanceY = t.currentPos[1] - t.startPos[1]

    if(time == 0) time = 1
    t.speedX = Math.abs(t.distanceX/time)
    t.speedY = Math.abs(t.distanceY/time)

    if(!t.actions[t.eventType]()){

      t.callback('touchend', {
        distance: {x:t.distanceX, y:t.distanceY},
        speed: {x:t.speedX, y:t.speedY},
        position: t.currentPos,
        state: t.state
      })
    } else {


      if(t.mode == 'unstrict'){
       
        t.callback('touchend', {
          distance: {x:t.distanceX, y:t.distanceY},
          speed: {x:t.speedX, y:t.speedY},
          position: t.currentPos,
          state: t.state
        })
      }

      t.donecallback({
        distance: {x:t.distanceX, y:t.distanceY},
        speed: {x:t.speedX, y:t.speedY},
        position: t.currentPos,
        state: t.state
      })
    }

    t.state = 'FREE'
    t.distanceX = 0
    t.distanceY = 0
    t.startTime = 0
    t.endTime = 0
    t.speedX = 0
    t.speedY = 0
    t.startPos = [0,0]
    t.currentPos = [0,0]
  }


  this.actions = {
    swipe: function(){
      return true
    },
    //swipeDown
    swipeDown : function(){
      if(t.distanceY > 60){

        return true
      }
      return false
    },
    swipeUp : function(){
      if(t.distanceY < -60){

        return true
      }
      return false
    },
    swipeLeft: function(){
      if(t.distanceX < - 60){
        return true
      }
      return false
    },
    swipeRight: function(){
      if(t.distanceX > 60){
        return true
      }
      return false
    },
    swipeX: function(){
      if(Math.abs(t.distanceX) > 60){
        return true
      }
      return false
    },
    swipeY: function(){
      if(Math.abs(t.distanceY) > 60){
        return true
      }
      return false
    }
  }

  this.init = function(){
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
