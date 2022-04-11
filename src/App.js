import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import Register from './pages/Register';
import Login from './pages/Login';

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
