/*
    변수 : 데이터를 저장하는 공간에 이름을  부여한 것
    - var, let, const 키워드를 사용하여 선언
    - const는 선언하면서 초기화 같이 해야함
*/
var varVariable;
let letVariable;
const constVariable = 10;
// const constVariable -- Error

/*
    변수의 중복 선언 : var 키워드로 선언한 변수는 중복 선언 가능
*/
var age = 23;
var age = 30; // Error아님 위에 있는 변수는 사라지고 새로운 변수만 남음

// let로 선언한 변수는 중복 선언 불가능
let address = '부산시';
// let address = '울산시'; // Error 


/*
    동적 타이핑 : 변수의 타입이 데이터가 할당된 순간에 데이터의 타입에 따라 결정됨
*/
var variable = 10;
// console.log(typeof variable);
variable = '10';
// console.log(typeof variable);


/*
    변수 호이스팅 : var 키워드나 function 키워드로 선언한 변수 혹은 함수에 대해서 스코프가 최상위로 옮겨지는 것
    - 변수 생성 3 단계
    - 선언 단계 : 변수를 등록하는 단계 (스코프가 가능해짐)
    - 초기화 단계 : 변수에 undefined가 할당됨
    - 할당 단계 : undefined에 할당한 실제 값이 할당됨
*/
// console.log(x);
var x = 10;
// console.log(x); 만 쓰면 Error 발생 -> x 정의되지 않음
// console.log(x) 후 x를 정의하면 원칙상 에러발생이 맞지만/ 실제로 에러 발생하지 않음

if (true) {
    var x = 99;
}
// console.log(x) // 원칙상 x는 10이어야함. 99는 if 내부에서 선언한 것이기 때문 / 하지만 실제로 결과는 99가 출력됨 



/*
    var 키워드로 선언한 변수는 블록 레벨 스코프가 아닌 함수 레벨 스코프를 가짐
    - 함수 레벨 스코프 : 함수 내에서 선언된 변수는 함수 안에서 사용 가능, 함수 밖에선 사용 불가능
    - 블록 레벨 스코프 : 코드 블럭 내에서 선언된 변수는 코드 블러 안에서 사용 가능, 코드 블럭 밖에선 사용 불가능
*/



/*
    var 키워드로 선언된 변수의 문제점
    1. 함수 레벨 스코프
        - 모든 함수가 전역 변수로 선언 됨
    2. var 키워드 없이도 생성 가능
        - 의도하지 않은 변수 생성
    3. 중복 선언 가능
        - 의도하지 않은 변수 변경
    4. 호이스팅
        - 선언 전에 사용 가능

    - 이러한 문제를 해결하기 위해 ES6+ 부터는 let, const 키워드로 변수를 선언
*/

// console.log(y); // Error --> y가 선언되지 않았음 위의 var x와 다름
let y = 10; 
if (true) {
    let y = 99;
}
console.log(y); // 10 출력


