import React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/blog/Create";
import Detail from "./pages/blog/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}> Home </Route>
      <Route path="/blog/create" element={<Create />} >Halaman Create Blog</Route>
      <Route path="/blog/detail/:id/:slug" element={<Detail />} >Halaman Detail Page</Route>
      <Route path="/*" element={<NotFound />} >Not Found</Route>
    </Routes >
  )
}