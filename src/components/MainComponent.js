import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';



class Main extends Component {
    /* constructor(props) {
        super(props);
    } */

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Form>
                            <FormGroup>
                                <Label for="timeAmt" className='fs-2'>How Much Time?</Label>
                                <Input
                                    id="timeAmt"
                                    name="time"
                                    type="select"
                                    className='form-select form-select-lg'
                                >
                                    <option>
                                        5 minutes
                                    </option>
                                    <option>
                                        10 minutes
                                    </option>
                                    <option>
                                        15 minutes
                                    </option>
                                    <option>
                                        20 minutes
                                    </option>
                                    <option>
                                        30 minutes
                                    </option>
                                    <option>
                                        40 minutes
                                    </option>
                                    <option>
                                        50 minutes
                                    </option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;