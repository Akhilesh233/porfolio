# Portfolio Project

This project is a personal portfolio website built with [Create React App](https://github.com/facebook/create-react-app). It showcases the projects, skills, and contact information, and includes an admin interface for adding new projects.

## Features

- Responsive portfolio website
- Animated transitions and effects
- Admin panel for adding projects (with image upload)
- Contact form with email integration
- Interactive map (via react-leaflet)
- FontAwesome icons and custom fonts
- Loader animations

## Required Modules

Install all dependencies with:

```sh
npm i @emailjs/browser sass @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons animate.css react-leaflet react-loaders gsap loaders.css react-router react-router-dom sass-loader

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```

## Project Structure

src/components/: Contains all React components, grouped by feature.
src/assets/: Static assets like images, fonts, and PDFs.
src/firebase.js: Firebase configuration and initialization.
public/: Static files and the main HTML template.

## Environment Variables

Copy .env.example to .env and fill in your Firebase and EmailJS credentials. Make required place value changes in the files.

## License

This project is licensed under the MIT License.