/* 1. Create a "cheat sheet" JavaScript file that contains working examples with comments of:
- Variables
- Debugging (alerts, comments, the console)
- Different data types
- Arrays
- Objects
Your cheatsheet should be in a JavaScript (.js) file and linked to a Web page that
successfully executes all the code in the cheatsheet without errors. As you work on it,
feel free to comment out parts of the cheatsheet to focus on just the code you are
working on for each concept.
*/

// Variables "ingreidents"
var starch = "arroz"
var protein = "pollo"
var legume = "frijoles negros"
var vegetables = {veg1: "peppers", veg2: "onions"} //this is a list of objects

//Varibles "secret ingreidents"
var secrets = ["Adobo con Comino", "Vino seco blanco de Cocinar"] //this is an array of strings

// Debugging (alerts, comments, the console)
var result = starch === protein;

console.log(result); //should be "false"

var ArrozConPollo = [starch, protein, legume, vegetables.veg1, vegetables.veg2] // this is an array

console.log(ArrozConPollo) //should display complete list of ingreidents

var nowYoureCooking = [ArrozConPollo, secrets]; //an array of arrays

console.log(nowYoureCooking[0],nowYoureCooking[1]) //arrayception

//ShoppingList

function change(){
  document.getElementById('item1').innerHTML = "arroz";
  document.getElementById("item2").innerHTML = "pollo";
  document.getElementById("item3").innerHTML = "frijoles negros";
  document.getElementById("item4").innerHTML = "peppers";
  document.getElementById("item5").innerHTML = "onions";
  document.getElementById("item6").innerHTML = "Adobo con Comino";
  document.getElementById("item7").innerHTML = "Vino seco blanco de Cocinar";
}
