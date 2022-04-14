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
    Modal,
} from "reactstrap";
import Time from "./TimeComponent";

class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "fiveMin",
            isSubmitted: false,
            isModalOpen: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.addSolution = this.addSolution.bind(this);
    }

    addSolution(e) {
        alert(`You have added a solution!`);
    }

    handleChange(e) {
        this.setState({ time: e.target.value });
        this.setState({ isSubmitted: false });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ isSubmitted: true });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
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
                            <Button
                                className="outline btn btn-info mb-3"
                                onClick={this.toggleModal}
                            >
                                Add Solution
                            </Button>
                        </Form>
                        {content}
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                >
                    <Modal.Header toggle={this.toggleModal}>
                        Add a custom time solution
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.addSolution}>
                            <FormGroup>
                                <Label>Solution Name: </Label>
                                <Input />
                            </FormGroup>
                            <FormGroup>
                                <Label>Solution Description: </Label>
                                <Input></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Time length: </Label>
                                <Input></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Link: </Label>
                                <Input></Input>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Picker;
