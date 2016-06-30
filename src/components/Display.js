'use strict'
import Vector from './Vector';

class Display {
    constructor(w,h, scale = 1) {
        this.plot = [];
        while (h--) {
            this.plot.push(Vector(w))
        }
        this.scale = scale;
    }
    on(i,j) {
        this.plot[i][j].on = true;
    }
    off(i,j) {
        this.plot[i][j].on = false;
    }
    render(draw) {
        let scale = this.scale;
        
        function getCoor(val) {
            return val*scale - scale
        }
        
        function drawPixel(i, j) {
            draw(
               getCoor(i + 1), 
               getCoor(j + 1),
               scale
            )
        }
        
        function pixelNormal(j, pixel, i) {
            drawPixel(i, j)
        }
        
        function drawVector(vector, j) {
            vector.forEach(pixelNormal.bind(this, j))
        }
        
        
        this.plot.forEach(drawVector)
    }
}

export default Display;
