import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from '../Home/Home';
import ArticleDetail from '../ArticleDetail/ArticleDetail.jsx';
import Header from '../Header/Header.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import getTopHeadlinesUS from '../../apiCalls.js';

function App() {
  const [ articles, setArticles ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');

  useEffect(() => {
    setLoading(true);
    getTopHeadlinesUS()
      .then(data => {
        setArticles(data.articles)
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home articles={articles}/>} />
        <Route path='/article/:index' element={<ArticleDetail articles={articles} />} />
        <Route path='*' element={<NotFound />} />
	    </Routes>
    </main>
  );
};

export default App;
