import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class Content extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(value) {
        console.log(value);
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
                                >
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
