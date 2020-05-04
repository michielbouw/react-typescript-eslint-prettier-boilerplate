# Typescript React project boilerplate with ESLint and Prettier

Starting point for a Typescript React project with full setup of SASS/SCSS, ESLint and Prettier for linting and formatting.

## Stack

This project is initialized with [Create React App](https://github.com/facebook/create-react-app) consisting of:

- TypeScript
- React (16+)
- react-scripts (createReactApp)
- react-testing-library (not Enzyme)
- SASS/SCSS
- ESLint (instead of deprecated TSLint)
- Prettier

## Get Started

### Make sure you run Node.js v10+

To install check ([Node.js installation](https://nodejs.org/en/) or [Node Version Manager installation](https://github.com/nvm-sh/nvm)).

### Clone or copy this repo

```bash
curl -L https://github.com/michielbouw/react-typescript-eslint-prettier-boilerplate/archive/master.zip | tar zx
mv react-typescript-eslint-prettier-boilerplate APP_NAME
cd APP_NAME
```

or

```bash
git clone git@github.com:michielbouw/react-typescript-eslint-prettier-boilerplate.git APP_NAME
cd APP_NAME
```

### `yarn install` (or `npm install`)

Note: this project is initialized with [Yarn]() and it's recommended to use it,<br>
but instead you could also use `npm` for all scripts and please remove the yarn.lock file if you do so.

## Development Scripts

In the project directory, you can run:

### `yarn start` (or `npm start`)

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn typecheck` (or `npm run typecheck`)

Launches the typescript check for code to check for TypeScript compilation errors or warnings.

### `yarn lint` (or `npm run lint`)

Launches the linter for code to check for code layout errors or warnings.

### `yarn lint:fix` (or `npm run lint:fix`)

Launches the linter for code to check for code layout errors or warnings, and fixes the ones that can be fixed automatically.

### `yarn test` (or `npm run test`)

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Production Scripts

### `yarn build` (or `npm run build`)

Builds the app for production to the build folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
