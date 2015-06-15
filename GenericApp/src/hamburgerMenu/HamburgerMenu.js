var famous = require('famous');
var Node = famous.core.Node;
var Section = require('./Section');

var labelNums = 7;

function HamburgerMenu(mount) {
    // Extend Node
    Node.call(this);
    this.setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(.8*innerWidth, innerHeight);
    var labels = [];
    makeLabels.call(this);
}

// Extend the prototype
Menu.prototype = Object.create(Node.prototype);

// make the child
function makeLabels () {
    var label = this.addChild();
    labels.push(label);
    this.child.setOpacity(.5)
        .setProportionalSize(1, 1, 1);
}

module.exports = HamburgerMenu;
