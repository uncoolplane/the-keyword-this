//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //pronoun that specifies the context of the object that is referencing the function

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //1 - Global, by default all objects are bound to the windows object
      //2 - new, bind function to the variable that is assigned by the new keyword
      //    var obj = new Animal('dog');  this refers to dog
      //3 - Inplicit ... object that is referenced before the '.' dot operator
      //     var user = {this.name:"Sam"} ... this refers to "user"
      //4 - Explicit ... using the functions call, apply, bind functions and passing in the object
      //     var dog = {}; var myfunc = function() {console.log('');}  func.call(dog); ..  this refers to dog

  // 3) What is the difference between call and apply?

      //Answer
      //call you pass in variables in a single list
      //goFast(car, 'blue', 'red');
      //apply you pass in variables as an array
      //goFast(car, ['blue', 'red'])

  // 4) What does .bind do?

      //Answer
      //bind specifies which object the function is bound to without invoking the function

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property.
  //*Don't use 'user' instead use the 'this' keyword*

  var user = {
    username : "Becky",
    email : "becky@gmail.com",
    getUsername : function() {
      return this.username;
    }
  };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername());

//Next Problem

// Write the function definitions which will make the following function invocations function properly.

function Car(make, brand, year) {
  this.make = make,
  this.brand = brand,
  this.year = year,
  this.miles = 0
}

Car.prototype.moveCar = function() {
  this.miles += 10;
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);


prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.
prius.moveCar(); //try again

//Hint, you'll need to add a move property and write a moveCar function which is added to every object
//that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order
//to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above,
//use the proper syntax that will allow for you to call the getYear function with the prius then
//the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
console.log(getYear.call(prius));
var year = getYear.bind(mustang)();
console.log(year);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)(); //Fix this
console.log(userName);

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here
  //it will be undefined because it is bound to the windows object

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //it is bound to the windows object because nothing has been specified

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
