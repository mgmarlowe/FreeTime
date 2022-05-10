//import { useState } from "react";
import {
    UncontrolledAccordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody,
} from "reactstrap";

function Faq() {
    return (
        <div>
            <UncontrolledAccordion flush stayOpen>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        What is 'time confetti?'
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        This should be changed to an actual answer, include a
                        link to research.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        What is 'time confetti?'
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        This should be changed to an actual answer, include a
                        link to research.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">
                        When will I be able to add my own solutions?
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        Currently, there is no backend database set up for Free
                        Time. Instead of leveraging technologies used in past
                        bootcamps to build one with PostgreSQL, I've decided to
                        wait for my upcoming bootcamp where I'll learn to use
                        MongoDB. That way, I'll be able to make a database while
                        I learn more effectively how to use a new technology.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">
                        Will I be able to have an account?
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                        Yes! As soon as I implement a database, I'll add a real
                        set of user functionality, most likely with Auth0 so you
                        can sign up with a previously existing account.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5">
                        Can I suggest a solution to be added to the default
                        solutions?
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                        Yes! Go to the{" "}
                        <a href="https://github.com/mgmarlowe/FreeTime">
                            GitHub page
                        </a>{" "}
                        for Free Time and click on 'Issues.' From there, you'll
                        see the 'create and issue' option. Please include an
                        amount of time the solution takes, a solution name, a
                        description of the solution, a link, and a link
                        description. Try to keep the solution name pretty short,
                        this is designed to be seen at a quick glance.
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        </div>
    );
}

export default Faq;
