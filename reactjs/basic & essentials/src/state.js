const root = document.getElementById("root");

function App(){
    const [count, setCount] = React.useState(1);

    return(
    <>
        <button onClick={function() {
            if(count == 0) {
            setCount(0)
            } else {
            setCount(count - 1)
            }
        }}>-</button>

        <span>{count}</span>
        <button onClick={function () {
            setCount(count + 1)
        }}>+</button>
    </>
    )
}

const element = (
    <App/>
)

ReactDOM.render(element, root);