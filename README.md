# Portfolio Project

A modern, responsive personal portfolio website built with React.js. This portfolio showcases projects, skills, and contact information, featuring an admin interface for managing content.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Components Overview](#components-overview)
- [Deployment](#deployment)
- [License](#license)

## Features

- **Responsive Design**: Fully responsive portfolio that works on all devices
- **Animated Transitions**: Smooth animations using GSAP, Animate.css, and custom transitions
- **Particle Effects**: Interactive background particles using tsparticles
- **Image Upload**: Firebase Storage integration for project images
- **Contact Form**: Functional contact form with EmailJS integration
- **Custom Fonts**: Beautiful custom fonts (Coolvetica, La Belle Aurore)
- **Typewriter Effect**: Animated text effects for headings

## Tech Stack

### Frontend

- **React.js** (18.2.0) - Frontend library
- **React Router** (6.4.5) - Client-side routing
- **Sass** (1.56.1) - CSS preprocessor

### Animation & Effects

- **GSAP** (3.13.0) - Animation library
- **Animate.css** (4.1.1) - CSS animations
- **Loaders.css** (0.1.2) - Loading animations
- **tsparticles** (2.9.3) - Particle backgrounds
- **Typewriter Effect** (2.19.0) - Typewriter animations

### Backend & Services

- **Firebase** (9.15.0) - Authentication, Firestore, Storage
- **EmailJS** - Contact form email service
- **react-leaflet** (4.2.0) - Interactive maps

### UI Components

- **FontAwesome** - Icons (brands & solid)

## Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package managers
- **Firebase Account** - For authentication and storage
- **EmailJS Account** - For contact form functionality

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add the following variables (see [Environment Variables](#environment-variables) section for details):

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

4. **Start the development server**

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_FIREBASE_API_KEY` | Firebase API Key | Yes |
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | Yes |
| `REACT_APP_FIREBASE_PROJECT_ID` | Firebase Project ID | Yes |
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | Yes |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID | Yes |
| `REACT_APP_FIREBASE_APP_ID` | Firebase App ID | Yes |
| `REACT_APP_FIREBASE_MEASUREMENT_ID` | Firebase Measurement ID | No |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS Public Key | Yes |

### Setting up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** with Google provider
4. Enable **Firestore Database**
5. Enable **Storage** for image uploads
6. Copy your config credentials to `.env`

### Setting up EmailJS

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create an account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Copy your Public Key to `.env`

## Project Structure

```
portfolio/
├── public/                      # Static files
│   ├── index.html              # Main HTML template
│   ├── manifest.json           # PWA manifest
│   ├── project/                # Project images
│   │   └── 1/
│   │       └── one.png
│   └── favicon.ico             # Favicon
├── src/
│   ├── assets/                 # Static assets
│   │   ├── fonts/              # Custom fonts
│   │   │   ├── CoolveticaRg-Regular.woff
│   │   │   ├── CoolveticaRg-Regular.woff2
│   │   │   ├── helvetica-neu.ttf
│   │   │   ├── LaBelleAurore.woff
│   │   │   └── LaBelleAurore.woff2
│   │   ├── images/             # Portfolio images
│   │   │   ├── logo_sub.png
│   │   │   ├── logo-lines.svg
│   │   │   └── logo*.png
│   │   ├── particles.json      # Particle configuration
│   │   └── sample-Resume.pdf   # Resume file
│   ├── components/             # React components
│   │   ├── About/              # About section
│   │   ├── Admin/              # Admin panel
│   │   ├── AnimatedLetters/    # Letter animation
│   │   ├── Contact/            # Contact form
│   │   ├── Home/               # Home page & logo
│   │   ├── Layout/             # Layout wrapper
│   │   ├── Login/              # Login page
│   │   ├── Project/            # Projects display
│   │   ├── RenderProject/      # Project renderer
│   │   ├── Sidebar/            # Navigation sidebar
│   │   └── Skill/              # Skills display
│   ├── data/                   # Data files
│   │   └── project.json        # Projects data
│   ├── App.js                  # Main App component
│   ├── App.scss                # Main styles
│   ├── firebase.js             # Firebase configuration
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── .prettierrc
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Components Overview

| Component | Description |
|-----------|-------------|
| **Home** | Main landing page with animated logo and welcome message |
| **About** | Personal information and background |
| **Skills** | Technical skills displayed as tag cloud |
| **Projects** | Portfolio of completed projects |
| **Contact** | Contact form with map integration |
| **Admin** | Protected admin panel for managing projects |
| **Login** | Google authentication for admin access |
| **Sidebar** | Navigation sidebar with social links |
| **AnimatedLetters** | Animated text component |
| **Layout** | Main layout wrapper |

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [Firebase](https://firebase.google.com/)
- [EmailJS](https://www.emailjs.com/)
- [FontAwesome](https://fontawesome.com/)
- [GSAP](https://greensock.com/gsap/)

---

**Author**: Akhilesh Ranjan Kumar  
**Version**: 1.0.0
