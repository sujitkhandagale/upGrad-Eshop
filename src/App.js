import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import ProductCard from './components/product/ProductCard';
import Products from './pages/Products';
import "./Global.css"
import Layouts from './components/layout/Layouts';
import ProductDetails from './components/product/Product Details/ProductDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts><Home /></Layouts>} />
        <Route path='/signin' element={<Layouts><SignIn /></Layouts>} />
        <Route path='/signup' element={<Layouts><SignUp/></Layouts>} />
        <Route path='/products' element={<Layouts><Products /></Layouts>} />
        <Route path='/products/:id' element={<Layouts><ProductDetails /></Layouts>} />
      </Routes>
    </>
  );
}

export default App;
