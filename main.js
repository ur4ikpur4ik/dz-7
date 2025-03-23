let sumArray = [1, 2, 3, 4, 5];
let sum = sumArray.reduce((acc, num) => acc + num, 0);
console.log("Сума чисел у масиві: ", sum);
let fiveNumbers = [10, 20, 30, 40, 50];
for (let num of fiveNumbers) {
    console.log(num);
}
let fiveStrings = ["короткий", "довгийрядок", "щеодин", "hello", "привітання"];
for (let str of fiveStrings) {
    if (str.length > 5) {
        console.log(str);
    }
}
let tenNumbers = [3, 7, 12, 45, 78, 23, 89, 100, 56, 34];
let maxNumber = Math.max(...tenNumbers);
console.log("Максимальне число: ", maxNumber);
let evenNumbers = tenNumbers.filter(num => num % 2 === 0);
console.log("Парні числа: ", evenNumbers);