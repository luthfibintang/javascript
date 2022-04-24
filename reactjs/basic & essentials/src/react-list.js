const root = document.getElementById("root");

function App() {
    const fruits = ["Apple", "Orange", "Grape"]

    console.log(fruits.map((fruit) => {
                return <li>{fruit}</li>
            }))

    return (
        <ul>
            {fruits.map((fruit) => {
                return <li key={fruit}>{fruit}</li>
            })}
        </ul> 
    )
}

ReactDOM.render(<App/>, root);