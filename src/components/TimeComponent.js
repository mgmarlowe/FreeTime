import { Card, CardTitle, CardBody } from "reactstrap";

function Time(props) {
    return (
        <Card>
            <CardTitle>Time Amount</CardTitle>
            <CardBody>The amount of time you picked: {props.time}</CardBody>
        </Card>
    );
}

export default Time;
