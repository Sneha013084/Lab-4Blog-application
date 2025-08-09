import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogIndex from "./pages/BlogIndex";
// import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
        }}
      >
        <nav>
          <Link to="/blog"> Blog </Link>
          <Link to="/login"> Login </Link>
          <Link to="/admin"> Admin</Link>
        </nav>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
