import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import Time from "./TimeComponent";
import PickerDropdown from "./PickerDropdown";
import AddSolution from "./AddSolutionComponent";

const Picker = () => {
    const [time, setTime] = useState("fiveMin");
    const [displayTime, setDisplayTime] = useState();

    const changeTime = (e) => {
        setTime(e.target.value);
    };

    /* this.modal = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.addSolution = this.addSolution.bind(this);

    let modal = this.modal.current.value; */

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayTime(time);
    };

    let content;
    if (displayTime) {
        content = <Time time={displayTime} />;
    } else {
        content = (
            <Card>
                <CardTitle>Select your amount of spare time!</CardTitle>
                <CardBody>
                    Solutions will appear with a link to help you out!
                </CardBody>
            </Card>
        );
    }

    return (
        <div className="container">
            <PickerDropdown
                onPickerChange={changeTime}
                time={time}
                onSubmit={handleSubmit}
            />
            <Button
                className="outline btn btn-info mb-3"
                //onClick={() => modal.open()}
            >
                Add Solution
            </Button>
            <div>{content}</div>
            {/* <AddSolution ref={this.modal} /> */}
        </div>
    );
};

export default Picker;
