const root = document.getElementById("root");

function App() {
  const [click, setClick] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log('init api');
    return () => {
      console.log('destroy api');
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "This is title"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setClick(true);
    }
  }, "Click me"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCount(count + 1);
    }
  }, "Tambah"), "Count : ", count);
}

setTimeout(() => {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
}, 1000);