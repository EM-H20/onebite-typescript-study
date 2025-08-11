// 서로소 유니온 타입
// 교집합이 없는 타입으로만 만든 유니온 타입
// string number 처럼 교집합이 없음.

import { type } from "os";


// tag를 추가함으로 서로소 유니온 타입을 만들 수 있다.
type Admin = {
    tag : "ADMIN";
    name: string;
    kickCount: number;
};
type Member = {
    tag : "MEMBER";
    name: string;
    point: number;
};
type Guest = {
    tag : "GUEST";
    name: string;
    visitedCount: number;
};

type User = Admin | Member | Guest;

function login(user : User){
    switch (user.tag) {
        case "ADMIN":
            // Admin
            console.log(`Admin ${user.name} has kicked ${user.kickCount} users.`);
            break;
        case "MEMBER":
            // Member
            console.log(`Member ${user.name} has ${user.point} points.`);
            break;
        case "GUEST":
            // Guest
            console.log(`Guest ${user.name} has visited ${user.visitedCount} times.`);
            break;
    }
}

login({ tag: "MEMBER", name: "Alice", point: 100 }); // Member Alice has 100 points.

// 비동기 작업의 결과를 처리하는 함수

type LoadingState = {
    state: "LOADING";
};
type FailedState = {
    state: "FAILED";
    error: {
        message: string;
    };
};
type SuccessState = {
    state: "SUCCESS";
    response: {
        id: number;
        name: string;
    };
};

type AsyncTask = LoadingState | FailedState | SuccessState;

function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING":
            console.log("Loading...");
            break;
        case "FAILED":
            console.error(`Error: ${task.error.message}`);
            break;
        case "SUCCESS":
            console.log(`Success! User ID: ${task.response.id}, Name: ${task.response.name}`);
            break;
    }
}

const loading: AsyncTask = {
    state : "LOADING",
}

const failed: AsyncTask = {
    state : "FAILED",
    error: {
        message : "Network Error",  
    }
};

const success: AsyncTask = {
    state : "SUCCESS",
    response: {
        id: 1,
        name: "Alice",
    }
};