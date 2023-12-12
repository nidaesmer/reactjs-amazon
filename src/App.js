import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Checkout, SearchResults, ProductPage } from "./components";
import Login from "./components/Login";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route exact path="/" index element={<HomePage />} />
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
