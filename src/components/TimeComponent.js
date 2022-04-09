import { Card, CardTitle, CardBody } from "reactstrap";
import { Component } from "react";
import { SOLUTIONS } from "../shared/timeSolutions";

function RenderTime({ solution }) {
    return (
        <Card>
            <CardTitle>{solution.name}</CardTitle>
            <CardBody className="mb-2">{solution.description}</CardBody>
        </Card>
    );
}

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSolutions: SOLUTIONS,
        };
    }

    render() {
        //const timeSolutions = this.state.timeSolutions;
        const list = this.state.timeSolutions
            .filter((solution) => this.props.time === solution.timeAmt)
            .map((solution) => {
                return (
                    <div key={solution.id}>
                        <RenderTime solution={solution} />
                    </div>
                );
            });

        return <div>{list}</div>;
    }
}

export default Time;
