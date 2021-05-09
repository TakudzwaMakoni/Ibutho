
var body = d3.select("body");
var objects = new Array

// setup the background
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

bgimg = 'url(wallpapers/starfield.png)';
accent = 'rgba(0,0,0,0.8)';

// stylesheet for background div
background_style = {
  'position':'fixed',
  'width':'100%',
  'height':'100%',
  'top':'0%',
  'left':'0%',
  'font-size':'90%',
  'text-align':'right',
  'justify-content':'center',
  'border':'none',
  'display':'flex',
  'flex-direction':'column',
  'user-select':'none',
  'display':'inline-flex',
  'overflow-wrap':'break-word',
  'word-wrap':'break-word',
  'background-color':'black',
  'content':bgimg,
  'max-width':'1920px',
  'max-height':'1080px',
  'z-index':'0',
};

var bg = makeObj(background_style)
bg.make(body);

objects.push(bg)
// setup the titlebar
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// stylesheet for background div
titlebar_style = {
  'position':'fixed',
  'width':'100%',
  'height':'2%',
  'top':'0%',
  'background-color':'rgba(0,0,0,0.7)',
  'right':'0%',
  'font-size':'90%',
  'color':'red',
  'text-align':'right',
  'justify-content':'center',
  'border':'none',
  'display':'flex',
  'flex-direction':'column',
  'user-select':'none',
  'display':'inline-flex',
  'overflow-wrap':'break-word',
  'word-wrap':'break-word',
  'max-width':'1920px',
  'max-height':'1080px',
  'z-index':'4',
  'backdrop-filter': 'blur(4px)'
};

var titlebar = makeObj(titlebar_style);

titlebar.make(body);



// setup the test confirm dialogue
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// stylesheet for confirm div
terminal_style = {
  'position':'fixed',
  'width':'50%',
  'height':'50%',
  'top':'10%',
  'color':'red',
  'text-align':'right',
  'background-color':'rgba(0,0,0,0.7)',
  'left':'10%',
  'font-size':'90%',
  'text-align':'right',
  'justify-content':'center',
  'border':'none',
  'display':'flex',
  'flex-direction':'column',
  'user-select':'none',
  'display':'inline-flex',
  'overflow-wrap':'break-word',
  'word-wrap':'break-word',
  'max-width':'1920px',
  'max-height':'1080px',
  'z-index':'1',
  'backdrop-filter': 'blur(4px)'
};

var terminalObj = makeObj(terminal_style);
terminalObj.id = 'terminal container';
terminalObj.make(body);
terminalObj.handle.text(terminalObj.id)

titlebar.handle.html(terminalObj.left / WIN_X)

objects.push(terminalObj)
terminal = terminalObj.handle.append('iframe')
.property('src','http://localhost:3000/wetty')
.style('position', 'absolute')
.style('width', '100%')
.style('height', '95%')
.style('top', '5%')
.style('border','none')

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// make button for terminal_container
var exitButton_style = {
  'position':'absolute',
  'width':'5%',
  'height':'5%',
  'top':'0%',
  'color':'white',
  'text-align':'left',
  'background-color':'rgba(255,0,0,0.4)',
  'right':'0%',
  'font-size':'90%',
  'text-align':'right',
  'justify-content':'center',
  'border':'none',
  'display':'flex',
  'flex-direction':'column',
  'user-select':'none',
  'display':'inline-flex',
  'overflow-wrap':'break-word',
  'word-wrap':'break-word',
  'max-width':'1920px',
  'max-height':'1080px',
  'z-index':'1',
}
var exitButton = makeObj(exitButton_style);
exitButton.make(terminalObj.handle)
exitButton.handle.on('mousedown', function(d){
  exitButton.handle.style('background-color','rgba(255,0,0,0.2)')
})
exitButton.handle.on('mouseup', function(d){
  exitButton.handle.style('background-color','rgba(255,0,0,0.4)')
})
.on('click',function(d){
  terminalObj.handle.remove();
  d3.stopPropagation()
})

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


// make button
var moveButton_style = {
  'position':'absolute',
  'width':'5%',
  'height':'5%',
  'left':'90%',
  'top':'0%',
  'color':'white',
  'text-align':'left',
  'background-color':'rgba(0,0,255,0.4)',
  'font-size':'90%',
  'text-align':'right',
  'justify-content':'center',
  'border':'none',
  'display':'flex',
  'flex-direction':'column',
  'user-select':'none',
  'display':'inline-flex',
  'overflow-wrap':'break-word',
  'word-wrap':'break-word',
  'max-width':'1920px',
  'max-height':'1080px',
  'z-index':'1',
}

var buttonSwitch = false;
var moveButton = makeObj(moveButton_style);

var clicked;
var i;

moveButton.make(terminalObj.handle)
moveButton.handle
.on('click',function(d){

  //////////////////////////////////////
  buttonSwitch = !buttonSwitch
  if(buttonSwitch){

    var overlay = terminalObj.handle.append('div')
    overlay
    .attr('id','OVERLAYFORMOVEBUTTON')
    .style('width','100%')
    .style('height','95%')
    .style('bottom','0%')
    .style('position','absolute')
    // create a overlay and make it
    .style('background-color','rgba(0,0,0,0.2)')
    //.style('backdrop-filter','blur(4px)')
    .style('z-index','2')

    moveButton.handle
    .style('background-color','rgba(0,255,0,0.4)')
    dragElement(terminalObj, overlay.node())

  } else {

    d3.select('#OVERLAYFORMOVEBUTTON').remove()
    //.style('backdrop-filter','blur(0px)')
    moveButton.handle
    .style('background-color','rgba(0,0,255,0.4)')

  }
  d3.stopPropagation()
  //////////////////////////////////////

})
.on('dblclick',function(d){

  //////////////////////////////////////
  terminalObj.isFocus = !terminalObj.isFocus
  if(terminalObj.isFocus){
    focus(terminalObj.id, objects);
  } else {
    unfocus(terminalObj.id, objects);
  }
  terminalObj.handle
  .style('backdrop-filter','blur(0px)')
  d3.stopPropagation()
  //////////////////////////////////////

})


// setup the test confirm dialogue
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

quill_container_style = {
  'position':'fixed',
  'width':'80%',
  'height':'80%',
  'top':'10%',
  'background-color':'white',
};



var quillObj = makeObj(quill_container_style);
quillObj.make(body);
quillObj.handle.on('mousedown', function(){
  dragElement(quillObj, quillObj.handle.node())
})


quill = quillObj.handle.append('div')
quill.attr('id','quillEditor')
//.style('background-color','white')
//.style('bottom','90%')



var quill = new Quill('#quillEditor', {
   theme: 'snow'
 });
