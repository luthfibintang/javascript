import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false)
    const params = useParams();

    useEffect(() => {
      async function getArticle(){
          const req = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
          
          if(!req.ok) {
              setLoading(false);
              return setNotFound(true);
            }
          
            const res = await req.json();
            
          setArticle(res);
          setLoading(false);
          document.title = `Blog - ${res.title}`
      }

      getArticle();
    }, [params])

    if(notFound){
        return <h1>Article Not found :(</h1>
    }
    

    return (
        <section className='section'>
            {loading ? <i>Loading Article...</i> : (
            <article className='article'>
                <h1>{article.title}</h1>
                <time className='article-date'><i>{new Date(article.publishedAt).toLocaleDateString()}</i></time><br/>
                <img src={article.imageUrl} alt={article.title} className="article-image" />
                <p className='article-summary'>{article.summary}</p>
                <p className='article-source'>Source : <a href={article.url} target="_blank" rel='noreferrer'>{article.newsSite}</a></p>
            </article>
            )}
        </section>
    )
}