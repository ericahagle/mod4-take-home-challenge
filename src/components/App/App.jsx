import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/somepath/:prop' element={anotherElement} /> */}
	    </Routes>
    </main>
  );
}

export default App;
