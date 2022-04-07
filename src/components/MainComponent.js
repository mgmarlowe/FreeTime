import React, { Component } from "react";
import Header from "./HeaderComponent";
import Content from "./ContentComponent";
import Footer from "./FooterComponent";

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Main;
