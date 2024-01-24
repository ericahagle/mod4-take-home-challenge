import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import mockData from '../../mock-data.js';
import Home from '../Home/Home';
import ArticleDetail from '../ArticleDetail/ArticleDetail.jsx'

function App() {
  const [ articles, setArticles ] = useState(mockData);

  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home articles={articles}/>} />
        <Route path='/:index' element={<ArticleDetail articles={articles} />} />
	    </Routes>
    </main>
  );
};

export default App;
