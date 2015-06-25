var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var DeleteButton = require('./DeleteButton');
var Align = famous.components.Align;

var w = innerWidth;
var h = innerHeight;

function ImageItem(options) {
    Node.call(this);
    this.model = options.model;
    this.parent = options.parent;
    this.index = options.index;
    this.parent.setSizeMode('default', 'absolute')
            .setAbsoluteSize(innerWidth, innerHeight - 100)
            .setPosition(0, (innerHeight - 150) * this.index);
    this.el = new DOMElement(this, {
        tagName: 'div',
        classes: ['image-item']
    });
    render.call(this);

    handleModel.call(this);
}


ImageItem.prototype = Object.create(Node.prototype);

function handleModel() {
    this.model.on('destroy', function(){
        this.el.setContent('');
        this.parent.removeChild(this);
    }.bind(this));
    this.model.on('checkPosition', function(arg) {
        if (arg.idx!=this.index)
            moveUp.call(this);
    }.bind(this));
}

function moveUp() {
    this.index--;
    this.parent.setPosition(0, (innerHeight - 150) * this.index);
}

function render() {
    console.log(this.model.toJSON())
    this.el.setContent('<img src=' + this.model.get('imageUrl') + ' height="' + (h-200) + '" width="' + w + '""><p class="textContent">' + this.model.get('title') + '</p>' );
    addDeleteButton.call(this);
}

function addDeleteButton(){ 
    this.addChild(new DeleteButton());
}

module.exports = ImageItem;