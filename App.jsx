import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogIndex from "./pages/BlogIndex";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
   
    
      <BrowserRouter>
         <nav>
          <Link to = "/blog"> Blog </Link>
          <Link to= "/login"> Login </Link>
          </nav>
        <Routes>
          <Route path="/blog" element={<BlogIndex/>} />
          <Route path = "/login" element = {< LoginPage/>}/>
        
        </Routes>
      </BrowserRouter>
    
   
  );
}
export default App;
