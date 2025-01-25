import React, {useState} from 'react';

import '../App.css';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!text || !category) {
          return;
        }
        addTodo(text, category);
        setText(''); 
        setCategory('');
      };

      return (
        <div className="todo-form">
          <h3>Criar Tarefa: </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite o título da tarefa"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)} 
            >
              <option value="">Selecione uma categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
          </form>
        </div>
      );
    }
    
    export default TodoForm;
