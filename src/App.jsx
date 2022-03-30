import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ArticleCRUD from "./pages/ArticleCRUD";
import UserCRUD from "./pages/UserCRUD";
import CategoryCRUD from "./pages/CategoryCRUD";
import OrderCRUD from "./pages/OrderCRUD";
import EditArticle from "./pages/EditArticle";
import EditUser from "./pages/EditUser";
import EditCategory from "./pages/EditCategory";
import Statistics from "./pages/Statistics";

function App() {
  const loggedUser = useSelector((state) => state.user);

  return (
    <div className="app">
      {loggedUser ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          {/* pages */}
          <Route path="/articulos" element={<ArticleCRUD />} />
          <Route path="/usuarios" element={<UserCRUD />} />
          <Route path="/categorias" element={<CategoryCRUD />} />
          <Route path="/pedidos" element={<OrderCRUD />} />
          <Route path="/estadisticas" element={<Statistics />} />
          {/* edit pages */}
          <Route path="/articulos/:id" element={<EditArticle />} />
          <Route path="/usuarios/:username" element={<EditUser />} />
          <Route path="/categorias/:id" element={<EditCategory />} />
          {/* login */}
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
