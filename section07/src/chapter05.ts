// Promise

const promise = new Promise<number>((resolve, reject) => { // reject 실패 이유
    setTimeout(() => {
        resolve(20); // 결과 값
        reject("~ 때문에 실패"); // 실패 이유
    }, 3000);
});

promise.then((response) => {
    console.log(response * 10); 
});

promise.catch((error : string) => {
    console.log(error);
});

// 프로미스를 반환하는 함수의 타입을 정의
// 서버로 부터 하나의 게시글의 데이터를 불러오는 상황

interface Post {
    id : number;
    title : string;
    content : string;
}

function fetchPost() : Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id : 1,
                title : "title",
                content : "content"
            });
            reject("에러");
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    console.log(post.id, post.title, post.content);
}).catch((error) => {
    console.log(error);
});