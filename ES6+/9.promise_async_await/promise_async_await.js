/*
    promise 객체 : 
    - 해당 객체가 생성된 시점에는 알려지지 않았을 수 있는 값을 위한 대리자
    - 비동기 연산이 종료된 이후에 결과 값과 실패에 대한 처리기
    - 상태 :
    - pending : 이행하지 않은 상태, 최초 상태
    - fullfilled : 연산이 성공한 상태
    - rejected : 연산이 실패한 상태
*/
const number = 10;
const promise = new Promise((resolve, reject) => {
    if (number % 2 !== 0) resolve('Success');
    else reject('Fail');
});

// console.log('A point');

// console.log(promise);

// console.log('B point');

// // B와 C 사이에 출력되지 않고 C 뒤에 출력됨
// promise
//     .then((result) => {console.log(result)})
//     .catch((result) => {console.log(`catch : ${result}`)});

// console.log('C point');



console.log('==================================================');

/*
    async - await : 
    - 비동기 처리를 동기로 구현할 수 있도록 하는 방법
    - await 키워드로 비동기 처리를 기다리고 다음 작업을 수행함
    - 반드시 async 키워드로 await 포함하고 있는 함수를 동기 함수로 지정
*/
const asyncFunction = async () => {
    console.log('A point');

    // 성공할 경우
    // const result = promise; 
    // const result = await promise; // await 사용하려면 맨 위 함수() 앞에 async 만들어줘야함
    // 실패할 경우
    const result = await promise.catch((result) => { return result });
    console.log(result);

    console.log('B point');
}
asyncFunction();



console.log('==================================================');