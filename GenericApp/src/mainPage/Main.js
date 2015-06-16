var famous = require('famous');
var Node = famous.core.Node;
var Header = require('./Header');
var Content = require('./Content');
var Footer = require('./Footer');

function Main(mount) {
    // Extend Node
    Node.call(this);
    this.setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(innerWidth, innerHeight);
    makePage.call(this);
}

// Extend the prototype
Main.prototype = Object.create(Node.prototype);

// make the child
function makePage () {
	this.header = new Header();
    this.addChild(this.header);
    this.footer = new Footer();
    this.addChild(this.footer);
    this.content = new Content();
    this.addChild(this.content);
}

Main.prototype.onReceive = function onReceive (event, payload) {

    if (event === 'click') {
        var to = payload.node.getId();

        // emit the changeSection event to the subtree
        this.emit('changeSection', {
            from: this.currentSection,
            to: to
        });

        // set the current section
        this.currentSection = to;
    }
};

module.exports = Main;
