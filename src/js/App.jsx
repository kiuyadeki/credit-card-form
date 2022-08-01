import React, {useState} from 'react';
import "../css/main.scss";
import {InputTodo} from '../components/InputTodo.jsx';
import {IncompleteTodos} from '../components/IncompleteTodos.jsx';
import {CompleteTodos} from '../components/CompleteTodos.jsx';
import { InputFurigana } from '../components/Furigana.jsx';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['aaaaa', 'iiiiiii']);
  const [completeTodos, setCompleteTodos] = useState(['uuuu', 'eee'])
  const [furigana, setFurigana] = useState('');

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


  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      <InputFurigana
        furigana={furigana}
      />
      {incompleteTodos.length >= 5 && <p style={{color: 'red'}}>max 5 todo</p>}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickIncomplete={onClickIncomplete}
      />
    </>
  );
};

