import React from "react";
import { Button } from "reactstrap";

function Header() {
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
                    className="position-absolute top-0 end-0 me-5"
                >
                    Login
                </Button>
            </div>
        </React.Fragment>
    );
}

export default Header;
