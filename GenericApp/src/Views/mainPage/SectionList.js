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

}

function handleCollection() {
    this.collection.once('sync', function(collection) {
//        createImages.call(this, collection);
        render.call(this);
        this.collection.on('add', function(model) {
            if(model.get('type')==this.category)
                addImageItem.call(this, model);
        }.bind(this));
        this.collection.on('remove', function(model) {
            if(model.get('type')==this.category) {
                console.log('remove', model)
                model.destroy();
            }
        }.bind(this));
    }.bind(this));
}

function _debug() {
    if (app && app.debug) {
        window.photoCollection = this.collection;
    }
}

function createImages(collection) {
    //var result = [];
    var img;
    var positionIdx=0;
    var satisfiedImg = collection.filter(function(model) {
        return model.get('type')==this.category;
    }.bind(this));
    // console.log(satisfiedImg);
    for (var i = 0; i < satisfiedImg.length; i++) {
        var mdl = satisfiedImg[i];
        //console.log(mdl);
        img = this.addChild()
            .setSizeMode('default', 'absolute')
            .setAbsoluteSize(w, h - 100)
            .setPosition(0, (h - 150) * i)
            .addChild(new ImageItem({
                model: mdl
            }));
    }
    //return result;
};

function addImageItem(ImageModel){
    this.filteredImages = this.collection.where({
        type: this.category
    });
    var index = this.filteredImages.indexOf(ImageModel);
    if (index>=0) {
        var newImage = this.addChild()
            .setSizeMode('default', 'absolute')
            .setAbsoluteSize(w, h - 100)
            .setPosition(0, (h - 150) * index)
            .addChild(new ImageItem({
                model: ImageModel
            }));
    }
};

module.exports = SectionList;
