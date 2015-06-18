var famous = require('famous');
var Node = famous.core.Node;
var Section = require('./Section');
var HamburgerMenuCollection = require('../../Models/HamburgerMenuCollection');

function HamburgerMenu(mount) {
    // Extend Node
    Node.call(this);
    this.menuCollection = new HamburgerMenuCollection();
    this.menuCollection.fetch();
    this.setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(.8 * innerWidth, innerHeight);
    this.secPosition = 0;
    // makeSections.apply(this, [Titles, Labels]);
    // this.menuCollection.on('all', function(eventType, menuItemModel, collection) {
    //    console.log(eventType, menuItemModel, collection);
    // });
    this.sections = [];
    this.menuCollection.on('sync', function(collection) {
        collection.forEach(
            function(model) {
                makeSection.call(this, model);
            }.bind(this)
        );
    }.bind(this));
}

// Extend the prototype
HamburgerMenu.prototype = Object.create(Node.prototype);

// make the child
function makeSection(model) {
    var createSec = false;
    if (this.sections.length == 0 || this.sections[this.sections.length - 1] != model.get('section')) {
        createSec = true;
        this.sections.push(model.get('section'));
    }
    var section = this.addChild(new Section(model.get('section'), model.get('content'), this.secPosition, createSec));
    this.secPosition = section.position;
}

module.exports = HamburgerMenu;
