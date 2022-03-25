import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  const loggedUser = useSelector((state) => state.users[0]);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
