const root = document.getElementById("root");

function App() {
    const [login, setLogin] = React.useState(false);
    const judulRef = React.useRef(null)

    React.useEffect(() => {
        // const judul = document.getElementById('judul')
        // setTimeout(() => {
        //     judul.textContent = "Ini judul"
        // }, 3000)

        console.log(judulRef);
        const judul = judulRef.current
        setTimeout(() => {
            judul.textContent = "Ini judul"
        }, 3000)
    }, [])
    
    return (
        <>
            <h1 id="judul" ref={judulRef}>Application</h1>
        </>
    )
}

ReactDOM.render(<App/>, root);