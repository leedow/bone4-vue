/**
 * @params eventType swipe|swipeDown|swipeUp
 */
var touch = function(config){
  this.distanceX = 0
  this.distanceY = 0
  this.startPos = [0,0]
  this.currentPos = [0,0]
  //this.endPos = [0,0]
  this.state = 'FREE' //START|MOVING|END|FREE
  this.dom = config.dom
  this.eventType = config.type||'swipeDown'
  this.callback = config.doing||function(){}
  this.donecallback = config.done

  var t = this

  this.handleTouchStart = function(e){
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

    t.distanceX = t.currentPos[0] - t.startPos[0]
    t.distanceY = t.currentPos[1] - t.startPos[1]



    if(!t.actions[t.eventType]()){
      t.callback('touchend', {
        distance: {x:t.distanceX, y:t.distanceY},
        position: t.currentPos,
        state: t.state
      })
    }

    t.state = 'FREE'
    t.distanceX = 0
    t.distanceY = 0
    t.startPos = [0,0]
    t.currentPos = [0,0]
  }


  this.actions = {
    //swipeDown
    swipeDown : function(){
      if(t.distanceY > 60){
        t.donecallback({
          distance: {x:t.distanceX, y:t.distanceY},
          position: t.currentPos,
          state: t.state
        })
        return true
      }
      return false
    },
    swipeUp : function(){
      if(t.distanceY < -60){
        t.donecallback({
          distance: {x:t.distanceX, y:t.distanceY},
          position: t.currentPos,
          state: t.state
        })
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

export default touch
