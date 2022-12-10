let products = new Array();

class Product{
    constructor(id, price, name, img, background){
        this.id = id;   
        this.price = price;
        this.name = name;
        this.img = img;
        this.background = background;
        products.push(this);
    }

    addOnPage(){
        let div = document.createElement('div');
        div.className = "infoblock";
        div.style.width = '250px';
        div.style.height = '350px';
        div.style.textAlign = 'center';
        div.style.background = this.background;

        allProducts.append(div);
        allProducts.style.width = '100%';
        allProducts.style.display = 'flex';
        allProducts.style.flexWrap = 'wrap';
        let img = document.createElement('img');
        img.src = this.img;
        img.style.width = '200px';
        img.style.height = '200px';
        div.prepend(img);

        let p = document.createElement('p');
        p.innerHTML = this.name;
        p.style.fontSize = '20px';
        p.style.fontWeight = 'bold';
        div.append(p);
        let p2 = p.cloneNode(true);
        p2.innerHTML = this.price + " $";
        p2.style.fontSize = '12px';
        div.append(p2);
        let button = new Button(150, 75, 'blue','Buy now');
        div.append(button.addButton()); 
        
    }

    Delete(id){
        let massive = document.getElementsByClassName('infoblock');
        for(let x = 0; x < massive.length; x++){
            if((x+1) == id){
                massive[x].remove();
            }
        }
        let size = Object.getOwnPropertyNames(this);
        for(let i = 0; i < size.length; i++){
            delete this[size[i]];
        }
    }
    
}

class Button{

    constructor(width, height, background, text){
        this.width = width;
        this.height = height;
        this.text = text;
        this.background = background;
    }

    addButton(){
        let button = document.createElement('button');
        button.innerHTML = this.text;
        button.id = this.id;
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.style.color = 'white';
        button.style.border = '5px solid blue';
        button.style.borderRadius = '5px';
        return button;
    }
}

function backgroundOdd(){
    let massive = document.getElementsByClassName('infoblock');
    for(let i = 0 ; i < massive.length; i++){
        if((i+1) % 2 ==1 || (i+1) == 1 || (i+1) == 0){
            massive[i].style.background = 'gray';
        }
    }
}
let cartButton = new Button("we",150, 75, 'blue','Cart');
document.body.prepend(cartButton.addButton());

let first = new Product(1, 10000,'Asus TUF Gaming Dash F15 FX516PC-HN558', "noutbook1.jpg", 'white');
first.addOnPage();
let second = new Product(2, 15000,'Asus TUF Gaming F15 FX506LHB-HN323', "noutbook2.jpg", 'white');
second.addOnPage();
let third = new Product(3, 20000,'Asus VivoBook 15 OLED K513EA-L12078', "noutbook3.jpg", 'white');
third.addOnPage();
let fourth = new Product(4, 25000,'Asus P1512CEA-EJ0036', "noutbook4.jpg", 'white');
fourth.addOnPage();
let fiveth = new Product(5, 30000,'Asus TUF Gaming Dash F15 FX516PC-HN558', "noutbook1.jpg", 'white');
fiveth.addOnPage();
let sixth = new Product(6, 35000,'Asus TUF Gaming F15 FX506LHB-HN323', "noutbook2.jpg", 'white');
sixth.addOnPage();
backgroundOdd();
sixth.Delete(6);

const but = document.createElement('button');

but.setAttribute("id","qwe");
const cont = document.querySelector('body');
cont.append(but);
qwe.onclick = function() {
    let i = 1;
    first.Delete(i);
    i++;
  };
  but.innerText = "DEL"

  const buta = document.createElement('button');

buta.setAttribute("id","asd");
cont.append(buta);
asd.onclick = function() {
    let first = new Product(1, 10000,'Asus TUF Gaming F15 FX506LHB-HN323', "noutbook4.jpg", 'white');
    first.addOnPage();
  };
buta.innerText = "ADD";
buta.style.width = 200;
// new Product().addPage();
// new Product().addElement();
// new Product().addPage2();
// new Product().addElement2();
// //new Product().addPage3();
// new Product().addElement3();
// new Product().addPage4();
// new Product().addElement4();
// new Product().addPage5();
// new Product().addElement5();

// new Button().addButton();
// new Button().addButton2();
// new Button().addButton3();
// new Button().addButton4();
// new Button().addButton5();