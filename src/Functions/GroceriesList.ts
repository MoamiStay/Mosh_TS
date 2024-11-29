type Item = {
    name: string;
    price: number;
    inStock: boolean;
};
const productInfo: { [key: string]: Item } = {
    apple: { name: "Apple", price: 25, inStock: true},
    yoghurt: { name: "Yoghurt", price: 45, inStock: false},
    banana: { name: "Banana", price: 13, inStock: true},
};

let myGroceries: string[] = ["apple", "banana", "yoghurt"];


function calculateTotal(groceries: string[], productData: { [key: string]: Item }): number {
    let totalPrice = 0;
    groceries.forEach((item) => {
        const product = productData[item];
        if (product) {
            console.log(`${product.name}'s price is ${product.price}$`);
            totalPrice += product.price;
        } else {
            console.log(`Item '${item}' not found in product data`);
        }
    });
    return totalPrice;
};

const total = calculateTotal(myGroceries, productInfo);
console.log(`Total Price: ${total}$`);