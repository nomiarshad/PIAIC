// Assignment no 2
const myName: string = "LAVA";
console.log(`Hello ${myName}`);

// Assignment no 3
const myFullName: string = "Bilal lava chubby";
console.log("toLowerCase=>", myFullName.toLowerCase());
console.log("toUpperCase=>", myFullName.toUpperCase());
console.log(
  "toTitlecase=>",
  myFullName
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.substr(1))
    .join(" ")
);
console.log("=========");

// Assignment no 4
console.log(
  `Albert Einstein once said, "If you can't explain it simply, you don't understand it well enough."`
);
console.log("=========");

// Assignment no 5
const famousPerson: string = "Albert Einstein";
const famousQuote: string =
  "It's not that I'm so smart, it's just that I stay with problems longer.";
console.log(`${famousPerson} once said, "${famousQuote}"`);
console.log("=========");

// Assignment no 6
const strippedNames: string = `\tAlbert\nEinstein\t`;
console.log(strippedNames.trim());
console.log("=========");

// Assignment no 7
console.log("Addition= ", 4 + 1);
console.log("Subtraction= ", 18 - 2);
console.log("Multiplication= ", 5 * 4);
console.log("Division= ", 18 / 2);
console.log("=========");

// Assignment no 8
console.log(12 + 3);
console.log("=========");

// Assignment no 9
const myFavoriteNumber: number = 18;
console.log(`My Favorite number is: ${myFavoriteNumber}`);
console.log("=========");

// Assignment no 10
const favoriteNumber: number = 18;
console.log(`My Favorite number is: ${favoriteNumber}`);
console.log("=========");

// Assignment no 11
const namesListOne: Array<string> = ["Ahmad", "Ammad", "Karim"];
for (let i: number = 0; i < namesListOne.length; i++) {
  console.log(namesListOne[i]);
}
console.log("=========");

// Assignment no 12
const namesListTwo: Array<string> = ["Ahmad", "Ammad", "Karim"];
for (let i: number = 0; i < namesListTwo.length; i++) {
  console.log(`Hello ${namesListTwo[i]}`);
}
console.log("=========");

// Assignment no 14
const transportList: Array<string> = ["Honda 70", "Range Rover"];
for (let i: number = 0; i < transportList.length; i++) {
  console.log(`I would like to own a ${transportList[i]}`);
}
console.log("=========");

// Assignment no 15
const guestsListOne: Array<string> = [
  "Imran Khan",
  "Shahid Afridi",
  "Virat Kohli",
  "Babar Azam",
];
for (let i: number = 0; i < guestsListOne.length; i++) {
  console.log(`${guestsListOne[i]} Sir, I would like to invite you on a dinner.`);
}
console.log("=========");

// Assignment no 16
const guestsListTwo: Array<string> = [
  "Imran Khan",
  "Shahid Afridi",
  "Virat Kohli",
  "Babar Azam",
];
for (let i: number = 0; i < guestsListTwo.length; i++) {
  if (guestsListTwo[i] == "Virat Kohli") {
    console.log(`${guestsListTwo[i]} Sir, No worries if you are unable to attend.`);
    guestsListTwo[i] = "Misbah ul haq";
    console.log(`${guestsListTwo[i]}  Sir, I would like to invite you on a dinner.`);
  } else {
    console.log(`${guestsListTwo[i]} Sir, I would like to invite you on a dinner.`);
  }
}
console.log(`Total guestsList: ${guestsListTwo.length}`);
console.log("=========");

// Assignment no 17
const guestListFour: Array<string> = [
  "Imran Khan",
  "Shahid Afridi",
  "Virat Kohli",
  "Babar Azam",
];
guestListFour.push("Nawaz Sharif");
guestListFour.unshift("Shoaib Malik");
guestListFour.splice(guestListFour.length / 2, 0, "Shahrukh Khan");
console.log("Sir I got a bigger dinner table I invited 3 more personalities");
for (let i: number = 0; i < guestListFour.length; i++) {
  if (guestListFour[i] == "Virat Kohli") {
    console.log(`${guestListFour[i]} Sir, No worries if you are unable to attend.`);
    guestListFour[i] = "Misbah ul haq";
    console.log(`${guestListFour[i]}  Sir, I would like to invite you on a dinner.`);
  } else {
    console.log(`${guestListFour[i]} Sir, I would like to invite you on a dinner.`);
  }
}
console.log(`Total guestsList: ${guestListFour.length}`);
console.log("=========");

// Assignment no 18
let guestsListThree: Array<string> = [
  "Imran Khan",
  "Shahid Afridi",
  "Virat Kohli",
  "Babar Azam",
];
console.log("Sorry Guests I have just capacity of 2 guest only so I have to reduce my list");

let newArray = [...guestsListThree];

