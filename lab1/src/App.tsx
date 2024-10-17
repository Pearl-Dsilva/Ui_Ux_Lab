import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Navbar from './components/navbar/navbar';
import Statement from './routes/statement';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/" index element={<Home />} />
          <Route path="/AccountStatement" element={<Statement />} />
          <Route path="/Apply" element={<Home />} />
        </Route>
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
