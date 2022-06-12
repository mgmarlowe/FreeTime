import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const PickerDropdown = ({ onPickerChange, time, onSubmit }) => {
    return (
        <React.Fragment>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="timeAmt" className="fs-2">
                        How Much Time?
                    </Label>
                    <Input
                        id="timeAmt"
                        name="time"
                        type="select"
                        className="form-select form-select-lg"
                        value={time}
                        onChange={onPickerChange}
                        placeholder="Time"
                    >
                        <option value="fiveMin">5 minutes</option>
                        <option value="tenMin">10 minutes</option>
                        <option value="fifteenMin">15 minutes</option>
                        <option value="twentyMin">20 minutes</option>
                        <option value="thirtyMin">30 minutes</option>
                    </Input>
                    <Button type="submit" className="btn-lg btn-info mt-3">
                        Enter
                    </Button>
                </FormGroup>
            </Form>
        </React.Fragment>
    );
};

export default PickerDropdown;
