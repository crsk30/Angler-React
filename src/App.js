import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/productList";
import CartPage from "./components/cartPage";
import ContactForm from "./components/contactForm";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </Router>
);

export default App;
