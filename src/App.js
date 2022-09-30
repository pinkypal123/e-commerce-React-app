import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Context from "./components/context/Context";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
