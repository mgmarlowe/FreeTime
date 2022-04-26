import React, { Component } from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap";
import Time from "./TimeComponent";

class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTime: "fiveMin",
            displayTime: "",
            isModalOpen: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.addSolution = this.addSolution.bind(this);
    }

    addSolution(e) {
        alert(
            `You have added a solution!\nName: ${this.solutionName.value}\nDescription: ${this.solutionDescription.value}\nTime Length: Bug - To be fixed.\nLink: ${this.solutionLink.value}\nLink Description: ${this.solutionLinkDescription.value}`
        );
    }

    handleChange(e) {
        this.setState({ selectTime: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ displayTime: this.state.selectTime });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    render() {
        const displayTime = this.state.displayTime;

        let content;
        if (displayTime) {
            content = <Time time={this.state.displayTime} />;
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
                <div>
                    <div>
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
                            <Button
                                className="outline btn btn-info mb-3"
                                onClick={this.toggleModal}
                            >
                                Add Solution
                            </Button>
                        </Form>
                        <div>{content}</div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Add a custom time solution
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.addSolution}>
                            <FormGroup>
                                <Label>Solution Name: </Label>
                                <Input
                                    name="solutionName"
                                    id="solutionName"
                                    type="text"
                                    innerRef={(input) =>
                                        (this.solutionName = input)
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Solution Description: </Label>
                                <Input
                                    name="solutionDescription"
                                    id="solutionDescription"
                                    type="text"
                                    innerRef={(input) =>
                                        (this.solutionDescription = input)
                                    }
                                />
                            </FormGroup>
                            <FormGroup row tag="fieldset">
                                <legend>Time length: </legend>
                                <Col>
                                    <FormGroup check>
                                        <Input
                                            name="timeLength"
                                            value="fiveMin"
                                            id="fiveMin"
                                            type="radio"
                                        />
                                        <Label for="fiveMin" check>
                                            5 minutes
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                            name="timeLength"
                                            value="tenMin"
                                            id="tenMin"
                                            type="radio"
                                        />
                                        <Label for="tenMin" check>
                                            10 minutes
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                            name="timeLength"
                                            value="fifteenMin"
                                            id="fifteenMin"
                                            type="radio"
                                        />
                                        <Label for="fifteenMin" check>
                                            15 minutes
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                            name="timeLength"
                                            value="twentyMin"
                                            id="twentyMin"
                                            type="radio"
                                        />
                                        <Label for="twentyMin" check>
                                            20 minutes
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                            name="timeLength"
                                            value="thirtyMin"
                                            id="thirtyMin"
                                            type="radio"
                                        />
                                        <Label for="thirtyMin" check>
                                            30 minutes
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label>Link: </Label>
                                <Input
                                    name="solutionLink"
                                    id="solutionLink"
                                    type="url"
                                    innerRef={(input) =>
                                        (this.solutionLink = input)
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Link Description: </Label>
                                <Input
                                    name="solutionLinkDescription"
                                    id="solutionLinkDescription"
                                    type="text"
                                    innerRef={(input) =>
                                        (this.solutionLinkDescription = input)
                                    }
                                />
                            </FormGroup>
                            <Button
                                type="submit"
                                value="submit"
                                className="outline btn btn-info mb-3"
                            >
                                Add Solution
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Picker;
