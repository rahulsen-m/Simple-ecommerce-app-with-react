import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.componet";

const Nevigation = () => {
  return (
    <div>
      <div>
        <h1>I am from Nevigation bar component..</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <h2>I am from shop component!!</h2>
      <Outlet />
    </div>
  );
};

const Billing = () => {
  return <h3>I am bililing compnent</h3>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nevigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}>
          <Route path="billing" element={<Billing />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
