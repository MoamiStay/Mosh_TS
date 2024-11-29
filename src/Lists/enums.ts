// ENUM (a set of similar constants )
enum Size { Small, Medium, Large }; // default values = 0, 1, 2
// const enum Size { small = 5, Medium, Large } // Custumize values, medium = 6, large = 7. Put const infront of enum to optimize code
// enum Size { Small = "s", Medium = "m", Large = "l" } // Custum string values needs to be individually set 
let mySize: Size = Size.Medium;
console.log(mySize);

