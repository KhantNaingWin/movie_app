import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Not from "./components/Not";

function App() {
  return (
    <>
      <Header />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Not />} />
        <Route path="/movie/details/:movieId" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
