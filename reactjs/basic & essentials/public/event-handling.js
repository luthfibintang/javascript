const root = document.getElementById("root");

function clickMe(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: clickMe.bind(this, "Hello Bintang")
}, "Click Me");
ReactDOM.render(element, root);