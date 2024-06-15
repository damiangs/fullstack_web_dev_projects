//var generateName = require("sillyname");

import generateName from "sillyname";
var sillyName = generateName();

import { randomSuperhero } from "superheroes";

randomSuperhero();

console.log(`I am ${randomSuperhero()}!`);

//console.log(`My name is ${sillyName}.`);
