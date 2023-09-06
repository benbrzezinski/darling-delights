import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
    </Routes>
  );
};

export default App;
