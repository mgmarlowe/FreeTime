import {
    Button,
    Card,
    CardTitle,
    CardBody,
    CardLink,
    CardText,
} from "reactstrap";
import { Component } from "react";
import { BiHide } from "react-icons/bi";
import { SOLUTIONS } from "../shared/timeSolutions";

function hideSolution(props) {
    console.log(JSON.stringify(props.solution.id));
    //this.props.setState((props.solution.show = !props.solution.show));
    props.solution.show = !props.solution.show;
    console.log(JSON.stringify(props.solution.show));
    alert(
        "The following solution will be deleted: \n" +
            props.solution.name +
            "\nPlease press 'Enter' to show updated list."
    );
    return props.solution;
}

function RenderTime({ solution }) {
    if (solution.linkDescription) {
        return (
            <Card>
                <CardBody className="mb-2">
                    <Button
                        onClick={() => hideSolution({ solution })}
                        className="ml-3 float-end"
                    >
                        <BiHide />
                    </Button>
                    <CardTitle>{solution.name}</CardTitle>
                    <CardText>{solution.description}</CardText>
                    <CardLink href={solution.link}>
                        {solution.linkDescription}
                    </CardLink>
                </CardBody>
            </Card>
        );
    }
    return (
        <Card>
            <CardBody className="mb-2">
                <Button
                    onClick={() => hideSolution({ solution })}
                    className="ml-3 float-end"
                >
                    <BiHide />
                </Button>
                <CardTitle>{solution.name}</CardTitle>
                {solution.description}
                <CardLink href={solution.link}>{solution.link}</CardLink>
            </CardBody>
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
            .filter((solution) => solution.show === true)
            .map((solution) => {
                return (
                    <div className="mb-3 col-lg-6" key={solution.id}>
                        <RenderTime solution={solution} state={this.state} />
                    </div>
                );
            });
        return <div className="row">{list}</div>;
    }
}

export default Time;
