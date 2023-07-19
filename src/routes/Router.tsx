import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponent from "../components/MyComponent";
import Home from "../components/Home";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<MyComponent curso={"Full Stack"} turma={11} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;