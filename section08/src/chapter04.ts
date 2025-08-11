// 템플릿 리터럴 타입 - String 리터럴 타입을 기반으로 특정 패턴을 갖는 문자열 타입을 만드는 기능

type Color = "red" | "blue" | "green";
type Animal = "cat" | "dog" | "mouse";

type ColorAnimal = `${Color}-${Animal}`;
