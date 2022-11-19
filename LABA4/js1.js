console.log("TASK 1");

function one ()
{
    let count = 0;
    var arr = [];
    for (var i =0; i < arguments.length; i++){
        arr[i] = arguments[i];
        count ++;
        if (count < 3){
            return (console.log("не более трёх аргументов:",arguments[0]+  " " + arguments[1] + " " + arguments[2]));
        }else{
            return(console.log("всё-таки больше 3"));
        }
    }
    console.log("Имя функции:", arguments.callee.name );
}
one(1,2,3);

function two ()
{
    let count = 0;
    var arr = [];
    for (var i =0; i < arguments.length; i++){
        arr[i] = arguments[i];
        count ++;
        if (count > 3 || count < 5){
            return (console.log("более 3-х, но не более 5-ти аргументов:",typeof arguments[0]+  " " + typeof arguments[1] + " " + typeof arguments[2] + " " + typeof arguments[3]));
        }else{
            return(console.log("всё-таки меньше 3"));
        }
    }
    console.log("Имя функции:", arguments.callee.name );
    
}
two(1,2,3,4);

function tree ()
{
    let count = 0;
    var arr = [];
    for (var i =0; i < arguments.length; i++){
        arr[i] = arguments[i];
        count ++;
        if (count > 5 || count < 7){
            return (console.log("более 5-ти и не более 7-ми:",arguments.length));
        }else{
            return(console.log("всё-таки меньше 5"));
        }
    }
    console.log("Имя функции:", arguments.callee.name );
    
}
tree(1,2,3,4,5,6);

function four ()
{
    let count = 0;
    var arr = [];
    for (var i =0; i < arguments.length; i++){
        arr[i] = arguments[i];
        count ++;
        if (count > 7){
            return (console.log("количество аргументов очень большое"));
        }
    }
    console.log("Имя функции:", arguments.callee.name );
}
four(1,2,3,4,5,6,7,8);

console.log("TASK 4 - 1 choice");

function makeCountere(){
    let currentCount = 1;
    return function(){
        return currentCount++;
    }
}

let countere = makeCountere();

console.log( countere());
console.log( countere());
console.log( countere());

let countere2 = makeCountere();
console.log( countere2());

console.log("TASK 4 - 2 choice")

let currentCount = 1;
function makeCounter(){ 
    
    return function(){
        return currentCount++;
    };
    
}

let counter = makeCounter(); 
let counter2 =  makeCounter();

console.log( counter());
console.log( counter());

console.log(counter2());
console.log(counter2());

console.log("TASK 5")
one();
two();
tree();
four();
console.log("Имя функции:",makeCountere.name);
console.log("Имя функции:",makeCounter.name);
console.log("Имя функции:",volume.name);
console.log("Имя функции:",multply.name);

console.log("TASK 6")

//вариант 1
function volume(a,b,h) {
    return a * b * h;
}
const vol = volume(10,10,20)

function volume(a) {
    return (b) => {
        return (h) => {
            return a * b * h
        }
    }
}

console.log("объём прямоугольного параллелепипеда:", volume(10)(10)(20) );  

//вариант 2
function multply(a, b, h) {
    return a * b * h;
  }
  
let curriedmultply = _.curry(multply); // используем _.curry из lodash

console.log("объём прямоугольного параллелепипеда:", curriedmultply(10)(10)(20) );

console.log("TASK 7")

foo = function*() {
    let count = 0;

    let left =+ window.prompt("Введите leаt",'');   //право
    let right =+ window.prompt("Введиет right",''); //лево
    let up =+ window.prompt("Введите up:",'');      //вверх
    let down =+ window.prompt("Введите down:",'');  //вниз
    
    yield left;
    yield right;
    yield up;
    yield down;

    for (i = 0; i < 10; i++) {
        count++;
        console.log('Идём ' ,left + 10, ' шаг(oв) вправо');
      }
    for (i = 0; i < 10; i++) {
        count++;
        console.log('Идём ' ,right + 10, ' шаг(oв) влево');
      }
    for (i = 0; i < 10; i++) {
        count++;
        console.log('Идём ' ,up + 10, ' шаг(oв) вверх');
      }
    for (i = 0; i < 10; i++) {
        count++;
        console.log('Идём ' ,down + 10, ' шаг(oв) вниз');
      }
      console.log("Имя функции:", arguments.callee.name );
  };
  
  let str = '';
  for ( val of foo()) {
    str = str + val;
  }
  
console.log("Первичные координаты:",str);