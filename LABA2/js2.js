
////////// 1 +

CreateCircleInfo( Number( prompt("Введите радиус окружности",'') ) );

function CreateCircleInfo(radius){
    let circleDiameter = radius * 2;
    let circleLenght = Math.PI * circleDiameter;
    let circleArea = Math.PI * radius ** 2;
    alert(`Диаметр - ${circleDiameter}, Длина окружности - ${circleLenght}, Площадь - ${circleArea}`);
}

///////////////// 2

Shopping();

function Shopping(){
    let maxSum = Number( prompt("Введите сумму ваших денежек",'') );
    let sum = null;
    let costOfGoods = null;

    while(true){
         costOfGoods = Number( prompt("Введите стоимость товара или 0 если хотите закончить",'') );

         if (costOfGoods == 0) break;

         if(sum + costOfGoods > maxSum){
              alert("Купите что подешевле или уходите)");
              continue;
         }
    
         sum += costOfGoods;

         alert(`У вас осталось - ${ maxSum - sum}`)
    }

    alert(`Спасибо за покупки! Сумма ваших товаров - ${sum}`)
}

///////////// 3 +

let stroka = Parm( undefined, " world", prompt( "Введите !!!", '') );
alert(stroka);

function Parm(firstParam = "Hello" , secondParam, thirdParam){
    //console.log(`${firstParam} ${secondParam} ${thirdParam}`);

    return firstParam + secondParam + thirdParam;
}

//////////// 4 +

let sumOfStudent = NumberofStudents();
alert(`Всего пришло ${sumOfStudent} студентa(ов)`);

function NumberofStudents(){
    let sumOfStudent = -1;
    let addStudent = true;

    while(addStudent){
        addStudent = prompt("Введите имя пришедшего студента", '');
        sumOfStudent++;
    }

    return sumOfStudent;
}

///////////////// 5

let a = 13;
let b = 10;
// console.log( params(a, b) );

// function params(a, b){
//     return a == b ? a*4 : a*b;
// }
let params = function(a, b){
    console.log(a == b ? a*4 : a*b);
    return a == b ? a*4 : a*b;

}
console.log(params);

//////////////////// 6 +

let variants = FindVariants(3, 5);
FindTime(variants);

function FindVariants(numbers, letters){
    return Math.pow(26, letters) * Math.pow(10, numbers);
}

function FindTime(variants){
    let seconds = variants * 3;

    let minutes = Math.trunc(seconds / 60);
    seconds = seconds % 60;
    //console.log(seconds);

    let hours = Math.trunc(minutes / 60);
    minutes = minutes % 60;
    //console.log(minutes);

    let days = Math.trunc(hours / 24);
    hours = hours % 24;
    //console.log(hours);

    let mounths = Math.trunc(days / 30);
    days = days % 30;
    //console.log(days);

    let years = Math.trunc(mounths / 12);
    mounths = mounths % 12;
    //console.log(mounths);
    //console.log(years);
    alert(`${years} лет ${mounths} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`)
}

//// 7

let sumParm = ( firstParam = "Hello" , secondParam, thirdParam ) => firstParam + secondParam + thirdParam;

let strokaSumParm = sumParm( undefined, " world", prompt("Введите что-нибудь))", '') );
alert(strokaSumParm);
