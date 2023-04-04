import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from './pages/Layout';
import Theme from './pages/Theme';
import ApiPage from './pages/ApiPage';

 function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Layout/>}>
        <Route index element ={<Home/>}/>
        <Route path = "blogs" element = {<Blogs/>}/>
        <Route path = "contact" element = {<Contact/>}/>
        <Route path = "theme" element = {<Theme/>}/>
        <Route path = "apipage" element = {<ApiPage/>}/>
        <Route path = "*" element = {<NoPage/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
  
};
export default App ;
