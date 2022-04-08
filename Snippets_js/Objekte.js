https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object

// Object Initialisierer / Literal
{ [ NameWertPaar1 [, NameWertPaar2 [, ...NameWertPaarN] ] ] }

// Konstruktor-Form
new Object( [ Wert ] )

// Beispiel
var car = {type:"Fiat", model:"500", color:"white"};

// Beispiel
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

var personjson = JSON.stringify(person);
console.log(personjson);
var personobject = JSON.parse(personjson);
console.log(personobject);

person.lastName;
person["lastName"];

// Mit Funktion
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

var fname = person.fullName();

console.log(fname);
console.log(person);