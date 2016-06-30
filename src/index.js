import Display from "./components/Display"
import SVG from 'svgjs';

var draw = SVG('app').size(1300, 1300);

const config = {
    display : {
        w: 60,
        h: 45,
        scale: 10
    }
}
var display = new Display(config.display.w, config.display.h, config.display.scale);

function drawRectangle(x, y, size) {
    this.add(draw.rect(size, size).attr({x, y}))
    this.add(draw.rect(size-2, size-2).attr({x: x+1, y: y+1, fill: 'white'}))
}

var renderDisplay = (function (display) {
    var group = null;
    
    return function () {
        if (group) {
            group.clear();
        }
        group = draw.group();
        display.render.call(display, drawRectangle.bind(group));
    }
})(display)
renderDisplay()
///DOM///
var slider = document.getElementById('scaleSlider');
slider.addEventListener('change', function(evt){
    display.scale = this.value;
    var start = new Date().getTime();
    renderDisplay()
    var end = new Date().getTime();
    console.log('time ms: ' + (end - start))
})