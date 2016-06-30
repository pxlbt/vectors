'use strict'
import Pixel from './Pixel'

const Vector = function (size) {
    let arr = [];
    while(size--) {
        arr.push(new Pixel());
    }
    return arr
}

export default Vector;
