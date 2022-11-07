import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetail from './Components/ItemDetail/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/Cart';
import CartComp from './Components/Cart/Cart';
import Checkout from './Components/Checkout/checkout'

function App() {
  return (
    <div className="App">
      <CartProvider>    
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetail />}/> 
            <Route path='/cart' element={<CartComp />}/> 
            <Route path='/checkout' element={<Checkout />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