for (let i: number = 0; i < guestsListThree.length; i++) {
  if (i <= 1) {
    console.log(`${guestsListThree[i]}  Sir, I would like to invite you on a dinner.`);
  } else {
    console.log(`${guestsListThree[i]} Sorry sir I don't have space`);
    newArray.pop();
  }
}
guestsListThree = newArray;
console.log(`Total guestsList: ${guestsListThree.length}`);
console.log(`Now Clearing the Array`);
guestsListThree.length = 0;
console.log(`Total guestsList: ${guestsListThree.length}`);
console.log("=========");

// Assignment no 19
const locationsList: Array<string> = ["Canada", "USA", "Brazil", "Russia", "UK"];
console.log("array is not in alphabetical order", locationsList);
const clonedArrayForAlphabeticalSort: Array<string> = [...locationsList];
const sortedArrayAlphabetical: Array<string> = clonedArrayForAlphabeticalSort.sort();
console.log("alphabetical order sorted", sortedArrayAlphabetical);
console.log("array in its original order", locationsList);
const clonedArrayForReverseAlphabeticalSort: Array<string> = [...locationsList];
const sortedArrayReverseAlphabetical: Array<string> = clonedArrayForReverseAlphabeticalSort.sort(
  (a, b) => (a > b ? -1 : 1)
);
console.log("reverse alphabetical order sorted", sortedArrayReverseAlphabetical);
console.log("array in its original order", locationsList);
console.log("=========");

// Assignment no 20
let finalGuestsList: Array<string> = [...guestsListOne, ...guestsListTwo, ...guestsListThree, ...guestListFour].filter(
  (value, index, self) => self.indexOf(value) === index
);
console.log("Final Guests who are invited", finalGuestsList);
console.log("=========");

// Assignment no 21
const addThingsToArrayOne = (...items: any) => {
  let thingsArray: Array<string> = items;
  console.log("ThingsArray =>", thingsArray);
};
addThingsToArrayOne("Mountains", "rivers", "countries", "cities");
console.log("=========");

// Assignment no 22
const addThingsToArray = (...items: any) => {
  let thingsArrayTwo: Array<string> = items;
  const thingsObject: { [key: string]: string } = {};
  for (let i = 0; i < thingsArrayTwo.length; i++) {
    let thing = thingsArrayTwo[i];
    let value = thingsArrayTwo[i];
    thingsObject[thing] = value;
  }
  console.log("thingsObject =>", thingsObject);
};
addThingsToArray("Mountains", "rivers", "countries", "cities");
console.log("=========");

// Assignment no 23
const carsList: Array<string> = ["Buggati", "Ferrari", "RangRover"];
let indexToFind: number = 3;
console.log("array index error", carsList[indexToFind]);
indexToFind = 2;
console.log("Corrected array index error", carsList[indexToFind]);
console.log("=========");

// Assignment no 24
let carName: string = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(carName == "subaru");

let bikeName: string = "honda70";
console.log("Is bike == 'honda70'? I predict True.");
console.log(bikeName == "honda70");

let laptopName: string = "macbook";
console.log("Is laptop == 'macbook'? I predict True.");
console.log(laptopName == "macbook");

let phoneName: string = "iphone";
console.log("Is phone == 'iphone'? I predict True.");
console.log(phoneName == "iphone");

let cycleName: string = "phoneix";
console.log("Is cycle == 'phoneix'? I predict True.");
console.log(cycleName == "phoneix");

let myNameCheck: string = "hamza";
console.log("Is myName == 'Ali'? I predict False.");
console.log(myNameCheck == "Ali");

let myAge: number = 26;
console.log("Is myAge == 28? I predict False.");
console.log(myAge == 28);

let isAdmin: string = "No";
console.log("Is isAdmin == 'Yes'? I predict False.");
console.log(isAdmin == "Yes");

let myFavouriteColor: string = "Black";
console.log("Is myFavouriteColor == 'Green'? I predict False.");
console.log(myFavouriteColor == "Green");

let myFavouriteFood: string = "Biryani";
console.log("Is myFavouriteFood == 'Shawarma'? I predict False.");
console.log(myFavouriteFood == "Shawarma");
console.log("=========");

// Assignment no 25
let num: number = 1;
console.log("Value of num == 2", num == 2);
let numTwo: number = 1;
console.log("Value of num != 1", numTwo != 1);
let myNameCheckLower: string = "Hamza";
console.log("lower case string", myNameCheckLower == "hamza");
let num1: number = 10;
let num2: number = 5;
console.log(">=&&||", num1 >= 5 && num1 <= 5 || num2 >= 5 && num2 <= 5);
let myNewArrayOne: Array<number> = [1, 2, 5, 6];
let numberToCheck: number = 5;
let isNumberAvailable: boolean = false;
for (let i: number = 0; i < myNewArrayOne.length; i++) {
  if (myNewArrayOne[i] == numberToCheck) {
    isNumberAvailable = true;
    break;
  }
}
console.log("Check for the number available in the array: ", isNumberAvailable);
console.log("=========");

