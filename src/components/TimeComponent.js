import { Card, CardTitle, CardBody, CardLink } from "reactstrap";
import { Component } from "react";
import { SOLUTIONS } from "../shared/timeSolutions";

function RenderTime({ solution }) {
    if (solution.linkDescription) {
        return (
            <Card>
                <CardTitle>{solution.name}</CardTitle>
                <CardBody className="mb-2">{solution.description}</CardBody>
                <CardLink href={solution.link}>
                    {solution.linkDescription}
                </CardLink>
            </Card>
        );
    }
    return (
        <Card>
            <CardTitle>{solution.name}</CardTitle>
            <CardBody className="mb-2">{solution.description}</CardBody>
            <CardLink href={solution.link}>{solution.link}</CardLink>
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
                    <div className="mb-3 col-lg-6" key={solution.id}>
                        <RenderTime solution={solution} />
                    </div>
                );
            });
        return <div className="row">{list}</div>;
    }
}

export default Time;
