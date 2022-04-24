const root = document.getElementById("root");

function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState([]);
  const [msg, setMsg] = React.useState('');

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMsg('Todo wajib diisi!');
    }

    if (edit.id) {
      const updateTodo = { ...edit,
        activity
      };
      const editTodoIndex = todos.findIndex(todo => {
        return todo.id == edit.id;
      });
      const changeTodo = [...todos];
      changeTodo[editTodoIndex] = updateTodo; // console.log(changeTodo);

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

  function removeTodo(id) {
    const filteredTodo = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(filteredTodo);
    if (edit.id) cancelEdit();
  }

  function editTodo(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelEdit() {
    setEdit({});
    setActivity('');
    setMsg('');
  }

  function doneTodoHandler(todo) {
    const updateTodo = { ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(current => {
      return current.id == todo.id;
    });
    const changeTodo = [...todos];
    changeTodo[editTodoIndex] = updateTodo;
    setTodos(changeTodo);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Todo List"), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, msg), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "To do",
    value: activity,
    onChange: event => {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Save' : 'Add'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEdit
  }, "Cancel Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, "(", todo.done ? 'Finished' : 'Not finished', ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodo.bind(this, todo)
    }, "edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodo.bind(this, todo.id)
    }, "Delete"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Todos is empty")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);