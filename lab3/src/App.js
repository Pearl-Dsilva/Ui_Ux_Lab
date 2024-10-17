import logo from './logo.svg';
import styles from './App.Module.css';
import Navbar from './components/navbar/navbar';
import Home from './routes/home';
import { Route, Routes } from 'react-router-dom';
import Intro from './routes/intro';
import About from './routes/about';
import Contact from './routes/contact';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/Intro' element={<Intro />} />
        <Route path='/Solutions' element={<Intro />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
