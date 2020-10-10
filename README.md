# Status Code Weekly App

The aim of this project is to build an app to display some user data.

This project is deployed [here]().

## Functionality
This is a web application that contains the following main features:
- Fully responsive on mobile, tablet and desktop views
- Users can view data fetched from backend
- Users can navigate between pages
- User can shuffle and reset user data

## Technology
- Libraries: `React, axios`
- Styling: `SASS`
- Testing: `N/A`
- Build: `Create-React-App`
- Deployment: `Netlify`

## Development
This project is using `yarn` for dependency management.  Make sure `yarn` is installed on your machine.

- `yarn install` 

Install project dependencies.

- `yarn start`

Run the app in development mode on `http://localhost:3000/`.

## Future Improvements

Due to time constraints, there are many areas are not handled perfectly on purpose. Below is a list of future improvements to make this app better.

- Typescript should be used to provide typing to the application
- Frontend state management should be used to handle app state
- Should set up a monorepo architecture, so UI elements (like Button, Card) can be extracted into a library and be shared among other apps
- Should handle possible errors thrown from backend when loading data
- Reduce wasted rendering by introducing pure component
- Declare a complete set SASS variables, currently only a few variables are created
- Should set up pre-commit Git hook to prettify and lint codebase
- Write unit tests, as without unit tests future refactor would be difficult
- Should set up E2E / Visual test using something like Cypress + Percy
- Should set up CI/CD for a streamline deployment process
