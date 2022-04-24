const root = document.getElementById("root");

function App() {
  const [count, setCount] = React.useState(1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      if (count == 0) {
        setCount(0);
      } else {
        setCount(count - 1);
      }
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}

const element = /*#__PURE__*/React.createElement(App, null);
ReactDOM.render(element, root);