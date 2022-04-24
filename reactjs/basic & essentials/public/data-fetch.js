const root = document.getElementById("root");

function App() {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function getData() {
      const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const res = await req.json();
      setBlogs(res);
      setLoading(false);
    }

    getData();
    console.log(getData);
    return () => {
      console.log('destroy');
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Blogs"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading data...") : /*#__PURE__*/React.createElement("ul", null, blogs.map(function (blog) {
    return /*#__PURE__*/React.createElement("li", {
      key: blog.id
    }, blog.title);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);