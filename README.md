# Free Time?

## _Time Confetti Solutions_

---

In today's world, we have a lot of extra time that we often don't notice. This is the ten minutes before you have to go pick up the kids, and the five minutes until your coffee order is ready, and the fifteen minutes when you accidentally get somewhere too early. These are bits of "time confetti" and they're often hard to utilize.

Personally, I've found it difficult to conceptualize these smaller chunks of time as anything other than the temporal equivilent of filler episodes, and usually spend them mindlessly scrolling through my news feed for something useless.

**FreeTime** is an app designed to help users figure out how to utilize time confetti. It started as just a list I made for myself on what to do with my time confetti, but the more it grew, the more possibilities I thought of adding. It's not complete yet, but I'm adding my process below this to remember the overview of what I've done here. Enjoy!

---

---

#### How to Start an Application

Started: 10 March 2022
Finished: ?? ?????? ????

1. Make a wireframe

    - https://wireframe.cc/fuGp3s

2. Start a `create-react-app` file.

    - `npx create-react-app freetime`

3. Make a hierarchy of component parts

    - https://reactjs.org/docs/thinking-in-react.html

    1. Header
        - "Login" button {loginBtn}
    2. Main content
        - "Add Item" button {addItemBtn}
        - timeBox {timeBox}
            - Input box {}
            - "How Much Time" label
        - tagFilter {tagFilter}
            - Wants/don't wants
            - Tag
                - Want button (thumbs up/check)
                - Don't want button (thumbs down/X)
    3. Footer
        - FAQ
        - Contact Us

4. Create component files and call them in App.js:

    - Header file
    - Footer file
    - Main section file

5. Decide to use reactstrap after all.

    - Design is tedious without a framework, though possible.

6. Create Select box and options

7. Fiddle with layout

    - Create "Login" button
    - Create Jumbotron
        - Find out Jumbotron isn't compatible with current Reactstrap, which uses Bootstrap 5
    - Create large header to replace Jumbotron
    - Make select box larger

8. Realize you never added a button to submit the time...

    - Make button...

9. Write a few time solutions for each time segment.

10. Take a couple weeks off the project.

    - Forget how to do basic things like start your app...

11. Figure out how to implement Redux.

    - [ npm install react-redux ]
        - [ npm audic fix --force ] becasue you had a high and a critical vulnerability.
    - Realize you ought to make seperate files for each time segment

12. Make seperate files for each time segment.

13. Forget to document things as they happen, and make a dump list of things done already.

    - Separate MainComponent into Main and Content, to keep App.js clean.
    - Install React Redux and React Router Dom
    - Spend too much time looking for resources for some time solutions. Oh, the irony.
    - Realize you need React Router more than Redux, but you were somehow more focused on Redux. Why.

14. Make event handler to deal with the form submission

    - It doesn't work so far, but I'm working on it.
        - Currently it's just supposed to console log the values submitted, so that may just be not something that is possible with react, I don't know right now.

15. Plan for next time:
    - Create Action Types and Action Creators.
    - Use React Router and the form to change view to show the selected time solutions (and update state?).
    - Decide if I do or don't need Redux.
