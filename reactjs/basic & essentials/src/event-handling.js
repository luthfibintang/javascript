const root = document.getElementById("root");

function clickMe(msg) {
    alert(msg);
}

const element = (
<button onClick={clickMe.bind(this, "Hello Bintang")}>Click Me</button>
)

ReactDOM.render(element, root);