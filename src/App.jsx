import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
//import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ArticleCRUD from "./pages/ArticleCRUD";
import UserCRUD from "./pages/UserCRUD";
import CategoryCRUD from "./pages/CategoryCRUD";

function App() {
  //const loggedUser = useSelector((state) => state.users[0]);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Admin />} />
        <Route path="/articulos" element={<ArticleCRUD />} />
        <Route path="/usuarios" element={<UserCRUD />} />
        <Route path="/categorias" element={<CategoryCRUD />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
