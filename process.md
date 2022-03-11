
# Free Time?

## Time Confetti Solutions

### How to Start an Application

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

8. 