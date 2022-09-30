import { Provider } from "react-redux";
// import store from "../redux/store";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import './App.scss';

function App() {
  return (
       <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            {/* <Route path="/" element={} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
        </>

  )
}

export default App;
