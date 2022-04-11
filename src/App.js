import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Profile from './components/profile/Profile';
import Shop from './components/shop/Shop';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
