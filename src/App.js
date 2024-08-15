// import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header-Footer/Navbar";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
import Cart from "./Components/Cart/Cart";
import Orders from "./Components/Orders/Orders";
import Cards from "./Components/Products/Cards";
import Footer from "./Components/Header-Footer/Footer";
import GoogleAuth from "./Components/Auth/GAuth";

function App() {
  const PATH = process.env.REACT_APP_PATH;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={`${PATH}`} element={<Cards />} />
          <Route path={`${PATH}/login`} element={<Login />} />
          <Route path={`${PATH}/register`} element={<Register />} />
          <Route path={`${PATH}/logout`} element={<Logout />} />
          <Route path={`${PATH}/cart`} element={<Cart />} />
          <Route path={`${PATH}/orders`} element={<Orders />} />
          <Route path={`${PATH}/gauth`} element={<GoogleAuth />} />
        </Routes>
      </Router>
      <hr className="m-0" />
      <Footer />
    </div>
  );
}

export default App;
