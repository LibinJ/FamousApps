var famous = require('famous');
var Node = famous.core.Node;
var Header = require('./Header');
var Content = require('./Content');
var Footer = require('./Footer');
var FooterButton = require('./FooterButton');

function Main(mount) {
    // Extend Node
    Node.call(this);

    this.currentSection = FooterButton.sections[0].id;

    this.setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(innerWidth, innerHeight);
    
    makePage.call(this);
}

// Extend the prototype
Main.prototype = Object.create(Node.prototype);

// Main.prototype.onMount = function(parent, id) {
//    Node.prototype.onMount.call(this, parent, id);
//    this.emit('changeSection',{
//         from: null,
//         to: this.currentSection
//    });
// };

// make the child
function makePage () {
	this.header = new Header();
    this.addChild(this.header);
    this.footer = new Footer();
    this.addChild(this.footer);
    this.content = new Content();
    this.addChild(this.content);
}

Main.prototype.onReceive = function onReceive(event, payload) {
    if (event === 'click') {
        var to = payload.node.getId();
        this.emit('changeSection', {
            from: this.currentSection,
            to: to
        });
        this.currentSection = to;
    }
};

module.exports = Main;
