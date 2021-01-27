/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  }

  Person.prototype.eat = function(food) {
  if (this.stomach.length < 10) {
  this.stomach.push(food);
  };
  }
  Person.prototype.poop = function() {
  this.stomach = [];
  }

  Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
  }

  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  }
  Car.prototype.fill = function(gallons) {
  this.tank += gallons;
  }
  Car.prototype.drive = function(distance) {
  const gallonsConsumed = distance / this.milesPerGallon;
  if (this.tank - gallonsConsumed >= 0) {
  this.tank = Number((this.tank - gallonsConsumed).toFixed(2));
  this.odometer += distance;
  } else {
  const extraFuelNeeded = Number((gallonsConsumed - this.tank).toFixed(2));
  const actualDistance = Number((this.milesPerGallon * this.tank).toFixed(2));
  this.tank = 0;
  this.odometer += actualDistance;
  console.log(`You ran out of fuel before completing your trip! You needed ${extraFuelNeeded} extra gallon${extraFuelNeeded === 1 ? "": "s"} to complete the trip. You only made it ${actualDistance} mile${actualDistance === 1 ? "": "s"}!`);
  }
  }
  // Testing the fill and drive functionality
  const mercedez = new Car('S5', 30);
  console.log(mercedez);
  mercedez.fill(5);
  console.log(mercedez);
  mercedez.drive(195);
  console.log(mercedez);
  mercedez.drive(145);
  console.log(mercedez);
  mercedez.fill(30);
  console.log(mercedez);
  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
  }
  Baby.prototype = Object.create(Person.prototype);
  Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
  }
 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. It is used for window/global object binding. It is a pronoun to use in place of an object, gives you the object context. When in the global scope the value of "this" will be the window/console object. In the browser this is called winow an in node it's call global/console.
    2. It is used for implicit Binding. Whenever a preceding dot calls a function, the object before the dot is "this"
    3. It is used for new binding. In a constructor function, "this" refres to specific instance of the object that is created and returned by the constructor function.
    4. it is used for explicit binding. we can override how we set values of constructor objects by taking the object oriented apporoach by calling constructors objects explicitly with new functions. when using dot call or dot apply method, this is explicitly defined.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}