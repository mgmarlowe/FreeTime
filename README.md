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

15. Decide you don't need to use Router, or Redux, right now.

    - Instead, use a component to render the time solutions under the select box.

16. Add a local state to the Picker component, which will allow the Time component to access the values.

17. Learn to render conditional components.

    - Based on if and if...else statements.

18. Get formatting correct on how to display items in each solution file.

    - How do I switch solution files based on user input?? Edit: Figured this one out!
    - Consolidate into one file, add key of "time: {timeValue}", and filter list? Then map results? Could work... Edit: Did this!

19. Add button to allow user-made time solutions

    - Doesn't work all the way yet, but it's on the right track.

20. Fix "Add Solution" modal

    - It now works correctly.
    - It still does not actually add a solution. Baby steps.

21. Start work on changing Select to Checkboxes

    - Put this in seperate file so it can be taken apart at will.
        - Add this file to gitignore...

22. Next things to do:

    - Add buttons to each time solution that can clear it from view and fully delete the item
        - The delete function will only work as a clear function at first, then I'll update it to delete it from local storage. But I won't delete it from the actual file until I can get users made.
            - Even then, I may try to have a settings page instead where you can check boxes to hide default solutions from view.

23. Figure out way to display solutions based on user clicks

    - (Should I just collapse them instead of deleting them? Hmm...)
    - Add key to each solution in timeSolutions.js
        - show: true
        - Set a button on each card rendered in TimeComponent that toggles the show.
          -Also should add the name to a list somewhere that has a button to show again...

24. Figured out how to make the FAQs accordion work. The Reactstrap documentation is NOT very clear on how to make it work, but I changed the top-most Accordion tag into the UncontrolledAccordion tag, and now it works.

25. Now to make the Contact Us page...

    - This needs to link to my github, linkedin, and portfolio website.
        - Also, I need to add a projects tab onto my site for Free Time...

26. Actually, nix the whole Contact Page and just add relevent links to the footer.
