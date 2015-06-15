var famous = require('famous');
var Node = famous.core.Node;
var Child = require('./Child');

function Menu(mount) {
    // Extend Node
    Node.call(this);
    this.setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(innerWidth, innerHeight);
    makeChild.call(this);
}

// Extend the prototype
Menu.prototype = Object.create(Node.prototype);

// make the child
function makeChild () {
    this.child = new Child();
    this.addChild(this.child);
    this.child.setOpacity(.5)
        .setProportionalSize(1, 1, 1);
}

module.exports = Menu;
