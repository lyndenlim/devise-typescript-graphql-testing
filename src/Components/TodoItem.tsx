import { Todo } from "../model"

interface Props {
    todo: Todo;
    allTodos: Todo[];
    setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoItem: React.FC<Props> = ({ todo, allTodos, setAllTodos }) => {
    return (
        <form>
            <span>{todo.todo}</span>
        </form>
    )
}

export default TodoItem