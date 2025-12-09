import React from "react";
import Counter from "./components/Counter";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <h1>Redux tutorials</h1> <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
