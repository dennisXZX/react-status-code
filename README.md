# Status Code Weekly App

The aim of this project is to build an app to display some user data.

This project is deployed [here](https://modest-pike-17cdfe.netlify.app/).

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

Note: If you run into error during `yarn install`, please make sure you downgrade your `node` version to `v14` as `node-sass` in this project does not support the latest version of `node`.

- `yarn start`

Run the app in development mode on `http://localhost:3000/`.

## Future Improvements

Due to time constraints, there are many areas that are not handled perfectly on purpose. Below is a list of future improvements to make this app better.

- Typescript should be used to provide typing to the application
- Frontend state management should be used to handle app state
- Should set up a monorepo architecture, so UI elements (like Button, Card) can be extracted into a library and be shared among other apps
- Should handle possible errors thrown from backend when loading data
- Should display a loading UI when fetching data from backend
- Reduce wasted rendering by introducing pure components
- Declare a complete set of SASS variables, currently only a few variables are created
- Should set up pre-commit Git hook to prettify and lint modified code
- Write unit tests, as without unit tests future refactor would be difficult
- Should set up E2E / visual test using something like Cypress + Percy
- Should set up CI/CD for a streamline deployment process
