// console.log('Pirma užduotis')
// const a = 7;
// const b = 5;

// if (a > b) {
//     console.log("a yra didesnis už b");
// }   else if (a < b) {
//     console.log("b yra didesnis už a");
// }   else {
//     console.log("a ir b yra lygūs");
// }

// console.log('Antra užduotis')

// for (let i = 1; i <= 10; i++) {
//         console.log(i);
//       }
    

// console.log('Trečia užduotis')
//     let n = "";
    
//     for (let i = 0; i <= 10; i += 2) {
//             n += i + " ";
//             console.log(n);
//           }

// console.log('Ketvirta užduotis')

// for (let i = 0; i < 5; i++) {
//     const randomNum = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNum);
//   }


// console.log('Penkta užduotis')

// let randomNum = 0;
// while (randomNum !== 5) {
//   randomNum = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNum);
// }

// console.log('Šešta užduotis')

// const arrLength = Math.floor(Math.random() * 11) + 20;
// const arr = [];

// for (let i = 0; i < arrLength; i++) {
//   const randomNum = Math.floor(Math.random() * 21) + 10;
//   arr.push(randomNum);
// }

// console.log(arr);

// let maxNum = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }

// console.log(`Didžiausias skaičius yra ${maxNum}.`);

// console.log('Septinta užduotis')

// const Letters = "ABCD";

// const randomLetters = [...Array(100)].map(
//   (_) => Letters[Math.floor(Math.random() * Letters.length)]
// );

// const sumA = randomLetters.reduce(
//   (sum, currentEl) => (currentEl === "A" ? sum + 1 : sum),
//   0
// );

// const sumB = randomLetters.reduce(
//   (sum, currentEl) => (currentEl === "B" ? sum + 1 : sum),
//   0
// );

// const sumC = randomLetters.reduce(
//   (sum, currentEl) => (currentEl === "C" ? sum + 1 : sum),
//   0
// );

// const sumD = randomLetters.reduce(
//   (sum, currentEl) => (currentEl === "D" ? sum + 1 : sum),
//   0
// );

// console.log(randomLetters);
// console.log(sumA, sumB, sumC, sumD);

// console.log('Aštunta užduotis')

// function lygineSuma(a, b) {
//     if (
//         (typeof a === 'number' && typeof b === 'number') ||
//         (Array.isArray(a) && Array.isArray(b))
//        ){
//         if (typeof a === 'number' && typeof b === 'number') {
//             const sum = a + b;
//             if (sum % 2 === 1) {
//                 return "Suma nelyginė";
//             } else {
//                 return sum;
//             }
//         }
//         if (Array.isArray(a) && Array.isArray(b)) {
//             const sum = a.length + b.length;
//             if (sum % 2 === 1) {
//                 return "Suma nelyginė";
//             }   else {
//                 return sum;
//             }
//         }
//         }
//         return 'Netinkami kintamieji';
// }
//     console.log(lygineSuma(4, 7));
//     console.log(lygineSuma([1, 2, 3], [4, 5, 6]));
//     console.log(lygineSuma(3, [2, 4, 6]));


// console.log('Devinta užduotis')

// function pirminisSkaicius(n) {
//     if (typeof n !== 'number') {
//       return 'Klaida: pateiktas parametras nėra skaičius.';
//     }
//     if (n < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }

//   console.log(pirminisSkaicius(5));
//   console.log(pirminisSkaicius(20));
//   console.log(pirminisSkaicius('krabas'));

// // console.log('Dešimta užduotis')

// function telefonoNumeris(numbers) {
//     const numberString = numbers.join("");

//     const areaCode = numberString.slice(0, 3);
//     const telefonoNumeris = numberString.slice(3);

//     return `(${areaCode}) ${telefonoNumeris.slice(
//         0,
//         3
//     )}-${telefonoNumeris.slice(3)}`;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const formattedNumber = telefonoNumeris(numbers);
// console.log(formattedNumber); // Atsakymas: "(123) 456-7890"

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)