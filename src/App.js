import { Route, Routes } from "react-router-dom"
import { Home } from './Components/Home';
import { Apply } from './Components/Apply';
import { Programs } from './Components/Programs';
import { About } from './Components/About';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Apply' element={<Apply />} />
          <Route path='/Programs' element={<Programs />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;