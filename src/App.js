import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={"login"} />
        <Route path='/register' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
