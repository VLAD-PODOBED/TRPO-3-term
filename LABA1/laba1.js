/*
    Функция возвращает x в степени n, только для натуральных n 
*/

let x = prompt("x?", '');
let n = prompt("n?", '');

function pow(x, n){
    let result = 1;

    for (var i = 0; i < n; i++) result *= x;
    
    return result;
}

if (n < 0){
    alert(`Степень ${n} не определяется, введите целую степень, большую 0`);
}else{
    alert( pow(x, n) );
}

// 2

let userN = "Vlad";
let city = "Minsk";
let yearOfBirth = 2003;
const COLOR_RED = "#f00";
let userAnswerT = true;
let userAnswerF = false;
let inf = Infinity;
let number = 523;
let perimeter = 120;
let userMassage = "Введенные данные неверны";

// 3

{
    let a = 5;
    let name = "Name";
    let i = 0;
    let double = 0.23;
    let result = 1/0;
    let answer = true;
    let no = null;

    console.log("Задание 3");

    console.log(typeof a);
    console.log(typeof name);
    console.log(typeof i);
    console.log(typeof double);
    console.log(typeof result);
    console.log(typeof answer);
    console.log(typeof no);
}

// 4 - 5 

let quadrilateralA = 45;
let quadrilateralB = 21;
console.log("Задание 4 - 5");
console.log( square(quadrilateralA, quadrilateralB) );
console.log( quantitySquare(quadrilateralA, quadrilateralB, 5) );

//6

let i = 2;
let a = ++i;
let b = i++;
console.log("Задание 6");
if(a < b) console.log("a < b");
if(a > b) console.log("a > b");
if(a == b) console.log("a = b");

// 7

console.log("Задание 7");

let data1 = "Привет";
let data2 = "привет"
console.log( comparesData(data1, data2) );

data1 = "Привет";
data2 = "Пока";
console.log( comparesData(data1, data2) );

data1 = 45;
data2 = "53";
console.log( comparesData(data1, data2) );

data1 = false;
data2 = 3;
console.log( comparesData(data1, data2) );

data1 = true;
data2 = "3";
console.log( comparesData(data1, data2) );

data1 = 3;
data2 = "5мм";
console.log(data1 == data2);

data1 = null;
data2 = undefined;
console.log( comparesData(data1, data2) );

// 8

alert("Введенные пользователем данные неверные");

// 9

let result = prompt("2*2", '');

if (result == 4){
    alert("Ответ верный");
}else{
    alert("Ответ не верный");
}

//10

let userLogin = prompt("Введите логин", 'vladpodobed');
let userPassword = prompt("Введите пароль", 'podobed');

if (userLogin == "vladpodobed" && userPassword == "podobed"){
    alert("Вход успешно выполнен");
}else{
    alert("Неверный логин или пароль");
}

// 11

let math = true;
let russian = true;
let english = true;

console.log("Задание 11");

if(math && russian && english){
    console.log("Студент переведен на следующий курс");
}else if(math || russian || english){
    console.log("Студента ожидает пересдача");
}else{
    console.log("Студент отчислен");
}

// 12

let A = Number( prompt("Введите А") );
let B = Number( prompt("Введите B") );

alert(`Сумма чисел = ${A+B}`);

// 13

console.log("Задание 13")

console.log(true + true);
console.log(0 + "5");
console.log(5 + "мм");
console.log(8 / Infinity);
console.log(9 * "\n9");
console.log(null - 1);
console.log("5" - 2);
console.log("5px" - 3);
console.log(true - 3);
console.log(7 || 0);

// 14

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let j = 0; j < 10; j++){
    if(array[j] % 2 == 0){
        array[j] += 2;
    }else{
        array[j] = `${array[j]}` + "mm";
    }

    console.log(array[j]);    
}

// 15

let userNumber = prompt("Введите число больше 100", '');

while( Number(userNumber) < 100 ){
    userNumber = prompt("Попробуйте ввести число больше 100 еще разок!", '');
}

// 16

let dayNumber = prompt("Введите номер дня недели", '');

switch( Number(dayNumber) ){
    case 1: 
        alert("Понедельник");
        break;
    case 2: 
        alert("Вторник");
        break;
    case 3: 
        alert("Среда");
        break;
    case 4: 
        alert("Четверг");
        break;
    case 5: 
        alert("Пятница");
        break;
    case 6: 
        alert("Суббота");
        break;
    case 7: 
        alert("Воскресенье");
        break
    default: alert("В нашем календарике нет такого дня недели :(");
}

function comparesData(data1, data2){
    if(data1 < data2) return `${data1} < ${data2}`;
    if(data1 > data2) return `${data1} > ${data2}`;
    if (data1 == data2) return `${data1} = ${data2}`;
}

function square(quadrilateralA, quadrilateralB){
    return quadrilateralA * quadrilateralB;
}

function quantitySquare(quadrilateralA, quadrilateralB, square){
    return parseInt(quadrilateralA / square) * parseInt(quadrilateralB / square);
}
