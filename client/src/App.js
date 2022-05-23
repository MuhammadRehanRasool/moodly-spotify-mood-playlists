import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
