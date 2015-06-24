"use strict"
var famous = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var Align = require('famous/components/Align');
var PhotoCollection = require('../../Models/PhotoCollection');
var ImageItem = require('./ImageItem');

var w = innerWidth;
var h = innerHeight;

function SectionList(category) {
    Node.call(this);
    console.log(category);
    // this.category = 'Dog';
    this.category = category;
    this.collection = PhotoCollection.load('jeff');
    handleCollection.call(this);
    _debug.call(this);
}


SectionList.prototype = Object.create(Node.prototype);

function render() {
	this.collection.each(function(ImageModel) {
		addImageItem.call(this, ImageModel);
	}.bind(this));
}

function handleCollection() {
    this.collection.once('sync', function(collection) {
//        createImages.call(this, collection);
        render.call(this);
        this.collection.on('add', function(model) {
            if(model.get('type')==this.category)
                addImageItem.call(this, model);
        }.bind(this));
        this.collection.on('remove', function(model, a, b) {
            if(model.get('type')==this.category) {
                removeImage.call(this, model);
            }
        }.bind(this));
    }.bind(this));
}

function _debug() {
    if (app && app.debug) {
        window.photoCollection = this.collection;
    }
}

function removeImage(ImageModel) {
	// console.log(ImageModel, this.collection);
	ImageModel.destroy();
	this.filteredImages.forEach(function(model){
		var newIdx = getIndex.call(this, model);
		if (newIdx!=-1) {
			model.trigger('checkPosition', {
				idx: newIdx
			});
		}
	}.bind(this));
}

function getIndex(ImageModel) {
	this.filteredImages = this.collection.where({
        type: this.category
    });
    return this.filteredImages.indexOf(ImageModel);
}

function addImageItem(ImageModel){
	var index = getIndex.call(this, ImageModel);
    if (index>=0) {
        var imgParent = this.addChild();
        imgParent.addChild(new ImageItem({
                model: ImageModel,
                parent: imgParent,
                index: index
            }));
    }
};

module.exports = SectionList;
