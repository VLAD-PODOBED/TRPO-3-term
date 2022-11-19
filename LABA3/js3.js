
function SetBottomStyle(){
    document.getElementById('button-id').style.background = 'yellow'
    document.getElementById('button-id1').style.background = 'yellow'
    document.getElementById('button-id2').style.background = 'yellow'
    document.getElementById(BottomId).style.background = BottomStyleObject.background;
    document.getElementById(BottomId).style.width=BottomStyleObject.width
    

    let BottomStyleObject ={
        bg: "green",
        Wd:"150px",
        hd: "100px", 
        tcol: "red"};

    let LinkStyleObject ={
        bg: "blue", 
        tcol: "green"};

    let TextStyleObject ={
        tcol: "green", 
        FontSize: "50px"};

    let obj = Object.assign({},BottomStyleObject,LinkStyleObject,TextStyleObject);
    
    SetBottomStyle(obj, "button-id");
    SetBottomStyle(obj, "button-id1");
    SetBottomStyle(obj, "button-id2");
    
    SetBottomStyle(obj, "a-1");
    SetBottomStyle(obj, "a-2");
    
    SetH1Style(obj, "h-1");
        
    function SetBottomStyle(obj, BottomId){
        document.getElementById(BottomId).style.background = obj.bg;
        document.getElementById(BottomId).style.width=obj.Wd;
        document.getElementById(BottomId).style.height = obj.hd;
        document.getElementById(BottomId).style.color = obj.tcol;
    }
    
    function SetBottomStyle(obj, LinkID){
        document.getElementById(LinkID).style.background = obj.bg;
        document.getElementById(LinkID).style.width=obj.Wd;
        document.getElementById(LinkID).style.height = obj.hd;
        document.getElementById(LinkID).style.color = obj.tcol;
    }

    function SetH1Style(obj, H1Id){
        document.getElementById(H1Id).style.fontSize=obj.FontSize;
        document.getElementById(H1Id).style.color=obj.tcol;
    }
    
}
SetBottomStyle();








document.getElementById('button-id').style.background = 'yellow'
document.getElementById('button-id1').style.background = 'yellow'
document.getElementById('button-id2').style.background = 'yellow'

// document.getElementById('button-id').style.width = '150px'
// document.getElementById('button-id1').style.width = '150px'
// document.getElementById('button-id2').style.width = '150px'

// document.getElementById('button-id').style.height = '100px'
// document.getElementById('button-id1').style.height = '100px'
// document.getElementById('button-id2').style.height = '100px'

// document.getElementById('a-1').style.width = '15px'
// document.getElementById('a-1').style.background = 'red'
// document.getElementById('a-2').style.width = '15px'
// document.getElementById('a-2').style.background = 'red'

// document.getElementById('h-1').style.width = '50px'
// document.getElementById('h-2').style.width = '50px'
// document.getElementById('h-3').style.width = '50px'

// function link(){

// const company1 = { name: 'Vlad' };
// const company2 = { name: 'Dima' };

// company1 === { name: 'Vlad' }
// company2 === {name:'Dima'}

// const copyOfCompany1 = company1;
// const copyOfCompany2 = company2;

// copyOfCompany1 === company1;
// copyOfCompany2 === company2;

// company1.year = 2003;
// company2.year = 2004;

// console.log(copyOfCompany1);
// console.log(copyOfCompany2);
// }

// link()