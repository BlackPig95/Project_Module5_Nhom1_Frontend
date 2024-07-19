import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layouts/client/header";
import LoginForm from "./pages/client/login";

import HeaderAdmin from "./layouts/admin/header";
import Footer from "./layouts/client/footer";

// import Carousel from './components/clientComponents/carousel/Carousel';
// import ListMovie from './components/clientComponents/listMovie/ListMovie';

export default function App() {
  return (
    // <div style={{ display: "flex" }}>
    //   <Menu />
    //   <div style={{ flex: 1 }}>
    //     <HeaderAdmin />
    //     <DashBoard />
    //   </div>
    // </div>
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<HeaderAdmin />} />
        <Route path="/" element={<Footer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
