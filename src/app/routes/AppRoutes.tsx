import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponent from "../components/MyComponent";
import Home from "../components/Home";
import { Counter } from "../components/Counter";
import PersonsPage from "../pages/PersonsPage";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PersonsPage/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/login" element={<MyComponent curso={"Full Stack"} turma={11} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;