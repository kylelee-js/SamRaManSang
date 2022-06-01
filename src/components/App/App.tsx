import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import LoginPage from "../../routes(pages)/LoginPage";
// import MainPage from "../../routes(pages)/MainPage";
// import Product from "../../routes(pages)/Product";
import React, { Suspense } from "react";

const LoginPage = React.lazy(() => import("../../routes(pages)/LoginPage"));
const MainPage = React.lazy(() => import("../../routes(pages)/MainPage"));
const Product = React.lazy(() => import("../../routes(pages)/ProductPage"));

function App() {
  return (
    // basename={process.env.PUBLIC_URL}
    <Router>
      <Header />
      <Suspense fallback={<>loading fallback Suspense</>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/*" element={<Product />} />
          {/* <Route path="/mycart" element{} /> */}
          {/* <Route path="/myfav" element{} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
