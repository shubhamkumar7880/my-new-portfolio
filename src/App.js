import Layout from "./Layout/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="*" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
