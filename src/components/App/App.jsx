import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import mockData from '../../mock-data';
import Home from '../Home/Home';

function App() {
  const [ articles, setArticles ] = useState(mockData);


  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home articles={articles}/>} />
        {/* <Route path='/somepath/:prop' element={anotherElement} /> */}
	    </Routes>
    </main>
  );
}

export default App;
