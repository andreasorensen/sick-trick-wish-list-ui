### This repo is used as an assessment during the course of the Turing modules, if you are viewing this repository outside the context of an assessment, you’re in violation of the Academic Integrity policy you agreed to as a student.

## Sick Trick Wish List - Frontend

This application was built with `create-react-app`.

### Set Up

Fork + clone down this repo.

Run `npm install` to install dependencies for the repo.

Run `npm start` to start up your React server.

Run `npm run cypress` to start up the Cypress testing server.

### Expectations / Rules

**Please, read the entirety of each iteration's description before starting to code that iteration's features. There are some helpful notes included**

Build an app for yr local sk8 rat to help them track their trick progression.

You will have 3 hours to build this application.
![Sick Trick Wish List Screenshot](https://user-images.githubusercontent.com/49926352/136711929-b2c5ecb2-d45b-4ef4-a38c-e9b3ddc52397.png)

We do want to see good commit habits - atomic commits that log small, focused changesets. Don't worry about creating GitHub issues, though.

### Tips:
- Your app should _generally_ match the comp but css/styling/comp matching are not the skills we're assessing here.  Deprioritize this so you don't spend too much time on it.
- Error handling and client side validation is important, but is not what we're assessing here. Finish the functionality of iterations 0-3 before focusing on this.
- Take poms and drink water. The 3 hour time frame was decided to allow for lots of poms.

************************

### Iteration 0

Pull down the [API repo](https://github.com/turingschool-examples/sick-trick-wish-list-api). Set up instructions are in that repository's README.

Do *not* nest this inside your front-end repository.

### Iteration 1 [X]

Get all existing tricks from the API on page load and display them on the DOM. 


### Iteration 2  [X]

Create a controlled Form component to create a trick (look into the API documentation to see what pieces of information are expected, and what datatypes it wants each piece to be). As a user types into the input fields, the form component's state should change.  When the user clicks the `SEND IT` button, the application should update the App's state.  The new trick should display with all of the existing tricks. 

Notes:  
[X] The `Stance` select input should contain options 'Regular' and 'Switch'
[X] The `Obstacle` select input should contain options 'Flatground', 'Ledge', 'Rail', 'Stairs', and 'Pool'
- You do not need to worry about error handling!  
- Do not worry about making the POST request to the database yet.

### Iteration 3

Now that the functionality is there for adding a trick, write some tests:

**Be sure to intercept and stub any userflows that rely on data from the API**
* [X] Write tests covering what should be displayed on the page when the user first visits.
* [X] Write a test that checks that when data is put into the form, the value is reflected in that form input.
* [] Write a test to check the user flow of adding a new trick to the DOM.

### Iteration 4 (extension for midmod but will be expected on final)

When the user makes a trick, the application should make a post request to the API. The new trick should still exist upon reloading the page.

Note:  
- Keep any fetch calls you write in the App component for now. If you have time to refactor your fetch calls into a separate helper file, that is fine, but it is *NOT* a requirement for this application.

### Iteration 5 (extension)

Delete a trick when the user clicks an `X` button.  The deletion should persist upon reloading the page.

### Other Extensions
* Add a counter for `Attempts` to each `Trick` card. User should be able to click an existing trick's `attempts` number. and increase the number representing how many times they've attemted this trick. 
* Try writing out a few other tests to cover sad path testing for your network requests.
