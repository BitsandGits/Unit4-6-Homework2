//Homework Part One

//Using what you did with Objects period 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!
//Step 1
function Person(name, age, gender, race, home, event){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.home = home;
    this.event = event;
};
console.log("Person framework via constructor: \n", Person);

//Step 2
let joy = new Person("Joy", 25, "Female", "Human", "Earth");
console.log(joy);

//Step 3
// let frodo = new Person("Frodo", 51, "Male", "Hobbit", "The Shire");
// let aragorn = new Person("Aragorn", 88, "Male","Human","Gondor");
// let arwen = new Person("Arwen", 2700, "Female","Elf","Rivendell");
// let legolas = new Person("Legolas", 2930, "Male", "Elf", "Woodland");
// let gandalf = new Person("Gandalf", 11000, "Male", "Maia", "Middle Earth");

//Step 4
function Quest(weapon, destination){
    this.weapon = weapon;
    this.destination = destination;
}
let quest1 = new Quest("Sting", "Mount Doom");
let quest2 = new Quest("Anduril", "Mordor");
let quest3 = new Quest("Hadhafang", "Undying Land");
let quest4 = new Quest("Galadhrim Bow", "Elephants");
let quest5 = new Quest("Glamdring Staff", "Tower");

//Step 5: added event parameter to Person 

//Step 6
let frodo = new Person("Frodo", 51, "Male", "Hobbit", "The Shire", quest1);
let aragorn = new Person("Aragorn", 88, "Male","Human","Gondor", quest2);
let arwen = new Person("Arwen", 2700, "Female","Elf","Rivendell", quest3);
let legolas = new Person("Legolas", 2930, "Male", "Elf", "Woodland", quest4);
let gandalf = new Person("Gandalf", 11000, "Male", "Maia", "Middle Earth", quest5);
console.log("LOTR characters: ", frodo, aragorn, arwen, legolas, gandalf);

// Step 7
arwen.changeQuest = true;
console.log("Added an Arwen property: ", arwen);

// Step 8


//.Create

//Step 1


//Step 2


//Step 3



//Array vs Objects

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.

//Use dot notation to return hobby description

//Use bracket notation to return name


//Arrays: Create an array with 4 different hobbies


//access second item in the array

//Objects
//Change the value of the boolean of the object we created.

//Add a new property to our person object such as supplies with multiple values in the property.

//remove the hobby description property from the person object


//Arrays
//Use push to add another hobby to your array of hobbies


//use pop to remove the last item from an hobby array


//use unshift to add more values to the beginning of the hobby array.

// us shift to remove the item from the hobby of the array

//Object
//Write a for in loop for the person object you created

//Write a for each loop for your person Object


//Arrays
//Write a for loop for your hobby array

//Write a for of loop for your hobby array

//write a for each loop for your hobby array




