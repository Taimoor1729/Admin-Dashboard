import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<List />} />
        <Route path="/users/:userId" element={<Single />} />
        <Route path="/users/new" element={<New />} />
        <Route path="/product" element={<List />} />
        <Route path="/product/:productId" element={<Single />} />
        <Route path="/product/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
