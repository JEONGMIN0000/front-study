/*
함수명 : getMealByTime
매개변수 : 현재 시간
※단, 시간은 0시~24시 기준으로 사용
ex) 오후 2시 -> 14시
반환값 : 해당 시간에 해야하는 식사 구분

*위 함수는 매개변수 있음, return 값 있음.

매개변수 시간별 조건에 따른 반환 값.

6시~10시 : 아침
11시~14시 : 점심
17시~20시 : 저녁
21시~23시 : 야식
위에 해당하지 않는 시간 : 금식


호출 및 사용 예시

console.log(getMealByTime(5)); //출력값 : 금식
console.log(getMealByTime(8)); //출력값 : 아침
console.log(getMealByTime(13)); //출력값 : 점심
console.log(getMealByTime(16)); //출력값 : 금식
console.log(getMealByTime(19)); //출력값 : 저녁
console.log(getMealByTime(22)); //출력값 : 야식
console.log(getMealByTime(2)); //출력값 : 금식
*/

function getMealByTime(t) {
    if(t>=6 && t <=10){
        return '아침';
    }else if(t>=11 && t <=14){

        return '점심';
    }else if(t>=17 && t <=20){
        return '저녁';
    }else if(t>=21 && t <=23){
        return '야식';
    }else{
        return '금식';
    }
}

console.log(getMealByTime(5)); //출력값 : 금식
console.log(getMealByTime(8)); //출력값 : 아침
console.log(getMealByTime(13)); //출력값 : 점심
console.log(getMealByTime(16)); //출력값 : 금식
console.log(getMealByTime(19)); //출력값 : 저녁
console.log(getMealByTime(22)); //출력값 : 야식
console.log(getMealByTime(2)); //출력값 : 금식