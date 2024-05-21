import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from "./pages/Login-page";
// import { Signup } from "./pages/Signup-page";
import { Pemilik } from "./pages/Pemilik";
import { Pemilik2 } from "./pages/Pemilik2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />}></Route> */}
          <Route path="/" element={<Pemilik />}></Route>
          <Route path="/pemilik2" element={<Pemilik2 />}></Route>
          <Route path="/pemilik" element={<Pemilik />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/signup" element={<Signup />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
