// let age: number = 20;
//    // // DEBUGGING 
//     if (age < 50)
//         age += 10;
//     console.log(age);
    
// // // TYPES
// let sales: number  = 123_456_789; // number
// let course: string = "TypeScript"; // string
// let is_published: boolean = true; // boolean

// // // ANY TYPE
// let level; // any
// function render(document) { // error occurs due to implicit type "document"
//     console.log(document);
// }

// // // ARRAYS
// let numbers: number[] = []; // declare a number array
// numbers.forEach(n => n.toString) // autocomplete functions with "."

// // // TUPLES
// let user: [number, string] = [1, "Mosh"]; // an fixed length array where each element is a particular type. Recommended array length = 2

// // ENUM (a set of similar constants )
// enum Size { Small, Medium, Large }; // default values = 0, 1, 2
// const enum Size { small = 5, Medium, Large } // Custumize values, medium = 6, large = 7. Put const infront of enum to optimize code
// enum Size { Small = "s", Medium = "m", Large = "l" } // Custum string values needs to be individually set 
// let mySize: Size = Size.Medium;
// console.log(mySize);

// // FUNCTIONS
// function calculateTax(income: number, taxYear = 2022): number { // the last "number" is the return value. Can be set to "void"
//     if (taxYear < 2022)
//         return income * 1.2
//     return income * 1.3;
// }

// calculateTax(10_000);

// // OBJECTS (Not dynamic, cannot change structure later on)
let employee: {
    readonly id: number, // readonly = cannot change value
    name: string,
    retire: (date: Date) => void // retire = method, date = perimetor, Date = type of perimetor, Void = return value 
} = { 
    id: 1, 
    name: "Mosh", 
    retire: (date: Date) => {
        console.log(date);
    }
};


