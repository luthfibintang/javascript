const root = document.getElementById("root");

function App() {
    const [activity, setActivity] = React.useState('')
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState([]);
    const [msg, setMsg] = React.useState('')

    function generateId() {
        return Date.now();
    }
    
    function addTodoHandler(event) {
        event.preventDefault();

        if(!activity){
            return setMsg('Todo wajib diisi!')
        }

        if(edit.id) {
            const updateTodo = {
                ...edit,
                activity
            }

            const editTodoIndex = todos.findIndex((todo) => {
                return todo.id == edit.id
            })

            const changeTodo = [...todos];

            changeTodo[editTodoIndex] = updateTodo;

            // console.log(changeTodo);
            setTodos(changeTodo);
            return cancelEdit();
        }
        
        setTodos([...todos, {
            id: generateId(),
            activity,
            done: false
        }]);
        
        setMsg('');
        setActivity('');
    }

    function removeTodo(id){
        const filteredTodo = todos.filter((todo) => {
            return todo.id !== id
        })

        setTodos(filteredTodo);

        if(edit.id) cancelEdit();
    }

    function editTodo(todo) {
        setActivity(todo.activity)
        setEdit(todo)
    }

    function cancelEdit(){
        setEdit({});
        setActivity('')
        setMsg('');
    }

    function doneTodoHandler(todo) {
        const updateTodo = {
            ...todo,
            done: todo.done ? false : true
        }

        const editTodoIndex = todos.findIndex((current) => {
            return current.id == todo.id
        })

        const changeTodo = [...todos]

        changeTodo[editTodoIndex] = updateTodo;

        setTodos(changeTodo);
    }
    
    return (
        <>
            <h1>Todo List</h1>
            {msg && <div style={{ color: 'red' }}>{msg}</div>}
            <form onSubmit={addTodoHandler}>
                <input type="text" placeholder="To do" value={activity} onChange={(event) => {
                    setActivity(event.target.value)
                }}/>
                <button type="submit">
                {edit.id ? 'Save' : 'Add'}    
                </button>  
                {edit.id && <button onClick={cancelEdit}>Cancel Edit</button>}
            </form>
            {todos.length > 0 ? (
                <ul>
                {todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)} />
                                {todo.activity}
                                ({todo.done ? 'Finished' : 'Not finished'}) 
                                <button onClick={editTodo.bind(this, todo)}>edit</button>  
                                <button onClick={removeTodo.bind(this, todo.id)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p><i>Todos is empty</i></p> 
            )}
        </>
    )
}

ReactDOM.render(<App/>, root);