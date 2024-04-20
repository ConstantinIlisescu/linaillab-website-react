import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/routes/navigation/Navigation";
import Home from "@/routes/home/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="*" element={<>Error page</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
