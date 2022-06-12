import React, { useState } from "react";
import { Button } from "reactstrap";

const Header = () => {
    const [user, setUser] = useState(false);

    function handleLogin(e) {
        setUser({ user: !user });
        e.preventDefault();
    }

    const title = user ? "Logout" : "Login";
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
                    onClick={handleLogin}
                >
                    {title}
                </Button>
            </div>
        </React.Fragment>
    );
};

export default Header;
