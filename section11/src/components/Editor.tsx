import {useState } from "react";
import { useTodoDispatch } from "../App";

export default function Editor() {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }


  const onClickButton = () => {
    dispatch?.onClickAdd(text);
    setText('');
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickButton();
    }
  }
    
  
 return (
        <div>
            <input value={text} onChange={onChangeInput} onKeyDown={handleKeyDown} />
            <button onClick={onClickButton}>추가</button>
        </div>
    );
}