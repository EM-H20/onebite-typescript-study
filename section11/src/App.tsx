import './App.css';
import React, {useRef, useEffect, useReducer, useContext } from 'react';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './types';
import _ from 'lodash';

// 1. 타입 선언 @types/~
// 2. tsconfig.json
// 3. JS -> JSX
// 4. JSX -> TSX로 하나씩 변경

// TS 는 서로소 유니온 타입으로 정의함

export const TodostateContext = React.createContext<Todo[] | null>(null);

export const TodoDispatchContext = React.createContext<{onClickAdd : (text : string) => void, onClickDelete : (id : number) => void} | null>(null);

type Action = {
  type : "CREATE_TODO";
  data : {
    id : number;
    content : string;
  };
} | {
  type : "DELETE_TODO", 
  data : {
    id : number
  }
}

function reducer(state : Todo[], action : Action) {
  switch(action.type) {
    case 'CREATE_TODO':
      return [...state, action.data];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.data.id);
    default:
      return state;
  }
}

export function useTodoDispatch(){
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch){
    throw new Error('TodoDispatchContext가 없습니다.');
  }
  return dispatch;
}

function App() {
  // 제네릭 함수
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);


  const onClickAdd = (text : string) => {
    dispatch({
      type: 'CREATE_TODO',
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };
  
  const onClickDelete = (id : number) => {
    dispatch({
      type: 'DELETE_TODO',
      data: {
        id: id,
      },
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos])


  return (
    <TodostateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
      <div className='App'>
      <h1>TODO</h1>
      <Editor/>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo}/>
        ))}
      </div>
    </div>
    </TodoDispatchContext.Provider>
    </TodostateContext.Provider>
  );
}

export default App;
