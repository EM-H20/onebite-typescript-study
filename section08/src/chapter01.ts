// 인덱스드 엑세스 타입

interface Post{
    title: string;
    content : string;
    author : {
        id : number;
        name : string;
        age : number;
        location : string;
    }
}

// indexed access type - 값이 아니라 type 이 들어가야함.
function printAuthorInfo(author : Post['author']){
    console.log(`${author.name} ${author.id} ${author.age} ${author.location}`);
}

const post : Post = {
    title : "타입스크립트 배우기",
    content : "타입스크립트를 배우는 중",
    author : {
        id : 1,
        name : "홍길동",
        age : 20,
        location : "서울",
    }   
}

printAuthorInfo(post.author);

// type

type PostList = {
    title: string;
    content : string;
    author : {
        id : number;
        name : string;
        age : number;
    }
}[];


const postList : PostList[number] = {
    
        title : "타입스크립트 배우기",
        content : "타입스크립트를 배우는 중",
        author : {
            id : 1,
            name : "홍길동",
            age : 20,
        }   
    
}

// 튜플 타입

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // 해당 요소가 없음 undefined

type TupNum = Tup[number];