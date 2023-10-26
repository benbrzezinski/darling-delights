import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "../layout/SharedLayout";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const ShopDetails = lazy(() => import("../pages/ShopDetails"));
const Collections = lazy(() => import("../pages/Collections"));
const CollectionSummer = lazy(() => import("../pages/CollectionSummer"));
const CollectionSpring = lazy(() => import("../pages/CollectionSpring"));
const About = lazy(() => import("../pages/About"));

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
        <Route path="collections" element={<Collections />} />
        <Route path="collections/summer" element={<CollectionSummer />} />
        <Route path="collections/spring" element={<CollectionSpring />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
