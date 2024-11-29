// OBJECTS (Not dynamic, cannot change structure later on)
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

// THIS CODE IS UNOPTIMISED.
// SEE IMPROVED VERSION IN   Types/typealias.ts