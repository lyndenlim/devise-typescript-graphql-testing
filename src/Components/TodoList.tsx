import { Todo } from "../model"
import TodoItem from "./TodoItem"

interface Props {
    allTodos: Todo[];
    setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ allTodos, setAllTodos }) => {
    return (
        <div>
            <ul>
                {allTodos.map(todo =>
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        allTodos={allTodos}
                        setAllTodos={setAllTodos}
                    />)}
            </ul>
        </div>
    )
}

export default TodoList