const root = document.getElementById("root");

function App() {
  const fruits = ["Apple", "Orange", "Grape"];
  console.log(fruits.map(fruit => {
    return /*#__PURE__*/React.createElement("li", null, fruit);
  }));
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(fruit => {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);