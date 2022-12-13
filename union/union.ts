interface PokemonInterface{
  [key:string] : number | string |boolean;
}

/**
 * ? PokemonInterface
 * [key:string]
 * key의 위체이 있는 데이터(키값)는 문자열이어야만 한다는 타입 명시
 * 일반적으로 javascript 객체의 키값은 데이터타입이 문자열이므로
 * 결과적으로 일반적인 객체를 다루는 형태가 된다.
 * 대괄호로 키에 해당하는 부분에 작성하는 방식을 "인덱스 시그니처" 작성법 이라고 하며,
 * 해당 키의 데이터 타입을 충족하면 몇개든 허용한다.
 * 즉, 동적할당도 가능해진다.
 * number| string | boolean
 * '값'으로 들어올 수 있는 데이터타입을 여러개 지정할 수 있는 작성법으로
 * 위의 인터페이느는 총 세가지의 데이터타입이 들어올 수 있다.
 * 하나만 명시해주는 것 보다 너그럽다.
 * 개발자들의 은어로는 "타입을 넓힌다" 라고 표현하기도 한다.
 */

const pokemon : PokemonInterface = {
  id : 1,
  name : "미라이돈",
  electronic : true
}

// 위의 [Key : string] 과 같이 너그럽게 데이터 바인딩을 유동적으로 설정할 수 있는가 하면,
// 아래의 상수 digimon의 정적 타입 선언 [object, null]은
//튜플(tuple)이라고 하며, 원소 자리의 데이터타입과, 길이값까지 모두 완전하게 막아두는 역할을 한다.
// 예를들어, 1번째 값인 null 다음 원소로 추가하려고 해도 에러가 표시된다.(에러를 내기위한 작성법)
//매우 엄격하고 단 하나라도 예외의 여지가 없어야 할 DB 관리와 같은 작업에서 매우 유용하다.

const digimon : [object, null] = [
  {
    id : 1,
    name : "아구몬",
    type : "analog"
  },
  null,
]