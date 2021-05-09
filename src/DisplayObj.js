let WIN_Y = $(window).height();
let WIN_X = $(window).width();

//let PAGE_Y = $(document).height();
//let PAGE_X = $(document).width();

var makeObj = function(s){

  var obj = {
    top:0,
    left:0,
    width:0,
    height:0,
    style:s,
    id:'',
    isFocus: false,
    handle: '',
    make : function(parent){
      var div = parent.append('div');
      for (var key of Object.keys(obj.style)) {
       div.style(key, obj.style[key])
     }
    this.handle = div;
    this.top = (this.handle.node().offsetTop);
    this.left = (this.handle.node().offsetLeft);
    this.width = (this.handle.node().offsetWidth);
    this.height = (this.handle.node().offsetHeight);
    }
  }
 return obj
}

function dragElement(elmntObj, handle) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  handle.onmousedown = dragMouseDown;
  elmnt = elmntObj.handle.node()

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    elmntObj.top = (elmnt.offsetTop);
    elmntObj.left = (elmnt.offsetLeft);
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    handle = null;
    elmntObj = null;
  }
}

function focus(id, arr){
  for(const obj of arr){
    if(obj.id === id){

      centerX = (WIN_X - obj.width) / 2;
      centerY = (WIN_Y - obj.height) / 2;

      // make focus
      obj.isFocus = true
      obj.handle
      .transition()
      .duration(400)
      .style('left', centerX+'px')
      .style('top', centerY+'px')
      .style('z-index','4')

    } else {
      obj.handle
      .transition()
      .duration(400)
      .style('position','fixed')
      .style('left',obj.left + 'px')
      .style('top', obj.top  + 'px')
      .style('z-index','1')
      .style('filter','blur(10px)')
    }
  }
}

function unfocus(id, arr){
  for(const obj of arr){
    if(obj.id === id){
      // make focus
      obj.isFocus = false
      obj.handle
      .transition()
      .duration(400)
      .style('z-index','1')
      .style('left',obj.left + 'px')
      .style('top', obj.top  + 'px')
    } else {
      obj.handle
      .transition()
      .duration(400)
      .style('filter','blur(0px)')
    }
  }
}

function click() {
  if (clicked) {
    startTime = new Date();

    if (i < 3) {
      setTimeout(function() {
          click(++i)


      }, 100);  // start slow
    }
    else  {
      setTimeout(function() {
          click(++i)


      }, 10);  // speed up
    }
  }
}
