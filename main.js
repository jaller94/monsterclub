'use strict';

const Base = require('./classes/Base.class.js');

var root = {};
root.bases = [];
var base = new Base();

base.setName('Paul Base');

root.bases.push( base.json() );

console.log( root );
