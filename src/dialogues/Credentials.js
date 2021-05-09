var _hover = 'rgb(255,155,10,0.7)'
var _button_2 = 'rgb(255,155,155)'
var _button_1 = 'rgb(155,155,255)'
var _button_2_activate = 'rgba(255,0,0,0.4)'
var _button_1_activate = 'rgba(0,255,0,0.4)'

var body = d3.select("body");
var promptDialogue = function(message, button_1_data , button_2_data, result){

    var div = body.append("div")
    // main parent window
    .style('position','absolute')
    .style('overflow','hidden')
    .style('top',  0 + "px")
    .style('left', 0 + "px")
    .style('width', 100 + "%")
    .style('height', 100 + "%")
    .style('background-color', "rgb(155,155,155)")
    .style('text-decoration-line', 'none')
    .style('color', 'red')
    .style('display', 'flex')
    .style('text-align','center')
    .style('justify-content', 'center')
    .style('align-content','center')
    .style('flex-direction','column')
    .style('overflow','hidden');

    input = body.append("input")
    .property('type','text')
    .property('placeholder','enter text here')
    .attr("id", "input")
    .style('position','absolute')
    .style('outline','none')
    .style('border','0')
    .style('top', 0 + "%")
    .style('left', 0 + "%")
    .style('width',"80%")
    .style('height', "50%")
    .style('font-size','150%')
    .style('background-color', "rgba(255,255,255,0.4)")
    .style('text-decoration-line', 'none')
    .style('color', 'black')
    .style('display', 'flex')
    .style('text-align','center')
    .style('justify-content', 'center')
    .style('align-content','center')
    .style('flex-direction','column')
    .style('user-select','none');


    password_input = body.append("input")
    .property('type','password')
    .property('placeholder','enter password here')
    .attr("id", "password_input")
    .style('placeholder','enter text here')
    .style('position','absolute')
    .style('outline','none')
    .style('border','0')
    .style('bottom', 0 + "%")
    .style('left', 0 + "%")
    .style('width',"80%")
    .style('height', "50%")
    .style('font-size','150%')
    .style('background-color', "rgba(0,0,0,0.7)")
    .style('text-decoration-line', 'none')
    .style('color', 'white')
    .style('display', 'flex')
    .style('text-align','center')
    .style('justify-content', 'center')
    .style('align-content','center')
    .style('flex-direction','column')
    .style('user-select','none');

    //button 1
    button_1 = body.append(button_1_data.element)
    .text(button_1_data._text)
    .on("mouseover", function(){
      d3.select(this)
        .style("background-color", _hover);
      d3.event.stopPropagation();
    })
    .on("mouseout", function(){
      d3.select(this)
        .style("background-color",_button_1);
      d3.event.stopPropagation();
    })
    .on("mousedown", function(){
      d3.select(this)
        .style("background-color",_button_1_activate);
      d3.event.stopPropagation();
    })
    .on("mouseup", function(){
      d3.select(this)
        .style("background-color",_hover);
      d3.event.stopPropagation();
    })
    .on("click", function(){
      result = true;
      result = document.getElementById('input').value
      textbox.html(result)
    })

   for (var key of Object.keys(button_1_data._styles)) {
    button_1.style(key, button_1_data._styles[key])
  }

  //button 1
  button_2 = div.append(button_2_data.element)
  .text(button_2_data._text)
  .on("mouseover", function(){
    d3.select(this)
      .style("background-color", _hover);
    d3.event.stopPropagation();
  })
  .on("mouseout", function(){
    d3.select(this)
      .style("background-color",_button_2);
    d3.event.stopPropagation();
  })
  .on("mousedown", function(){
    d3.select(this)
      .style("background-color",_button_2_activate);
    d3.event.stopPropagation();
  })
  .on("mouseup", function(){
    d3.select(this)
      .style("background-color",_hover);
    d3.event.stopPropagation();
  })
  .on("click", function(){
    result = false;
  })

 for (var key of Object.keys(button_2_data._styles)) {
  button_2.style(key, button_2_data._styles[key])
}
}

var style1 = {
    'position':'absolute',
    'user-select':'none',
    'width':'20%',
    'height':'20%',
    'font-size':'150%',
    'background-color':_button_1,
    'color':'blue',
    'right':'0%',
    'bottom':'0%',
    'text-align':'center',
    'justify-content':'center',
    'display':'flex',
    'flex-direction':'column',
}

var style2 = {
    'position':'absolute',
    'user-select':'none',
    'width':'20%',
    'height':'20%',
    'font-size':'150%',
    'background-color':_button_2,
    'color':'blue',
    'right':'0%',
    'top':'0%',
    'text-align':'center',
    'justify-content':'center',
    'display':'flex',
    'flex-direction':'column',
}

var result;
promptDialogue("Do you want to be cool like me? I know you do. one two three four five six seven eight nine ten",
rectangularButton("enter", style1),
rectangularButton("cancel", style2),
result
)
