import { useState } from "react";
import InputField from "./Components/InputField"
import TodoList from "./Components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [allTodos, setAllTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault()
    setAllTodos([...allTodos, { id: Date.now(), todo, isDone: false }])
    setTodo("")
  }

  return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>
    </div>
  );
}

export default App;
