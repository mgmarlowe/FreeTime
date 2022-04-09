import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { FIVE } from "../shared/5min";
import { TEN } from "../shared/10min";
import { FIFTEEN } from "../shared/15min";
import { TWENTY } from "../shared/20min";
import { THIRTY } from "../shared/30min";
import Time from "./TimeComponent";

class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "time",
            fiveMin: FIVE,
            tenMin: TEN,
            fifteenMin: FIFTEEN,
            twentyMin: TWENTY,
            thirtyMin: THIRTY,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, value) {
        e.preventDefault();
        this.setState({ time: value });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Form onSubmit={(value) => this.handleSubmit(value)}>
                            <FormGroup>
                                <Label for="timeAmt" className="fs-2">
                                    How Much Time?
                                </Label>
                                <Input
                                    id="timeAmt"
                                    name="time"
                                    type="select"
                                    className="form-select form-select-lg"
                                    defaultValue="default"
                                >
                                    <option disabled value="default">
                                        Time
                                    </option>
                                    <option value="5">5 minutes</option>
                                    <option value="10">10 minutes</option>
                                    <option value="15">15 minutes</option>
                                    <option value="20">20 minutes</option>
                                    <option value="30">30 minutes</option>
                                </Input>
                                <Button
                                    type="submit"
                                    className="btn-lg btn-info mt-3"
                                >
                                    Enter
                                </Button>
                            </FormGroup>
                        </Form>
                        <Time time={this.state.time} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Picker;
