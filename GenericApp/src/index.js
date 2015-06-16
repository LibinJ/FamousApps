var HamburgerMenu = require('./Views/hamburgerMenu/HamburgerMenu');
// var Page = require('./page/Page');
var famous = require('famous');
var FamousEngine = famous.core.FamousEngine;

FamousEngine.init();
var scene = FamousEngine.createScene();
var hamburgerMenu = scene.addChild(new HamburgerMenu());
// var page = scene.addChild(new Page());
