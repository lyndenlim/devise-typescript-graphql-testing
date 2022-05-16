import { Todo } from "../model"
import { useState, useRef, useEffect } from "react"
interface Props {
    todo: Todo;
    allTodos: Todo[];
    setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({ todo, allTodos, setAllTodos }) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [edittedTodo, setEdittedTodo] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [isEditable])

    const handleDelete = (id: number, e: React.FormEvent) => {
        setAllTodos(allTodos.filter(todo => todo.id !== id))
    }

    const makeEditable = (e: React.FormEvent) => {
        setIsEditable(true)
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setAllTodos(allTodos.map(todo => (todo.id === id ? { ...todo, todo: edittedTodo } : todo)))
        setIsEditable(false)
    }

    return (
        <form onSubmit={e => handleEdit(e, todo.id)}>
            {!isEditable ? <span>{todo.todo}</span> : <input ref={inputRef} onChange={e => setEdittedTodo(e.target.value)} value={edittedTodo} />}
            <span onClick={(e) => makeEditable(e)}>Edit</span>
            <span onClick={(e) => handleDelete(todo.id, e)}>Delete</span>
        </form>
    )
}

export default TodoItem