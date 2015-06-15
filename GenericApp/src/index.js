var Menu = require('./menu/Menu');
var Page = require('./page/Page');
var famous = require('famous');
var FamousEngine = famous.core.FamousEngine;

FamousEngine.init();
var scene = FamousEngine.createScene();
var menu = scene.addChild(new Menu());
var page = scene.addChild(new Page());
