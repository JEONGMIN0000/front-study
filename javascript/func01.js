
function func01(){
    console.log('func01');
}

func01();

function func01_2(){
    return "func01_2";
}

console.log(func01_2());

const func02 = function func002(){
    console.log('func02');
}

//func002();
func02();

const func02_2 = function(){
    console.log('func02_2');
}

func02_2();

const func03 = () =>{
    console.log('func03');
}

func03();

//매개변수 / 인수

function func05(a,b){
    console.log(a + " " + b);
}

func05(10,20);
func05("a", "b");

const func06  = function func006(a,b) {
    console.log(a + " " + b);
}

func06(30, 40);

const func07  = function(a, b) {
    console.log(a + " " + b);
}

func07(80, 40);

const func08  = (a, b) => {
    console.log(a + " " + b);
}

func08(100, 150);

//func08(); -> ReferenceError: a is not defined

const func10  = function(a, b) {
    console.log(a + " " + b);
}

func10(10, 20);

const func11  = function(a, b) {
    console.log(a);
    b();
}

function temp(){
    console.log('temp func');
}

function temp2(t){
    //code
    console.log('temp2 func');
    //code
    //10s
    t();
}

func11(100, temp);

//callback 함수

//temp2 함수를 실행하고 나서 tmep 함수를 실행
temp2(temp);
//temp();

temp2(()=>{
    console.log('그냥 바로 만들어서 넣은 함수');
})



