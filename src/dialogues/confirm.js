var style1 = {
    'position':'absolute',
    'user-select':'none',
    'width':'20%',
    'height':'20%',
    'font-size':'100%',
    'background-color':'rgb(155,155,255)',
    'color':'blue',
    'right':'0%',
    'top':'0%',
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
    'font-size':'100%',
    'background-color':'rgb(255,155,155)',
    'color':'blue',
    'right':'0%',
    'bottom':'0%',
    'text-align':'center',
    'justify-content':'center',
    'display':'flex',
    'flex-direction':'column',
}

//'rgba(0,255,0,0.4)', 'rgb(255,155,10,0.7)'
//'rgba(255,0,0,0.4)', 'rgb(255,155,10,0.7)'

dialogue[0].style('background-color', 'rgba(0,0,0,0.7)');
dialogue[1].style('background-color', 'rgba(0,0,0,0.7)');

var result;
var dialogue = confirmDialogue(body,"black",["white","black"],"test",
style1,
style2);
