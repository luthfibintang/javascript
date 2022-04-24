const root = document.getElementById("root");

function App() {

    const [blogs, setBlogs]  = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      async function getData() {
        const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
        const res = await req.json();

        setBlogs(res);
        setLoading(false)
      }

      getData();

      console.log(getData)
    
      return () => {
        console.log('destroy')
      }
    }, [])
    

    return (
        <>
            <h1>Blogs</h1>
            {loading ? <i>Loading data...</i> : (
                <ul>
                    {blogs.map(function(blog) {
                    return <li key={blog.id}>{blog.title}</li>
                    })}
                </ul>
            )}
        </>
    )
}

ReactDOM.render(<App/>, root);