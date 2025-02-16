import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
    return (
        <div className="flex justify-center">
            <div className="w-full h-full bg-customBlue">
                <Navbar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/doctors" element={<Doctors/>}></Route>
                        <Route path="/blog" element={<Blog/>}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
