var famous = require('famous');
var Node = famous.core.Node;
var Header = require('./Header');
var Content = require('./Content');
var Footer = require('./Footer');
var FooterButton = require('./FooterButton');
var DragComp = require('./DragComp');
var NavButton = require('./NavButton');

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

Main.prototype.onMount = function(parent, id) {
    this.emit('changeSection', {
        from: null,
        to: this.currentSection
    });
};

// make the child
function makePage() {
    this.header = new Header();
    this.addChild(this.header);
    this.footer = new Footer();
    this.addChild(this.footer);
    this.content = new Content();
    this.addChild(this.content);
    var dragComp = new DragComp(this);
}

Main.prototype.onReceive = function onReceive(event, payload) {
    // console.log(event, payload);        // payload.node instanceof NavButton
    if (event == 'click' && payload.node.type == 'NavButton') {
        var to = payload.node.getId();
        this.emit('changeSection', {
            from: this.currentSection,
            to: to
        });
        this.currentSection = to;
    }
};

module.exports = Main;
