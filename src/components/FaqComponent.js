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
                        <a href="https://behavioralscientist.org/time-confetti-and-the-broken-promise-of-leisure/">
                            "Time Confetti"
                        </a>{" "}
                        is the term coined by{" "}
                        <a href="http://www.brigidschulte.com/">
                            Brigid Schulte
                        </a>{" "}
                        to describe the small pieces of leisure time we have in
                        the modern world. Because of our busy lives, it often
                        feels like we have no free time. We actually have more
                        leisure time now than we did fifty years go, but much of
                        that time is only short fragments, five minutes while
                        you wait on coffee, or fifteen minutes on your commute.
                        <br />
                        <br />
                        Free Time came from my own struggle to do things with my
                        time that weren't just scrolling on the internet waiting
                        on something, only to feel like I've wasted my time
                        afterwards. I began to make a list, then realized others
                        also have this struggle to use their time mindfully,
                        even if it doesn't have to be productive.
                        <br />
                        <br /> While a lot of the solution to time confetti is
                        to put measures in place to keep you from shredding up
                        your own time, having a quick list of things to do is
                        helpful when your're unsure, of if you're just having a
                        hard time deciding on something, or thinking about
                        anything. This has been helpful for myself, and I hope
                        it can be helpful for you, too.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        How do I find more information about the app?
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <a href="https://github.com/mgmarlowe/FreeTime">
                            The GitHub
                        </a>{" "}
                        for Free Time has the code, of course, and the ReadMe is
                        a frequently updated list of what I've been doing and
                        issues I've come across.
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
