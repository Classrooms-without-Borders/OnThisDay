# Setup
* Clone this git repository.
* Run `npm install` to install all package dependencies.
* Run `npm run start` to start your local development server and view the React app.

# Directory Structure
All code goes in the `src` directory. Each subdirectory contains an `index.js` file which exports all components used by other modules outside of that subdirectory.
* `src/util` exports all backend-related functionality. This includes any functions which read or write from Firestore. In theory, only the code in this directory should have to import Firebase.
* `src/components` exports modular components used to create the UI.
* `src/pages` exports full pages of the app created by combining various components and utility functions.

# Coding Style
A general React style guide to follow: https://github.com/airbnb/javascript/blob/master/react/README.md
