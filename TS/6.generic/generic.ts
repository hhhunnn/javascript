/*
    제너릭 : 
    - 선언 시점이 아니라 컴파일 시점에 타입을 명시하여 하나의 타입이 아닌 여러 타입을 사용할 수 있도록 하는 기법<>
    - 코드 안전성, 재사용성을 높일 수 있음
*/
// data는 나머지. string, number 타입 등 으로 받을 수 있음
interface Person<T> {
    name: string;
    data: T;
}

const person: Person<string> = {
    name: '홍길동',
    data: '김철수'
}

person.data; // 타입이 string임 -> 타입의 안정성 부여

// 앞에 <T>를 사용하지 않으면 T가 뭔지 몰라서 에러가 남
const func = <T>(name: string, data: T) => {
    const result: Person<T> = { name, data };
    return result;
}

// data가 string일 때 number일 때
const person1 = func('김철수', '홍길동');
const person2 = func('이영희', 20);

person2.data



console.log('==================================================');