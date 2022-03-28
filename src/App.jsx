import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
//import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ArticleCRUD from "./pages/ArticleCRUD";
import UserCRUD from "./pages/UserCRUD";
import CategoryCRUD from "./pages/CategoryCRUD";
import OrderCRUD from "./pages/OrderCRUD";
import EditArticle from "./pages/EditArticle";
import Statistics from "./pages/Statistics";

function App() {
  //const loggedUser = useSelector((state) => state.users[0]);

  return (
    <div className="app">
      <Routes>
        //pages
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Admin />} />
        <Route path="/articulos" element={<ArticleCRUD />} />
        <Route path="/usuarios" element={<UserCRUD />} />
        <Route path="/categorias" element={<CategoryCRUD />} />
        <Route path="/pedidos" element={<OrderCRUD />} />
        <Route path="/estadisticas" element={<Statistics />} />
        //edit pages
        <Route path="/articulos/:id" element={<EditArticle />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
