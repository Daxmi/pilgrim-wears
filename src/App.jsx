import { useState, useEffect } from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
// import { useSelector } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      // fetch("http://localhost:5000/auth/login/success", {
      //   method: "GET",
      //   credentials: "include",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Credentials": true,
      //   },
      // })
      //   .then((response) => {
      //     if (response.status === 200) return response.json();
      //     throw new Error("authentication has been failed!");
      //   })
      //   .then((resObject) => {
      //     setUser(resObject.user);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // const res = await axios.get("https://pilgrim-wears.herokuapp.com/auth/login/success", { withCredentials: true });
      const res = await axios.get(`https://pilgrim-wears.herokuapp.com/auth/login/success`, { withCredentials: true });
      console.log(res);
      // setUser(res.data.user)
    };
    getUser();
  }, []);

  console.log(user)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={user ? <Checkout /> :  <Login />}  />
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="success" element={<Success />} />

      </Routes>
    </Router>
  )
};

export default App;