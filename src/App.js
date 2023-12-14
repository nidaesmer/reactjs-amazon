import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout, SearchResults } from "./components";

import Login from "./components/Login";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocale } from "./redux/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocale());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route exact path="/" index element={<HomePage />} /> {/* kök yol*/}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
