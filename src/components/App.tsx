import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "../layout/SharedLayout";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const ShopDetails = lazy(() => import("../pages/ShopDetails"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SharedLayout />
            <ScrollToTop />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ShopDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
