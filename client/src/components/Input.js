import React from 'react';
import Tools from './Tools';
import { getClient } from '../services/client';

import './Input.css';

const inputHandler = (e, editor, sid) => {
  if (
    !e.shiftKey &&
    !e.ctrlKey &&
    !e.altKey &&
    e.key === 'Enter'
  ) {
    e.preventDefault()
    if (editor.current.innerHTML === '') { return }
    const content = editor.current.innerHTML;
    const res = getClient().send({ sid, content });
    if (res.isSent === 1) { 
      editor.current.innerHTML = '' 
    } else {
      alert(res.msg);
    }
  } else if (
    (e.shiftKey || e.ctrlKey) &&
    e.key === 'Enter'
  ) {
    editor.current.appendChild(
      document.createElement('br')
    )
  }
}
const appendChild = (editor, element) => {
  editor.current.appendChild(element)
}
const setContent = (editor, element) =>{
  editor.current.innerHTML = ''
  editor.current.appendChild(element)
}

const Input = ({ uid, sid }) => {
  const editor = React.createRef();
  return (
    <div className="Input">
      <Tools
        append={(element)=>appendChild(editor, element)}
        set={(element) => setContent(editor, element)}
      />
      <div
        contentEditable={true}
        className="InputArea"
        ref={editor}
        onKeyPress={(event) => inputHandler(event, editor, sid)}
      >
      </div>
    </div>)
};

export default Input;