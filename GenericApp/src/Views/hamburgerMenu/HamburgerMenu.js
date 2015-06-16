var famous = require('famous');
var Node = famous.core.Node;
var Section = require('./Section');
var HamburgerMenuCollection = require('../../Models/HamburgerMenuCollection');

var Titles = ['T1', 'T2', 'T3'];
var Labels = [['L1', 'L2', 'L3'], ['L4', 'L5'], ['L6']];

function HamburgerMenu(mount) {
    // Extend Node
    Node.call(this);
    window.menuCollection = this.menuCollection = new HamburgerMenuCollection();
    this.menuCollection.fetch();
    this.setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(.8*innerWidth, innerHeight);
    this.secPosition=0;
    makeSections.apply(this, [Titles, Labels]);    
}

// Extend the prototype
HamburgerMenu.prototype = Object.create(Node.prototype);

// make the child
function makeSections (titles, labels) {
    this.sections = [];
    for (var i=0; i<titles.length; i++) {
        var section = this.addChild(new Section(titles[i], labels[i], this.secPosition));
        this.sections.push(section);
        this.secPosition=section.position;
    }
}

module.exports = HamburgerMenu;
