import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.componet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
