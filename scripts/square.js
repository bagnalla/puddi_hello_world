var Puddi = require('./puddi/puddi.js');
var Drawable = require('./puddi/puddidrawable.js');
var Vector = require('victor');

var Square = function(puddi, parent) {
    // Call superclass constructor.
    Drawable.call(this, puddi, parent);
    this._color = "green";
}

// Set up inheritance.
Square.prototype = Object.create(Drawable.prototype);
Square.prototype.constructor = Square;

Square.prototype._drawSelf = function(ctx) {
    ctx.fillStyle = this._color;
    ctx.fillRect(-1/2, -1/2, 1, 1);
    ctx.strokeStyle = '#666666';
    ctx.strokeRect(-1/2, -1/2, 1, 1);
}

module.exports = Square;
