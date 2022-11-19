function task (){

var products = {};
products[Symbol.iterator] = function* (){
let x = prompt("Обувь:ботинки,кроссовки,санадлии.",'');
switch(x){
    yield 1;
    case 'ботинки':
        var boot = new Object();
        boot.number= 1 ;
        boot.size = 44;
        boot.colour = "чёрный";
        boot.money = "200 рублей";
        console.log(boot.number);
        console.log(boot.size);
        console.log(boot.colour);
        console.log(boot.money);
        break;
    case 'кроссовки':
        var sneakers = new Object();
        sneakers.number= 1;
        sneakers.size = 44;
        sneakers.colour = "чёрный";
        sneakers.money = "200 рублей";
        console.log(sneakers.number);
        console.log(sneakers.size);
        console.log(sneakers.colour);
        console.log(sneakers.money);
        break;
    case 'сандалии':
        break;
    default:
        prompt("Error");
        break;
}
let arr = [boot,sneakers];
for (let value of arr) {
    alert(value); 
  }
}
}
task();

var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]