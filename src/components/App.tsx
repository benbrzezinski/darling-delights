import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout";

const Home = lazy(() => import("../pages/Home"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
