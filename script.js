//Exercises:Level 1
/*
1) create an empty set
2) Create a set containing 0 to 10 using loop
3) Remove an element from a set
4) Clear a set
5) Create a set of 5 string elements from array
6) Create a map of countries and number of characters of a country
*/

// Soluion 1
let emptySet = new Set();

// Solution 2
let val = 10;
let valNum = [];
for (let i = 0; i <= val; i++) {
  valNum.push(i);
}

const newSetNum = new Set(valNum);
console.log(newSetNum);

// Solution 3
console.log(newSetNum.delete(2));
console.log(newSetNum);

// Solution 4
console.log(newSetNum.clear());

// Solution 5
let worldCountries = [
  "Albania",
  "USA",
  "France",
  "Japan",
  "Indonesia",
  "Finland",
  "greece",
  "greece",
  "Italy",
  "Italy",
  "Germany",
  "Germany",
  "USA",
  "Frace",
  "Finland",
];
let countriesSet = new Set(worldCountries);
let countryPush = [];

for (let count of countriesSet) {
  let countryArray = worldCountries.filter((country) => country === count);
  countryPush.push(countryArray);
}
console.log(countryPush, "**");
// Solution 6
let countries = [
  "France",
  "Germany",
  "France",
  "Germany",
  "Senegal",
  "USA",
  "Turkey",
  "USA",
];
const countryMap = new Set(countries);
console.log(countryMap);
let counts = [];

for (const cont of countryMap) {
  let countryLength = cont.length;
  counts.push({ country: cont, characterLength: countryLength });
}

console.log(counts);

// Exercises:Level 2
/*
1) Find a union b
2) Find a intersection b
3) Find a with b
*/

console.log("");
console.log("");
console.log("");
console.log("");
console.log("Solution Exercise =============== 2");

// Solution 1
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = [...a, ...b];
let C = new Set(c);
console.log(C);

// Solution 2
let d = a.filter((num) => B.has(num));
let D = new Set(d);
console.log(D);

// Solution 3
let e = a.filter((num) => !B.has(num));
let E = new Set(e);
console.log(E);

//Exercises:Level 3
/*
1) How many languages are there in the countries object file.

2) Use the countries data to find the 10 most spoken languages:
*/
console.log("");
console.log("");
console.log("");
console.log("");
console.log("Solution Exercise =============== 3");

// Solution 1 // IMPROVE THIS Solution
const countriesObj = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 78014,
    flag: "https://restcountries.eu/data/and.svg",
    currency: "Euro",
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 25868000,
    flag: "https://restcountries.eu/data/ago.svg",
    currency: "Angolan kwanza",
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://restcountries.eu/data/aia.svg",
    currency: "East Caribbean dollar",
  },
  {
    name: "Antarctica",
    capital: "",
    languages: ["English", "Russian"],
    population: 1000,
    flag: "https://restcountries.eu/data/ata.svg",
    currency: "Australian dollar",
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    languages: ["English"],
    population: 86295,
    flag: "https://restcountries.eu/data/atg.svg",
    currency: "East Caribbean dollar",
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Spanish", "Guaraní"],
    population: 43590400,
    flag: "https://restcountries.eu/data/arg.svg",
    currency: "Argentine peso",
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian", "Russian"],
    population: 2994400,
    flag: "https://restcountries.eu/data/arm.svg",
    currency: "Armenian dram",
  },
  {
    name: "Aruba",
    capital: "Oranjestad",
    languages: ["Dutch", "(Eastern) Punjabi"],
    population: 107394,
    flag: "https://restcountries.eu/data/abw.svg",
    currency: "Aruban florin",
  },
  {
    name: "Australia",
    capital: "Canberra",
    languages: ["English"],
    population: 24117360,
    flag: "https://restcountries.eu/data/aus.svg",
    currency: "Australian dollar",
  },
  {
    name: "Austria",
    capital: "Vienna",
    languages: ["German"],
    population: 8725931,
    flag: "https://restcountries.eu/data/aut.svg",
    currency: "Euro",
  },
  {
    name: "Azerbaijan",
    capital: "Baku",
    languages: ["Azerbaijani"],
    population: 9730500,
    flag: "https://restcountries.eu/data/aze.svg",
    currency: "Azerbaijani manat",
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    languages: ["English"],
    population: 378040,
    flag: "https://restcountries.eu/data/bhs.svg",
    currency: "Bahamian dollar",
  },
  {
    name: "Bahrain",
    capital: "Manama",
    languages: ["Arabic"],
    population: 1404900,
    flag: "https://restcountries.eu/data/bhr.svg",
    currency: "Bahraini dinar",
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    languages: ["Bengali"],
    population: 161006790,
    flag: "https://restcountries.eu/data/bgd.svg",
    currency: "Bangladeshi taka",
  },
];

let counter = [];
let countObj = {};

let newCounteriesSet = new Set(countriesObj);

for (let cout of newCounteriesSet) {
  let counted = cout.languages.map((cot) => cot);
  console.log(counted);
  counter.push({ languages: cout.languages, count: counted.length });
}

console.log(counter);
