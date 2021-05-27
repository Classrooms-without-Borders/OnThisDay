# Dev Setup
* Clone this git repository.
* Run `npm install` to install all package dependencies.
* Run `npm run start` to start your local development server and view the React app.

# Dev Workflow
* Commit changes in your own working branch.
* Once a feature is completed, merge your branch to master and resolve merge conflicts. Ensure that the resulting code builds properly on your local dev server.
* Run `git push heroku master` to deploy changes to the live site here: https://on-this-day-cwb.herokuapp.com/

# Directory Structure/Documentation
All code goes in the `src` directory. Each subdirectory (except `src/styling`) contains an `index.js` file which exports all components used by other modules outside of that subdirectory. When adding a new file to a subdirectory, ensure that you export it from the appropriate `index.js` file as well.

## src/util
Exports all backend-related functionality. This includes any functions which read or write from Firestore. In theory, only the code in this directory should have to import Firebase.

## src/components
Exports modular components used to create the UI.
* Files in this directory should used [*named exports* rather than default exports](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910). This allows multiple closely-related components to be exported together from one file without creating inconsistencies in export syntax.

## src/pages
Exports full pages of the app created by combining various components and utility functions.
* Files in this directory should used *default exports* rather than named exports, since we only export one page component per file.

## src/styling
Contains resources for styling pages and components. There is no `index.js` file for this directory.
* `Constants.js` has a default export `constants`. This is a JavaScript object which contains common colours, fonts, sizes, etc. for the site to ensure consistency in styling. This object should be imported and used to style components/pages whenever possible. Try to avoid hard-coding these values which may change over time.
* The CSS files are imported into individual components/pages to provide further styling whenever the CSS-in-JS styling is inadequate. However, try to stick with CSS-in-JS whenever possible, as this makes the styling more consistent and flexible.

## src/images
Contains pictures/logos to be used on the site.

# Coding Style
A general React style guide to follow: https://github.com/airbnb/javascript/blob/master/react/README.md
