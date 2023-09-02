// 1-Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

function sumOfFirstNEvenNumbers(n: number): number {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum = sum + i;
    }
    return sum;
}
const numberOfEvenNumbers = 10;
const sumOfEvenNumbers = sumOfFirstNEvenNumbers(numberOfEvenNumbers);
console.log(`The sum of the first ${numberOfEvenNumbers} even numbers is ${sumOfEvenNumbers}`)

// 2-Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

const numbersArray: number[] = [10, 20, 33, 16, 18, 55, 21, 31, 65];
console.log("Even Numbers");

function printEvenNumbers(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}

printEvenNumbers(numbersArray);

// 3-Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

const numbersArray2: number[] = [10, 20, 33, 16, 18, 55, 21, 31, 65, 67, 77];
console.log("Odd Numbers");

function printOddNumbers(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
}

printOddNumbers(numbersArray2);

// 4- - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

const circleRadius: number = 7;

console.log("Area of the Circle");

function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
}

const areaOfCircle = calculateCircleArea(circleRadius);
console.log(areaOfCircle);

// 5-Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

const studentGrades: number[] = [90, 80, 70, 60, 50, 40, 30, 20, 10];

console.log("Grades without failing");

function removeFailingGrades(grades: number[]): number[] {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
            i--;
        }
    }
    return grades;
}

const passingGrades = removeFailingGrades(studentGrades);
console.log(passingGrades);

// 6-Write a program that uses a function to find the largest element in an array of numbers.

const numbersArray3: number[] = [10, 20, 33, 16, 18, 55, 21, 313, 65, 67, 77, 78, 44];
console.log("Largest Number");

function findLargestNumber(array: number[]): number {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let largestNumber = findLargestNumber(numbersArray3)
console.log(largestNumber);