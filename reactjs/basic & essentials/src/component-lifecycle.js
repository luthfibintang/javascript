const root = document.getElementById("root");


function App() {
    const [click, setClick] = React.useState(false)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        console.log('init api');

        return () => {
            console.log('destroy api')
        }
    })

    

    return (
        <>
            <h1 id="judul">This is title</h1>
            <button onClick={() => {
                setClick(true)
            }}>Click me</button>
            <button onClick={() => {
                setCount(count + 1);
            }}>Tambah</button>

            Count : {count}
        </>
    )
}

setTimeout(() => {
    ReactDOM.render(<App/>, root);
}, 1000)