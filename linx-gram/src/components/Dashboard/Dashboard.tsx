import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import './Dashboard.css'

const NEWS_URL = "/news"

interface ResponseFromNews {
  articles: Article[]
  error?: boolean
  status: number
  totalResults: number
}

interface Article {
  source: Source;
  author?: any;
  title: string;
  description: string;
  url: string;
  urlToImage?: any;
  publishedAt: string;
  content: string;
}

interface Source {
  id?: any;
  name: string;
}

function Dashboard(){
  const [data, setData] = useState<Article[]>([]);
  
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get<ResponseFromNews>(NEWS_URL);
        const notRemovedArticles = response.articles.filter(article => article.source.id !== null)
        setData(notRemovedArticles);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  
return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light d-flex bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul>
        {
          data.map(article => (
            <div className="card" style={{"width": "60rem"}}>
              <img className="card-img-top" src={article.urlToImage} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content}</p>
                <a href={article.url} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
          ))
        }
      </ul>
    </>
)
}

export default Dashboard;