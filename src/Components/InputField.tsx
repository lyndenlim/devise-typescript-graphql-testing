interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form onSubmit={handleAdd}>
            <input onChange={e => setTodo(e.target.value)} value={todo} placeholder="Enter a todo" />
            <button type="submit">Add a task</button>
        </form>
    )
}

export default InputField