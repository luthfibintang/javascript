const root = document.getElementById("root");

function App() {

    // Menggunakan State
    const namaRef = React.useRef(null);

    const [name, setName] = React.useState('');

    function send(event) {
        event.preventDefault();
        // menggunakan dom biasa
        // const name = document.getElementById('name').value

        // Menggunakan Ref
        // const name = namaRef.current.value;
        
        console.log(`Name : ${name}`)
    }

    return (
        <form onSubmit={send}>
            <div>
                <label>Name :</label>
                <input type="text" name="name" id="name" value={name} ref={namaRef} onChange={(event) => {
                    setName(event.target.value);
                }} />
            </div>
            <button type="submit">Send</button>
        </form>
    )
}

ReactDOM.render(<App/>, root);