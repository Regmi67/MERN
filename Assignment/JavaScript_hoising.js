//1
console.log(hello);                                   
var hello = 'world';  
// console.log(hello); // logs undefined
// var hello
// hello = " world";  

//2

var needle = 'haystack'; // var needle; // needle='haystack'; 
// declaration got hoisted to the top of the scope 
test(); //test()
function test(){ // fuction test get hoisted
    var needle = 'magnet'; // value assignment stays same as above
    console.log(needle); // we log the global needle
}

//3
var brendan = 'super cool'; // brendan is declared and declaration is global and get hoisted
function print(){ //print got hoisted to the top
    brendan = 'only okay'; // brendan is declared within print function
    console.log(brendan);// we log 'only okay because log is called inside {}
}
console.log(brendan);// we log the global brendan "Super cool"

//4
var food = 'chicken'; // food is hoisted and declared global
console.log(food); // we log the global food 
eat(); // eat is hoisted to the top
function eat(){
    food = 'half-chicken'; // food is declar within the eat and hoisted to the top of its scope
    console.log(food);// we log half chicken
    var food = 'gone';  // var food is decleard within the {}
}

//5
mean(); // mean is not a function
console.log(food); // food is not defined
var mean = function() { // function assigned to variable mean
    food = "chicken";// variale food chicken is assigned within the scope
    console.log(food);// chicken will be log as a food
    var food = "fish";// variable food is reassiged within the scope
    console.log(food);//log the foo
}
console.log(food);// food is not hoisted in the global 

//6
console.log(genre);//genre is not hoisted/defined
var genre = "disco"; //var genre is hoisted globally
rewind(); // function rewind is hoisted
function rewind() {
    genre = "rock"; // variabe genre is hoisted within the scope
    console.log(genre);// log the genre
    var genre = "r&b";// genre is reassigned within the scope
    console.log(genre);// log the recent genre
}
console.log(genre);// global genre will log

//7
dojo = "san jose"; // dojo is hoisted globally
console.log(dojo); // log the global dojo
learn();
function learn() { //learn is hoisted globally
    dojo = "seattle"; // dojo is hoisted within the scope
    console.log(dojo);// loging the dojo within the scope "seattle"
    var dojo = "burbank";// reassigned dojo within the scope
    console.log(dojo);// loging the burbank as a dojo within the scope
}
console.log(dojo);// global dojo will be logged

// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));// make dojo is not defined
console.log(makeDojo("Berkeley", 0));// make dojo is not defined
function makeDojo(name, students){ //function make dojo is hoisted
    const dojo = {}; // dojo is hoisted within the scope
    dojo.name = name; //declaring the varibale within the scope
    dojo.students = students;// declaring the variable within the scope
    if(dojo.students > 50){// first statement for comparizion
        dojo.hiring = true; // ==
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

