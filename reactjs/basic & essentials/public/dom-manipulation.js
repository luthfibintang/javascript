const root = document.getElementById("root");

function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);
  React.useEffect(() => {
    // const judul = document.getElementById('judul')
    // setTimeout(() => {
    //     judul.textContent = "Ini judul"
    // }, 3000)
    console.log(judulRef);
    const judul = judulRef.current;
    setTimeout(() => {
      judul.textContent = "Ini judul";
    }, 3000);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul",
    ref: judulRef
  }, "Application"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);