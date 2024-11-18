//
function fff(){
    console.log(1);
    console.log(2);
    //return;
    //console.log(3);

    return 3;
}

let result = fff();

console.log(result);

const af = ()=>{ //화살표  arrow
    console.log(4);
    console.log(5);

    return 6;
}

console.log(af());

//const af2 = ()=> 7;   //7
const af2 = () => 1+2+3+4;  //10

// ()=> 7;
// ()=> {return 7;}

console.log(af2());


function scope1(){
    let x =10;
}
//console.log(x); //전역스코프 ReferenceError: x is not defined

if(true){
    let y = 300;
}
//console.log(y); //전역스코프 ReferenceError: x is not defined

let z = 300;

if(true){
    console.log(z);
}

function scope2(){
    console.log(z);
}

scope2();

/*
    for(){
        if(){
        
        }
    }
*/

{   //scope 영역
    let qqq = 100;
}

//console.log(qqq); //전역스코프 ReferenceError: x is not defined

ccc=3000;
var ccc; //javascript -> + 제약 -> typescript

//dd=30;
//let dd;
//console.log(dd);

console.log(ccc);

check();
function check(){   //호이스팅 선언부를 위로 올려줌
    console.log('check');
}
check();

(function(){
    console.log('1회용 함수');
})();

(function oneuse(){
    console.log('1회용 함수');
})();

//oneuse();