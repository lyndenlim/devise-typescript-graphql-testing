interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <form onSubmit={handleAdd}>
            <input onChange={e => setTodo(e.target.value)} value={todo} placeholder="Enter a todo" />
            <button type="submit">Add a task</button>
        </form>
    )
}

export default InputField