// Assignment no 26
const alienColor: string = "green";
const colorCheckerOne = (clr: string) => {
  if (alienColor == clr) {
    console.log("You earned 5 points");
  } else {
    console.log("no OutPut");
  }
};
colorCheckerOne("green");
colorCheckerOne("red");
console.log("=========");

// Assignment no 27
const alienColorTwo: string = "green";
const colorCheckerTwo = (clr: string) => {
  if (clr == alienColorTwo) {
    console.log("You earned 5 points");
  } else if (clr == "red") {
    console.log("You earned 10 points");
  } else {
    console.log("no OutPut");
  }
};
colorCheckerTwo("green");
colorCheckerTwo("red");
colorCheckerTwo("blue");
console.log("=========");

// Assignment no 28
const alienColorThree: string = "green";
const colorCheckerThree = (clr: string) => {
  if (clr == alienColorThree) {
    console.log("You earned 5 points");
  } else if (clr == "yellow") {
    console.log("You earned 10 points");
  } else if (clr == "red") {
    console.log("You earned 15 points");
  } else {
    console.log("no OutPut");
  }
};
colorCheckerThree("green");
colorCheckerThree("yellow");
colorCheckerThree("red");
console.log("=========");


// Assignment no 29
const personAgeCalculator = (age: number) => {
    if (age < 2) {
      console.log("person is a baby");
    } else if (age >= 2 && age < 4) {
      console.log("person is a toddler");
    } else if (age >= 4 && age < 13) {
      console.log("person is a kid");
    } else if (age >= 13 && age < 20) {
      console.log("person is a teenager");
    } else if (age >= 20 && age < 65) {
      console.log("person is an adult");
    } else if (age >= 65) {
      console.log("person is an elder");
    } else {
      console.log("no OutPut");
    }
  };
  
  personAgeCalculator(1);
  personAgeCalculator(3);
  personAgeCalculator(7);
  personAgeCalculator(15);
  personAgeCalculator(22);
  personAgeCalculator(70);
  console.log("=========");
  
  // Assignment no 30
  const favoriteFruits: Array<string> = ["apple", "orange", "mango", "bananas", "peach"];
  for (let i: number = 0; i < favoriteFruits.length; i++) {
    if (favoriteFruits[i] == "orange") {
      console.log(`${favoriteFruits[i]} is in my favorite fruits list`);
    } else if (favoriteFruits[i] == "bananas") {
      console.log(`${favoriteFruits[i]} is in my favorite fruits list`);
    } else if (favoriteFruits[i] == "apple") {
      console.log(`${favoriteFruits[i]} is in my favorite fruits list`);
    } else if (favoriteFruits[i] == "mango") {
      console.log(`${favoriteFruits[i]} is in my favorite fruits list`);
    } else {
      console.log("I don't like this fruit");
    }
  }
  console.log("=========");
  
  // Assignment no 31
  const usersOnWebsite: Array<string> = ["Ahmad", "Ali", "Abdullah", "Hamza", "Akbar"];
  for (let i: number = 0; i < usersOnWebsite.length; i++) {
    if (usersOnWebsite[i] == "Ahmad") {
      console.log(`Hello ${usersOnWebsite[i]}, thank you for logging in again`);
    } else if (usersOnWebsite[i] == "Hamza") {
      console.log(`Hello admin ${usersOnWebsite[i]} thank you for logging in`);
    } else if (usersOnWebsite[i] == "Ali") {
      console.log(`Hello ${usersOnWebsite[i]}, thank you for logging in again`);
    } else if (usersOnWebsite[i] == "Abdullah") {
      console.log(`Hello ${usersOnWebsite[i]}, thank you for logging in again`);
    } else if (usersOnWebsite[i] == "Akbar") {
      console.log(`Hello ${usersOnWebsite[i]}, thank you for logging in again`);
    } else {
      console.log("No user exists with that name");
    }
  }
  console.log("=========");
  
  // Assignment no 32
  const usersOnWebsiteTwo: Array<string> = ["Ahmad", "Ali", "Abdullah", "Hamza", "Akbar"];
  if (usersOnWebsiteTwo.length == 0) {
    console.log("We need to find some users!");
  } else {
    while (usersOnWebsiteTwo.length > 0) {
      usersOnWebsiteTwo.pop();
    }
    console.log("No users found!", usersOnWebsiteTwo.length);
  }
  console.log("=========");
  
  // Assignment no 33
  const currentUsers: Array<string> = ["Bob11", "John12", "William13", "Emily14", "Martin15"];
  const newUsers: Array<string> = ["Andy11", "Robert12", "John12", "Emmy13", "Scot12"];
  const findingUserNames = (user: string) => {
    const findingUserIndex = currentUsers.indexOf(user);
    if (findingUserIndex != -1) {
      return `${user} needs a new username because it's already taken`;
    } else {
      return `${user} the username is available`;
    }
  };
  
  for (let i = 0; i < newUsers.length; i++) {
    console.log(findingUserNames(newUsers[i]));
  }
  console.log("=========");
  
  // Assignment no 34
const ordinalNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i: number = 0; i < ordinalNumbers.length; i++) {
  if (ordinalNumbers[i] == 1 || ordinalNumbers[i] == 2 || ordinalNumbers[i] == 3) {
  } else {
    console.log(`${ordinalNumbers[i]}th`);
  }
}
console.log("=========");

// Assignment no 35
const pizzaTypes: Array<string> = ["tandoori", "pepperoni", "tikka"];
for (let i: number = 0; i < pizzaTypes.length; i++) {
  console.log(`I like ${pizzaTypes[i]} pizza`);
}
console.log(`Pizzas are my favorite meal \nI really like to eat them \nI really love pizza!`);
console.log("=========");

// Assignment no 36
const petAnimals: Array<string> = ["dog", "cat", "rabbit"];
for (let i: number = 0; i < petAnimals.length; i++) {
  console.log(`A ${petAnimals[i]} would make a great pet.`);
}
console.log("These animals would make a great pet!");
console.log("=========");

// Assignment no 37
const makeTShirt = (size: string, textToPrint: string) => {
  return `Size: ${size}, TextToPrint on it: ${textToPrint}`;
};
console.log(makeTShirt("medium", "Pakistan Zindabad"));
console.log("=========");

// Assignment no 38
const makeTShirtTwo = (textToPrint?: string, size: string = "large") => {
  return `Size: ${size}, TextToPrint on it: ${textToPrint}`;
};
console.log(makeTShirtTwo("I love TypeScript"));
console.log("=========");

// Assignment no 39
const describeCity = (city?: string, country: string = "Pakistan") => {
  return `${city} is in ${country}`;
};
console.log(describeCity("Karachi"));
console.log(describeCity("Faisalabad"));
console.log(describeCity("Mumbai"));
console.log("=========");

// Assignment no 40
const cityCountry = (city?: string, country: string = "Pakistan") => {
  return `"${city}, ${country}"`;
};
console.log(cityCountry("Karachi", "Pakistan"));
console.log(cityCountry("Faisalabad", "Pakistan"));
console.log(cityCountry("Mumbai", "India"));
console.log("=========");


// Assignment no 41
const makeAlbum = (artist: string, albumName: string, track: number = 1) => {
    return {
      artist,
      albumName,
      track,
    };
  };
  console.log(makeAlbum("Atif Aslam", "Doorie"));
  console.log(makeAlbum("Arijit Singh", "Tum hi ho"));
  console.log(makeAlbum("Jubin Nautiyal", "Zindagi tu bta"));
  console.log("=========");
  
  // Assignment no 42
  const magicians: Array<string> = ["Albert", "Michael", "Steve"];
  const showMagicians = (arr: Array<string>) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Hello Mr, ${arr[i]} Magician`);
    }
  };
  showMagicians(magicians);
  console.log("=========");
  
  // Assignment no 43
  const makeGreat = (arr: Array<string>) => {
    return arr.map((item) => `Great ${item}`);
  };
  showMagicians(makeGreat(magicians));
  console.log("=========");
  
  // Assignment no 44
  let copyArrayMagicians = [...magicians];
  showMagicians(makeGreat(copyArrayMagicians));
  console.log(magicians);
  console.log("=========");
  
  // Assignment no 45
  const prepareSandwiches = (...items: Array<string>) => {
    let summaryOfSandwich: any = {};
    let countOfDishes = 1;
    for (let i = 0; i < items.length; i++) {
      summaryOfSandwich[`item ${countOfDishes}`] = items[i];
      countOfDishes = ++countOfDishes;
    }
    return summaryOfSandwich;
  };
  console.log(prepareSandwiches("sauce", "corn", "black pepper"));
  console.log(prepareSandwiches("pickle", "corn", "capsicum"));
  console.log(prepareSandwiches("green chilli", "corn", "lentils"));
  console.log("=========");
  
  // Assignment no 46
  const storeInformationAboutCar = (manufacturer: string, model: string, color: string) => {
    return {
      manufacturer,
      model,
      color,
    };
  };
  console.log(storeInformationAboutCar("Honda", "Civic", "Grey"));
  console.log("=========");
  