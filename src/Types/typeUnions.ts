
function kgToGrams(weight: number | string) : number { // "|" means it can be either-or number/string
    // Narrowing:
    if (typeof weight === "number") {
        console.log(weight * 100);
        return weight * 100;
    } else { // if parameter is a string
        console.log(parseInt(weight) * 100);
        return parseInt(weight) * 100; 
    }  
};

kgToGrams("1kg");
kgToGrams(10);
kgToGrams("100 kilograms");