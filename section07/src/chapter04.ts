// 제네릭 클래스

class List<T>{
    constructor(private list : T[]){}

    push(data : T){
        this.list.push(data);
    }
    pop(){
        this.list.pop();
    }
    print(){
        console.log(this.list);
    }    
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.print();
numberList.push(4);
numberList.print();

const stringList = new List(["a", "b", "c"]);
stringList.pop();
stringList.print();
stringList.push("d");
stringList.print();