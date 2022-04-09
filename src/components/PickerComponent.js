import React, { Component } from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import Time from "./TimeComponent";

class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "fiveMin",
            isSubmitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ time: e.target.value });
        this.setState({ isSubmitted: false });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ isSubmitted: true });
    }

    render() {
        const isSubmitted = this.state.isSubmitted;

        let content;
        if (isSubmitted) {
            content = <Time time={this.state.time} />;
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
                <div className="row">
                    <div className="col">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="timeAmt" className="fs-2">
                                    How Much Time?
                                </Label>
                                <Input
                                    id="timeAmt"
                                    name="time"
                                    type="select"
                                    className="form-select form-select-lg"
                                    value={this.state.time}
                                    onChange={this.handleChange}
                                    placeholder="Time"
                                >
                                    <option value="fiveMin">5 minutes</option>
                                    <option value="tenMin">10 minutes</option>
                                    <option value="fifteenMin">
                                        15 minutes
                                    </option>
                                    <option value="twentyMin">
                                        20 minutes
                                    </option>
                                    <option value="thirtyMin">
                                        30 minutes
                                    </option>
                                </Input>
                                <Button
                                    type="submit"
                                    className="btn-lg btn-info mt-3"
                                >
                                    Enter
                                </Button>
                            </FormGroup>
                        </Form>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Picker;
