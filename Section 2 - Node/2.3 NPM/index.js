// var generateName = require("sillyname");

//Need to enable imports in the package json type by setting it to module
//Allows us to use imports, this is a big game changer as i discovered earlier in my development career.

import generateName from "sillyname";
import * as superheroes from "superheroes";
var sillyname = generateName();
var superheroname = superheroes.random();

console.log(`my name is ${sillyname}`);
console.log(`my name is ${superheroname}`);