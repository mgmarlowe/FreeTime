import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./HeaderComponent";
import Picker from "./PickerComponent";
import Faq from "./FaqComponent";
import Footer from "./FooterComponent";

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Picker />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
