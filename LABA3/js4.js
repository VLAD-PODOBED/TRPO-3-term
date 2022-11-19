function set(){
    let n = prompt("set n?",);
    const numbers = new Set();
    numbers.add(n);
    let k = prompt("add k?",);
    numbers.add(k);
    let m = prompt("delete m?",);
    numbers.delete(m);

    console.log(numbers.has(1));
    console.log(numbers);

    for(n of numbers){
        console.log(k);
    }
}
set()

function map(){
    const myMap = new Map();
    let n = prompt("id товара",);
    let m = prompt("цена товара",);
    myMap.set(n,m);
    let q = prompt("id товара",);
    let w = prompt("цена товара",);
    myMap.set(q,w);
    let k = prompt("удалить товар (id)",);
    myMap.delete(k);

    console.log(myMap);
    console.log(myMap.get(7));
    console.log(myMap.has(7));
    
    for(item of myMap.keys()){
        console.log(item);
    }
    for(item of myMap.values()){
        console.log(item);
    }
    for(item of myMap){
        console.log(item[0], item[1]);
    }
}

map()