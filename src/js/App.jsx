import React, {useState} from 'react';
import "../css/main.scss";
import pic from '../images/6.jpeg';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['aaaaa', 'iiiiiii']);
  const [completeTodos, setCompleteTodos] = useState(['uuuu', 'eee'])
  const [furigana, setFurigana] = useState('');
  const [number, setNumber] = useState('');

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
    const furigana = convertHiraganaToKatakana(event.target.value)
    setFurigana(furigana);
  }

  const onClickAdd = () => {
    if (todoText === "") return;
    const  newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  }
  const onClickIncomplete = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }

  const convertHiraganaToKatakana = (text) => {
    const katakana = text.replace(/[ぁ-ん]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + 0x60);
    });
    return katakana;
  }

  const insertCardNumberSeparator = (num) => {
    return num.match(/\d{1,4}/g).join(' ');
  }


  const validateNumber = (e) => {
    let inputValue = e.target.value.replace(/ /g, '');
    const maxLength = 16;
    const inputPattern = '^[0-9]*$';
    if (RegExp(inputPattern).test(inputValue) && inputValue.length <= maxLength) {
      const displayValue = inputValue.length ? insertCardNumberSeparator(inputValue) : inputValue;
      setNumber(displayValue);
    }
  }


  return (
    <>
      <form action="" method='post'>
        <div className='card-item'>
          <div className="card-item__side -front">
            <div className="card-item__cover">
              <img src={pic} alt="" />
            </div>
          </div>
          <div className="card-item__side -back"></div>
        </div>
        <input type="text" onChange={validateNumber} value={number}/>
      </form>
    </>
  );
};

