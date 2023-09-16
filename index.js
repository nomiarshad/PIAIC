var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Assignment no 2
var myName = "Basit";
console.log("Hello ".concat(myName));
// Assignment no 3
var myFullName = "abdul basit";
console.log("toLowerCase=>", myFullName.toLowerCase());
console.log("toUpperCase=>", myFullName.toUpperCase());
console.log("toTitlecase=>", myFullName
    .split(" ")
    .map(function (word) { return word[0].toUpperCase() + word.substr(1); })
    .join(" "));
console.log("=========");
// Assignment no 4
console.log("Albert Einstein once said, \"If you can't explain it simply, you don't understand it well enough.\"");
console.log("=========");
// Assignment no 5
var famousPerson = "Albert Einstein";
var famousQuote = "It's not that I'm so smart, it's just that I stay with problems longer.";
console.log("".concat(famousPerson, " once said, \"").concat(famousQuote, "\""));
console.log("=========");
// Assignment no 6
var strippedNames = "\tAlbert\nEinstein\t";
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
var myFavoriteNumber = 18;
console.log("My Favorite number is: ".concat(myFavoriteNumber));
console.log("=========");
// Assignment no 10
var favoriteNumber = 18;
console.log("My Favorite number is: ".concat(favoriteNumber));
console.log("=========");
// Assignment no 11
var namesListOne = ["Ali", "Ahmad", "Abdul"];
for (var i = 0; i < namesListOne.length; i++) {
    console.log(namesListOne[i]);
}
console.log("=========");
// Assignment no 12
var namesListTwo = ["Ali", "Ahmad", "Abdul"];
for (var i = 0; i < namesListTwo.length; i++) {
    console.log("Hello ".concat(namesListTwo[i]));
}
console.log("=========");
// Assignment no 14
var transportList = ["Honda 125", "Range Rover"];
for (var i = 0; i < transportList.length; i++) {
    console.log("I would like to own a ".concat(transportList[i]));
}
console.log("=========");
// Assignment no 15
var guestsListOne = [
    "Imran Khan",
    "Shahid Afridi",
    "Virat Kohli",
    "Babar Azam",
];
for (var i = 0; i < guestsListOne.length; i++) {
    console.log("".concat(guestsListOne[i], " Sir, I would like to invite you on a dinner."));
}
console.log("=========");
// Assignment no 16
var guestsListTwo = [
    "Imran Khan",
    "Shahid Afridi",
    "Virat Kohli",
    "Babar Azam",
];
for (var i = 0; i < guestsListTwo.length; i++) {
    if (guestsListTwo[i] == "Virat Kohli") {
        console.log("".concat(guestsListTwo[i], " Sir, No worries if you are unable to attend."));
        guestsListTwo[i] = "Misbah ul haq";
        console.log("".concat(guestsListTwo[i], "  Sir, I would like to invite you on a dinner."));
    }
    else {
        console.log("".concat(guestsListTwo[i], " Sir, I would like to invite you on a dinner."));
    }
}
console.log("Total guestsList: ".concat(guestsListTwo.length));
console.log("=========");
// Assignment no 17
var guestListFour = [
    "Imran Khan",
    "Shahid Afridi",
    "Virat Kohli",
    "Babar Azam",
];
guestListFour.push("Nawaz Sharif");
guestListFour.unshift("Shoaib Malik");
guestListFour.splice(guestListFour.length / 2, 0, "Shahrukh Khan");
console.log("Sir I got a bigger dinner table I invited 3 more personalities");
for (var i = 0; i < guestListFour.length; i++) {
    if (guestListFour[i] == "Virat Kohli") {
        console.log("".concat(guestListFour[i], " Sir, No worries if you are unable to attend."));
        guestListFour[i] = "Misbah ul haq";
        console.log("".concat(guestListFour[i], "  Sir, I would like to invite you on a dinner."));
    }
    else {
        console.log("".concat(guestListFour[i], " Sir, I would like to invite you on a dinner."));
    }
}
console.log("Total guestsList: ".concat(guestListFour.length));
console.log("=========");
// Assignment no 18
var guestsListThree = [
    "Imran Khan",
    "Shahid Afridi",
    "Virat Kohli",
    "Babar Azam",
];
console.log("Sorry Guests I have just capacity of 2 guest only so I have to reduce my list");
var newArray = __spreadArray([], guestsListThree, true);
for (var i = 0; i < guestsListThree.length; i++) {
    if (i <= 1) {
        console.log("".concat(guestsListThree[i], "  Sir, I would like to invite you on a dinner."));
    }
    else {
        console.log("".concat(guestsListThree[i], " Sorry sir I don't have space"));
        newArray.pop();
    }
}
guestsListThree = newArray;
console.log("Total guestsList: ".concat(guestsListThree.length));
console.log("Now Clearing the Array");
guestsListThree.length = 0;
console.log("Total guestsList: ".concat(guestsListThree.length));
console.log("=========");
// Assignment no 19
var locationsList = ["Canada", "USA", "Brazil", "Russia", "UK"];
console.log("array is not in alphabetical order", locationsList);
var clonedArrayForAlphabeticalSort = __spreadArray([], locationsList, true);
var sortedArrayAlphabetical = clonedArrayForAlphabeticalSort.sort();
console.log("alphabetical order sorted", sortedArrayAlphabetical);
console.log("array in its original order", locationsList);
var clonedArrayForReverseAlphabeticalSort = __spreadArray([], locationsList, true);
var sortedArrayReverseAlphabetical = clonedArrayForReverseAlphabeticalSort.sort(function (a, b) { return (a > b ? -1 : 1); });
console.log("reverse alphabetical order sorted", sortedArrayReverseAlphabetical);
console.log("array in its original order", locationsList);
console.log("=========");
// Assignment no 20
var finalGuestsList = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], guestsListOne, true), guestsListTwo, true), guestsListThree, true), guestListFour, true).filter(function (value, index, self) { return self.indexOf(value) === index; });
console.log("Final Guests who are invited", finalGuestsList);
console.log("=========");
// Assignment no 21
var addThingsToArrayOne = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var thingsArray = items;
    console.log("ThingsArray =>", thingsArray);
};
addThingsToArrayOne("Mountains", "rivers", "countries", "cities");
console.log("=========");
// Assignment no 22
var addThingsToArray = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var thingsArrayTwo = items;
    var thingsObject = {};
    for (var i = 0; i < thingsArrayTwo.length; i++) {
        var thing = thingsArrayTwo[i];
        var value = thingsArrayTwo[i];
        thingsObject[thing] = value;
    }
    console.log("thingsObject =>", thingsObject);
};
addThingsToArray("Mountains", "rivers", "countries", "cities");
console.log("=========");
// Assignment no 23
var carsList = ["Buggati", "Ferrari", "RangRover"];
var indexToFind = 3;
console.log("array index error", carsList[indexToFind]);
indexToFind = 2;
console.log("Corrected array index error", carsList[indexToFind]);
console.log("=========");
// Assignment no 24
var carName = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(carName == "subaru");
var bikeName = "honda70";
console.log("Is bike == 'honda70'? I predict True.");
console.log(bikeName == "honda70");
var laptopName = "macbook";
console.log("Is laptop == 'macbook'? I predict True.");
console.log(laptopName == "macbook");
var phoneName = "iphone";
console.log("Is phone == 'iphone'? I predict True.");
console.log(phoneName == "iphone");
var cycleName = "phoneix";
console.log("Is cycle == 'phoneix'? I predict True.");
console.log(cycleName == "phoneix");
var myNameCheck = "hamza";
console.log("Is myName == 'Ali'? I predict False.");
console.log(myNameCheck == "Ali");
var myAge = 26;
console.log("Is myAge == 28? I predict False.");
console.log(myAge == 28);
var isAdmin = "No";
console.log("Is isAdmin == 'Yes'? I predict False.");
console.log(isAdmin == "Yes");
var myFavouriteColor = "Black";
console.log("Is myFavouriteColor == 'Green'? I predict False.");
console.log(myFavouriteColor == "Green");
var myFavouriteFood = "Biryani";
console.log("Is myFavouriteFood == 'Shawarma'? I predict False.");
console.log(myFavouriteFood == "Shawarma");
console.log("=========");
// Assignment no 25
var num = 1;
console.log("Value of num == 2", num == 2);
var numTwo = 1;
console.log("Value of num != 1", numTwo != 1);
var myNameCheckLower = "Hamza";
console.log("lower case string", myNameCheckLower == "hamza");
var num1 = 10;
var num2 = 5;
console.log(">=&&||", num1 >= 5 && num1 <= 5 || num2 >= 5 && num2 <= 5);
var myNewArrayOne = [1, 2, 5, 6];
var numberToCheck = 5;
var isNumberAvailable = false;
for (var i = 0; i < myNewArrayOne.length; i++) {
    if (myNewArrayOne[i] == numberToCheck) {
        isNumberAvailable = true;
        break;
    }
}
console.log("Check for the number available in the array: ", isNumberAvailable);
console.log("=========");
// Assignment no 26
var alienColor = "green";
var colorCheckerOne = function (clr) {
    if (alienColor == clr) {
        console.log("You earned 5 points");
    }
    else {
        console.log("no OutPut");
    }
};
colorCheckerOne("green");
colorCheckerOne("red");
console.log("=========");
// Assignment no 27
var alienColorTwo = "green";
var colorCheckerTwo = function (clr) {
    if (clr == alienColorTwo) {
        console.log("You earned 5 points");
    }
    else if (clr == "red") {
        console.log("You earned 10 points");
    }
    else {
        console.log("no OutPut");
    }
};
colorCheckerTwo("green");
colorCheckerTwo("red");
colorCheckerTwo("blue");
console.log("=========");
// Assignment no 28
var alienColorThree = "green";
var colorCheckerThree = function (clr) {
    if (clr == alienColorThree) {
        console.log("You earned 5 points");
    }
    else if (clr == "yellow") {
        console.log("You earned 10 points");
    }
    else if (clr == "red") {
        console.log("You earned 15 points");
    }
    else {
        console.log("no OutPut");
    }
};
colorCheckerThree("green");
colorCheckerThree("yellow");
colorCheckerThree("red");
console.log("=========");
// Assignment no 29
var personAgeCalculator = function (age) {
    if (age < 2) {
        console.log("person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("person is a toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log("person is a kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("person is a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("person is an adult");
    }
    else if (age >= 65) {
        console.log("person is an elder");
    }
    else {
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
var favoriteFruits = ["apple", "orange", "mango", "bananas", "peach"];
for (var i = 0; i < favoriteFruits.length; i++) {
    if (favoriteFruits[i] == "orange") {
        console.log("".concat(favoriteFruits[i], " is in my favorite fruits list"));
    }
    else if (favoriteFruits[i] == "bananas") {
        console.log("".concat(favoriteFruits[i], " is in my favorite fruits list"));
    }
    else if (favoriteFruits[i] == "apple") {
        console.log("".concat(favoriteFruits[i], " is in my favorite fruits list"));
    }
    else if (favoriteFruits[i] == "mango") {
        console.log("".concat(favoriteFruits[i], " is in my favorite fruits list"));
    }
    else {
        console.log("I don't like this fruit");
    }
}
console.log("=========");
// Assignment no 31
var usersOnWebsite = ["Ahmad", "Ali", "Abdullah", "Hamza", "Akbar"];
for (var i = 0; i < usersOnWebsite.length; i++) {
    if (usersOnWebsite[i] == "Ahmad") {
        console.log("Hello ".concat(usersOnWebsite[i], ", thank you for logging in again"));
    }
    else if (usersOnWebsite[i] == "Hamza") {
        console.log("Hello admin ".concat(usersOnWebsite[i], " thank you for logging in"));
    }
    else if (usersOnWebsite[i] == "Ali") {
        console.log("Hello ".concat(usersOnWebsite[i], ", thank you for logging in again"));
    }
    else if (usersOnWebsite[i] == "Abdullah") {
        console.log("Hello ".concat(usersOnWebsite[i], ", thank you for logging in again"));
    }
    else if (usersOnWebsite[i] == "Akbar") {
        console.log("Hello ".concat(usersOnWebsite[i], ", thank you for logging in again"));
    }
    else {
        console.log("No user exists with that name");
    }
}
console.log("=========");
// Assignment no 32
var usersOnWebsiteTwo = ["Ahmad", "Ali", "Abdullah", "Hamza", "Akbar"];
if (usersOnWebsiteTwo.length == 0) {
    console.log("We need to find some users!");
}
else {
    while (usersOnWebsiteTwo.length > 0) {
        usersOnWebsiteTwo.pop();
    }
    console.log("No users found!", usersOnWebsiteTwo.length);
}
console.log("=========");
// Assignment no 33
var currentUsers = ["Bob11", "John12", "William13", "Emily14", "Martin15"];
var newUsers = ["Andy11", "Robert12", "John12", "Emmy13", "Scot12"];
var findingUserNames = function (user) {
    var findingUserIndex = currentUsers.indexOf(user);
    if (findingUserIndex != -1) {
        return "".concat(user, " needs a new username because it's already taken");
    }
    else {
        return "".concat(user, " the username is available");
    }
};
for (var i = 0; i < newUsers.length; i++) {
    console.log(findingUserNames(newUsers[i]));
}
console.log("=========");
// Assignment no 34
var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] == 1 || ordinalNumbers[i] == 2 || ordinalNumbers[i] == 3) {
    }
    else {
        console.log("".concat(ordinalNumbers[i], "th"));
    }
}
console.log("=========");
// Assignment no 35
var pizzaTypes = ["tandoori", "pepperoni", "tikka"];
for (var i = 0; i < pizzaTypes.length; i++) {
    console.log("I like ".concat(pizzaTypes[i], " pizza"));
}
console.log("Pizzas are my favorite meal \nI really like to eat them \nI really love pizza!");
console.log("=========");
// Assignment no 36
var petAnimals = ["dog", "cat", "rabbit"];
for (var i = 0; i < petAnimals.length; i++) {
    console.log("A ".concat(petAnimals[i], " would make a great pet."));
}
console.log("These animals would make a great pet!");
console.log("=========");
// Assignment no 37
var makeTShirt = function (size, textToPrint) {
    return "Size: ".concat(size, ", TextToPrint on it: ").concat(textToPrint);
};
console.log(makeTShirt("medium", "Pakistan Zindabad"));
console.log("=========");
// Assignment no 38
var makeTShirtTwo = function (textToPrint, size) {
    if (size === void 0) { size = "large"; }
    return "Size: ".concat(size, ", TextToPrint on it: ").concat(textToPrint);
};
console.log(makeTShirtTwo("I love TypeScript"));
console.log("=========");
// Assignment no 39
var describeCity = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city, " is in ").concat(country);
};
console.log(describeCity("Karachi"));
console.log(describeCity("Faisalabad"));
console.log(describeCity("Mumbai"));
console.log("=========");
// Assignment no 40
var cityCountry = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "\"".concat(city, ", ").concat(country, "\"");
};
console.log(cityCountry("Karachi", "Pakistan"));
console.log(cityCountry("Faisalabad", "Pakistan"));
console.log(cityCountry("Mumbai", "India"));
console.log("=========");
// Assignment no 41
var makeAlbum = function (artist, albumName, track) {
    if (track === void 0) { track = 1; }
    return {
        artist: artist,
        albumName: albumName,
        track: track,
    };
};
console.log(makeAlbum("Atif Aslam", "Doorie"));
console.log(makeAlbum("Arijit Singh", "Tum hi ho"));
console.log(makeAlbum("Jubin Nautiyal", "Zindagi tu bta"));
console.log("=========");
// Assignment no 42
var magicians = ["Albert", "Michael", "Steve"];
var showMagicians = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Hello Mr, ".concat(arr[i], " Magician"));
    }
};
showMagicians(magicians);
console.log("=========");
// Assignment no 43
var makeGreat = function (arr) {
    return arr.map(function (item) { return "Great ".concat(item); });
};
showMagicians(makeGreat(magicians));
console.log("=========");
// Assignment no 44
var copyArrayMagicians = __spreadArray([], magicians, true);
showMagicians(makeGreat(copyArrayMagicians));
console.log(magicians);
console.log("=========");
// Assignment no 45
var prepareSandwiches = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var summaryOfSandwich = {};
    var countOfDishes = 1;
    for (var i = 0; i < items.length; i++) {
        summaryOfSandwich["item ".concat(countOfDishes)] = items[i];
        countOfDishes = ++countOfDishes;
    }
    return summaryOfSandwich;
};
console.log(prepareSandwiches("sauce", "corn", "black pepper"));
console.log(prepareSandwiches("pickle", "corn", "capsicum"));
console.log(prepareSandwiches("green chilli", "corn", "lentils"));
console.log("=========");
// Assignment no 46
var storeInformationAboutCar = function (manufacturer, model, color) {
    return {
        manufacturer: manufacturer,
        model: model,
        color: color,
    };
};
console.log(storeInformationAboutCar("Honda", "Civic", "Grey"));
console.log("=========");
