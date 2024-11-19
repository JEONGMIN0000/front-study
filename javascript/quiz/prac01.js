//1
/*
==
비교 1
true
true
true
비교 2
true
true
true
비교 3
true
true
true

===  으로 바뀐다면?
비교 1
true
true
true
비교 2
false 
false 
false 
비교 3
false
true
false
*/


//2
const personInfo = {
    name:"홍길동",
    age:25,
    phone:"010-1234-5678",
    engName:"John Smith",
    nickname:" 복습마왕 "
    }
    
    console.log('변경 전');
    console.log(personInfo);
    
    /*코딩부분*/

    //1
    /*
    personInfo.name='홍길동';
    personInfo.phone = ['010','1234','5678'];
    personInfo.engName = "JOHN SMITH";
    personInfo.nickname = '복습마왕' ;
    */

    //2
    function replace(personInfo){
        personInfo.name = personInfo.name.replace(/"/g, "'"); 
        personInfo.phone = personInfo.phone.split('-'); 
        personInfo.engName = personInfo.engName.toUpperCase(); 
        personInfo.nickname = personInfo.nickname.replace(/"/g, "'");
        personInfo.nickname = personInfo.nickname.trim(); 
        return personInfo;
    }
    //2

    //personInfo.phone = [personInfo.phone.substring(0, 3), personInfo.phone.substring(4, 8), personInfo.phone.substring(9, 13)];
    //substring 글자 추출 (시작위치, 끝위치(포함X))  시작위치<= 범위 <끝위치
    personInfo.phone = personInfo.phone.split("-");
    //split 매개변수 문자 기준으로 문자열을 잘라서 배열로 반환
    personInfo.engName = personInfo.engName.toUpperCase();
    //toUpperCase 대문자로 변환
    personInfo.nickname = personInfo.nickname.trim(); 
    //trim 공백제거

    /*코딩부분*/
    
    console.log('변경 후');
    // console.log(personInfo); //1
    console.log(replace(personInfo)); //2