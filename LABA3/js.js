
function FirstEx () {
    let comment = prompt("Комментарий",'')
    let n = 100;
    if (comment.length > n) {
        alert("Слишком длинный комментарий!");
        return;
    }
    if (comment.indexOf("кот") !== -1) {
        comment = comment.replace("кот", "*");
    }
    if (comment.indexOf("пес") !== -1) {
        let pooch = comment.indexOf("пес");
        comment = comment.substr(0, pooch) + " многоуважемый " + comment.substr(pooch);
    }
    if (comment.indexOf("собак") !== -1) {
        let dog = comment.indexOf("собак");
        comment = comment.slice(0,dog) + comment[dog].toUpperCase() + comment.slice(dog + 1);
    }
    alert(comment);
}

FirstEx();
let Week = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг  ",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
}
let User = prompt("Выберите день недели:");
let count = 0;
alert(Week[User]);
for (let i = 1; i <= 8; i++) {
    if (i % 2 !== 0) {
      alert( i )
      count++;
    }
  }
 alert(count);
  
