import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "../../components/HeaderComponent";
import Picker from "../../components/PickerComponent";
import Faq from "../../components/FaqComponent";
import Footer from "../../components/FooterComponent";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Picker />} />
                        <Route path="/faq" element={<Faq />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
