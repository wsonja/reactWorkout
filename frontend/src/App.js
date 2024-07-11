import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages" style={{marginTop: 0, paddingTop: 0}}>
        <Routes>
          <Route path="/"
            element={<Home />}/>
        </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
