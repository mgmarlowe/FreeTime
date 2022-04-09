import React, { Component } from "react";
import Header from "./HeaderComponent";
import Picker from "./PickerComponent";
import Footer from "./FooterComponent";

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Picker />
                <Footer />
            </div>
        );
    }
}

export default Main;
