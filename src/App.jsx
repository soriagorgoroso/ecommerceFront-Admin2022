// import "./App.css";
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
import EditOrder from "./pages/EditOrder";
import UserCreate from "./pages/UserCreate";
import ArticleCreate from "./pages/ArticleCreate";
import CategoryCreate from "./pages/CategoryCreate";

function App() {
  const loggedUser = useSelector((state) => state.user);

  return (
    <div className="app">
      {loggedUser ? (
        <Routes>
          {/* login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          {/* pages */}
          <Route path="/articulos" element={<ArticleCRUD />} />
          <Route path="/usuarios" element={<UserCRUD />} />
          <Route path="/categorias" element={<CategoryCRUD />} />
          <Route path="/ordenes" element={<OrderCRUD />} />
          <Route path="/estadisticas" element={<Statistics />} />
          {/* edit pages */}
          <Route path="/articulos/:id" element={<EditArticle />} />
          <Route path="/usuarios/:username" element={<EditUser />} />
          <Route path="/categorias/:name" element={<EditCategory />} />
          <Route path="/ordenes/:id" element={<EditOrder />} />
          {/* create pages */}
          <Route path="/usuarios/nuevo" element={<UserCreate />} />
          <Route path="/articulos/nuevo" element={<ArticleCreate />} />
          <Route path="/categorias/nuevo" element={<CategoryCreate />} />
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
