// FUNCTIONS
function calculateTax(income: number, taxYear = 2022): number { // the last "number" is the return value. Can be set to "void"
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3;
}

calculateTax(10_000);

