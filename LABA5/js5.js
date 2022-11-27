//task 1
let product = {
  shoes:{
boots: { 
  category: "Обувь", 
  name: "Ботинки", 
  number: 4, 
  size: 43, 
  color: "коричневый", 
  price:"300$",
},
sneakers:  {
  category: "Обувь", 
  name: "Кроссовки", 
  number: 5, 
  size: 44, 
  color: "чёрный", 
  price:"300$" 
},
sandals:  {
  category: "Обувь", 
  name: "Сандалии", 
  number: 6, 
  size: 45, 
  color: "зеленый", 
  price:"400$" ,
  discount : "200$",
  final_cost: "",
  //task 5
  get lang() {
     return this.discount;
  },
  set langa(langa){
    this.final_cost = langa;
  }
},
}};
product.shoes.sandals.langa = "100$";

console.log("Вид:",product.shoes.boots.name,",","Уникальный номер товара:", product.shoes.boots.number,",","Размер обуви:",product.shoes.boots.size,",","Цвет:",product.shoes.boots.color,",","Цена:",product.shoes.boots.price);

function sayHi() {
  console.log(this.category);
  console.log("Вид:",this.name,",","Уникальный номер товара:", this.number,",","Размер обуви:",this.size,",","Цвет:",this.color,",","Цена:",this.price);
  console.log(product.shoes.sandals.lang);
  console.log(product.shoes.sandals.final_cost);
}

product.shoes.boots.f = sayHi;
product.shoes.sneakers.f = sayHi;
product.shoes.sandals.f = sayHi;

product.shoes.boots.f(); 
product.shoes.sneakers.f();
product.shoes.sandals.f();

//task 2

product[Symbol.iterator] = function* () {
  yield product.shoes.boots.category;
  yield product.shoes.boots.name;
  yield product.shoes.boots.number;
  yield product.shoes.boots.size;
  yield product.shoes.boots.color;
  yield product.shoes.boots.price;
  yield product.shoes.sneakers.category;
  yield product.shoes.sneakers.name;
  yield product.shoes.sneakers.number;
  yield product.shoes.sneakers.size;
  yield product.shoes.sneakers.color;
  yield product.shoes.sneakers.price;
  yield product.shoes.sandals.category;
  yield product.shoes.sandals.name;
  yield product.shoes.sandals.number;
  yield product.shoes.sandals.size;
  yield product.shoes.sandals.color;
  yield product.shoes.sandals.price;
};
console.log(...product);

//task 3
let result = {};

for (i in product.shoes) {
  let filter = product.shoes[i]
  // Ниже условие фильтрации
  if (filter.size > 64 || filter.price === '400$' || filter.color ==='зеленый') {
    result[i] = filter
  }
}

console.log(result);
//task 4

var boots = new Object ({
  category: "Обувь", 
  name: "Кроссовки", 
  number: 9, 
  size: 33, 
  color: "чёрный", 
  price:"800$"
});

Object.defineProperty(boots,'naga',{
value: boots.number,
//configurable:true,
writable:false
});

// delete boots.niga;
// boots.niga =10;
console.log(boots.naga);

var sneakers = new Object ({
  category: "Обувь", 
  name: "Кроссовки", 
  number: 9, 
  size: 33, 
  color: "чёрный", 
  price:"900$"
});


var sandals = new Object ({
  category: "Обувь", 
  name: "Кроссовки", 
  number: 9, 
  size: 22, 
  color: "чёрный", 
  price:"1000$"
});

function SayHi(){
  console.log(this.category);
  console.log("Вид:",this.name,",","Уникальный номер товара:", this.number,",","Размер обуви:",this.size,",","Цвет:",this.color,",","Цена:",this.price);
};

boots.f =  SayHi;
boots.f();
sneakers.f= SayHi;
sneakers.f();
sandals.f = SayHi;
sandals.f(); 