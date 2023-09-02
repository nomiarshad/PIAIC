// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified
// index in the array. Return the modified array.

const originalArray: string[] = ['Bilal', 'Usman', 'Ali', 'Asad'];
const insertionIndex: number = 1;
const insertedValue: string = 'Asad';
console.log("Array before Splice Method:");
console.log(originalArray);

function insertValueAtIndex(array: string[], index: number, value: string): string[] {
    array.splice(index, 0, value);
    return array;
}

const modifiedArray: string[] = insertValueAtIndex(originalArray, insertionIndex, insertedValue);

console.log("Array After Splice Method:");
console.log(modifiedArray);
console.log(`Value is inserted at index ${insertionIndex}`);

// 2-Write a program that uses a while loop to print the first 25 integers.

let i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}

// 3-Write a program that uses a while loop to print the first 10 even numbers.

let j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}

// 4-Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
let inputNumber: number = 5;

function calculateFactorial(number: number): number {
    let factorial: number = 1;
    let counter: number = 1;
    while (counter <= number) {
        factorial *= counter;
        counter++;
    }
    return factorial;
}

console.log(calculateFactorial(inputNumber));

// 5-Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

const numberArray: number[] = [-33, 44, -66, 32, 34, 5, 2];

function removeNegativeNumbers(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array.splice(i, 1);
            i--; // Decrement i to account for the removed element
        }
    }
    return array;
}

console.log(removeNegativeNumbers(numberArray));

// 6-Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

const numberArray2: number[] = [44, 55, 65, 789, 23, 22, 45];

function calculateArraySum(array: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(calculateArraySum(numberArray2));

// 7- Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

const celsiusTemperatures: number[] = [35, 37, 40, 44, 48, 62, 80, 90, 100];

console.log('Array of Celsius Temperature');

function displayTemperatures(array: number[]): number[] {
    let displayArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
        displayArray.push(array[i]);
    }
    return displayArray;
}

console.log(displayTemperatures(celsiusTemperatures));

function convertCelsiusToFahrenheit(array: number[]): number[] {
    let i: number = 0;

    while (i < array.length) {
        array[i] = (array[i] * 9 / 5) + 32;
        i++;
    }
    return array;
}

console.log(convertCelsiusToFahrenheit(celsiusTemperatures));

// 8-Implement a simple shopping cart program using an array Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

function addItemToCart(cart: string[], itemName: string) {
    cart.push(itemName);
}

function removeItemFromCart(cart: string[], itemName: string) {
    const index = cart.indexOf(itemName);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function updateQuantityInCart(cart: string[], itemName: string, quantity: any) {
    let index: number = cart.indexOf(itemName);
    if (index !== -1) {
        cart[index] = quantity;
    }
}

const shoppingCart: string[] = [];

addItemToCart(shoppingCart, "Apple");
addItemToCart(shoppingCart, "Banana");
addItemToCart(shoppingCart, "Orange");

console.log("Cart contents:");
console.log(shoppingCart);

removeItemFromCart(shoppingCart, "Banana");

console.log("After removing Banana:");
console.log(shoppingCart);

updateQuantityInCart(shoppingCart, "Apple", 2);

console.log("After updating the quantity of Apple to 2:");
console.log(shoppingCart);