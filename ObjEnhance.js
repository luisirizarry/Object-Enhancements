// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

/* Write an ES2015 Version */

const createInstructor = (firstName, lastName) => ({
        firstName,
        lastName
});

//   var favoriteNumber = 42;

//   var instructor = {
//     firstName: "Colt"
//   }
  
//   instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */

let instructor1 = {
    firstName: "Colt",
    [42]: "That is my favorite!"
}


// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

/* Write an ES2015 Version */

let instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

// Create Animal Function 
const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}

