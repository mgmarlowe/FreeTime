import React, { Component } from "react";
import { Button } from "reactstrap";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
        e.preventDefault();
    }

    render() {
        const title = this.state.isLoggedIn ? "Logout" : "Login";
        return (
            <React.Fragment>
                <div className="position-relative border-bottom mb-5">
                    <h1 className="col mt-4 mb-2 display-2">
                        <a href="/">Free Time?</a>
                    </h1>
                    <h3 className="col text-muted fst-italic">
                        Time Confetti Solutions
                    </h3>
                    <Button
                        color="info"
                        className="position-absolute top-0 end-0 me-md-5 "
                        onClick={this.handleLogin}
                    >
                        {title}
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
