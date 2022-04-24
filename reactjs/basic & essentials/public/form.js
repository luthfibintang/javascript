const root = document.getElementById("root");

function App() {
  // Menggunakan State
  const namaRef = React.useRef(null);
  const [name, setName] = React.useState('');

  function send(event) {
    event.preventDefault(); // menggunakan dom biasa
    // const name = document.getElementById('name').value
    // Menggunakan Ref
    // const name = namaRef.current.value;

    console.log(`Name : ${name}`);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: send
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name :"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    value: name,
    ref: namaRef,
    onChange: event => {
      setName(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Send"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);