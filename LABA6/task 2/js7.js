class Product {  
addPage(){
var img1 = new Image();
    img1.src = 'image/noutbook1.jpg';
    document.body.appendChild(img1);

var elems = document.getElementsByTagName('img');
for(var i=0; i<elems.length; i++)
 elems[i].style.width='400px';
      };
addElement() {

var newDiv = document.createElement("div");
        newDiv.innerHTML = "<p>Asus TUF Gaming Dash F15 FX516PC-HN558</p><p>1000$</p>";

var my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, my_div);
};
addPage2(){
var img1 = new Image();
    img1.src = 'image/noutbook2.jpg';
    document.body.appendChild(img1);

var elems = document.getElementsByTagName('img');
    for(var i=0; i<elems.length; i++)
     elems[i].style.width='400px';
  };
addElement2() {
var newDiv2 = document.createElement("div");
    newDiv2.innerHTML = "<p>Asus TUF Gaming F15 FX506LHB-HN323</p><p>1000$</p>";

var my_div = document.getElementById("org_div2");
document.body.insertBefore(newDiv2, my_div);
};
addPage3(){
var img1 = new Image();
    img1.src = 'image/noutbook3.jpg';
    document.body.appendChild(img1);

var elems = document.getElementsByTagName('img');
    for(var i=0; i<elems.length; i++)
     elems[i].style.width='400px';
  };
addElement3() {
var newDiv3 = document.createElement("div");
    newDiv3.innerHTML = "<p>Asus VivoBook 15 OLED K513EA-L12078</p><p>1000$</p>";

var my_div = document.getElementById("org_div3");
document.body.insertBefore(newDiv3, my_div);
};
addPage4(){
var img1 = new Image();
    img1.src = 'image/noutbook4.jpg';
    document.body.appendChild(img1);

var elems = document.getElementsByTagName('img');
    for(var i=0; i<elems.length; i++)
     elems[i].style.width='400px';
  };
addElement4() {
var newDiv4 = document.createElement("div");
    newDiv4.innerHTML = "<p>Asus P1512CEA-EJ0036</p><p>1000$</p>";

var my_div = document.getElementById("org_div4");
document.body.insertBefore(newDiv4, my_div);
};
addPage5(){
var img1 = new Image();
    img1.src = 'image/noutbook4.jpg';
    document.body.appendChild(img1);
    img1.remove();
    
  };
addElement5() {
var newDiv5 = document.createElement("div");
    newDiv5.innerHTML = "<p>Asus P1512CEA-EJ0036</p><p>1000$</p>";

var my_div = document.getElementById("org_div4");
    document.body.insertBefore(newDiv5, my_div);
    newDiv5.firstChild.remove();
    newDiv5.firstChild.remove();
};
};

class Button{
addButton(){

let btn = document.createElement('button');
let textInBtn = document.createTextNode('В корзину');
btn.appendChild(textInBtn);

document.body.appendChild(btn);
};
addButton2(){

    let btn2 = document.createElement('button');
    let textInBtn2 = document.createTextNode('В корзину');
    btn2.appendChild(textInBtn2);
    
    document.body.appendChild(btn2);
};
addButton3(){

    let btn3 = document.createElement('button');
    let textInBtn3 = document.createTextNode('В корзину');
    btn3.appendChild(textInBtn3);
    
    document.body.appendChild(btn3);
};
addButton4(){

    let btn4 = document.createElement('button');
    let textInBtn4 = document.createTextNode('В корзину');
    btn4.appendChild(textInBtn4);
    
    document.body.appendChild(btn4);
};
addButton5(){

    let btn5 = document.createElement('button');
    let textInBtn5 = document.createTextNode('Корзина');
    btn5.appendChild(textInBtn5);
    
    document.body.appendChild(btn5);
};   
};

new Product().addPage();
new Product().addElement();
new Product().addPage2();
new Product().addElement2();
new Product().addPage3();
new Product().addElement3();
new Product().addPage4();
new Product().addElement4();
new Product().addPage5();
new Product().addElement5();

new Button().addButton();
new Button().addButton2();
new Button().addButton3();
new Button().addButton4();
new Button().addButton5();