import Header from "../Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import LoginPage from "../../routes(pages)/LoginPage";
import MainPage from "../../routes(pages)/MainPage";
import Product from "../../routes(pages)/Product";

function App() {
  return (
    // basename={process.env.PUBLIC_URL}
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/*" element={<Product />} />
        {/* <Route path="/mycart" element{} /> */}
        {/* <Route path="/myfav" element{} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
