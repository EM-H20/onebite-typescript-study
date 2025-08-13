// 맵드 타입
// Pick<T, K> - 프로퍼티 선택
// -> 뽑다, 고르다
// -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입

interface Post {
    title: string;
    tag : string[];
    content : string;
    thumbnail? : string;
}

// 구현 예시
type Pick<T, K extends keyof T> = {
    // K extends 'title' | 'content' | 'tag' | 'thumbnail'
    // 'title' | 'content' extends 'title' | 'content' | 'tag' | 'thumbnail'
    [key in K] : T[key];
}   

const legacyPost : Pick<Post, 'title' | 'content'> = {
    title : "제목",
    content : "내용",
}

// Omit <T, K> - 프로퍼티 제외
// -> 빼다, 제외하다
// -> 특정 객체 타입의 특정 프로퍼티를 제외하는 타입

// 구현 예시
type Omit<T, K extends keyof T> = 
    Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick <Post, Exclude<keyof Post, 'title'>>
// Pick <Post, Exclude<'title' | 'content' | 'tag' | 'thumbnail', 'title'>>
// 결과
// Pick <Post, 'content' | 'tag' | 'thumbnail'>

const noTitlePost : Omit<Post, 'title'> = {
    content : "내용",
    tag : ["tag1", "tag2"],
    thumbnail : "썸네일",
}
    
// Record<K, T> - 키와 값의 타입 정의
// -> 기록하다, 기록
// -> 특정 키와 값의 타입을 정의하는 타입

// 구현 예시

type Record<K extends keyof any, V> = {
    [key in K] : V;
}

// Record<K, V>
type thumbnail = Record<'large' | 'medium' | 'small' | 'watch', {url : string, size : number}>;