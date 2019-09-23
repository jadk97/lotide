const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["hello", "lighthouse", "labs"];

assertEqual(tail(words)[0], "lighthouse");