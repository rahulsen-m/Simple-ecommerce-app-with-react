import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.componet";
import Nevigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return (
    <div>
      <h2>I am from shop component!!</h2>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nevigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
