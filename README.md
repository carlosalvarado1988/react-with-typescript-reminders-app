# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Dev notes

### CSS

- installed bootstrap for UI css `npm i bootstrap`
- added css in index.tsx `import "bootstrap/dist/css/bootstrap.css";`
- to the list, added: `<ul className="list-group">` & `<li className="list-group-item"`
- for remove button added: `<button className="btn btn-outline-danger mx-3">`
- to create the form component with autocomplete `label+input.form-control+button.btn.btn-primary.rouded-pill` and press ENTER
- for accesibility, we ty htmlFor to input ID, `<label htmlFor="title"> ... <input id="title"` this so when the user clicks on the label, it automatically focus on the input

### API

- we use [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) to mock the API
- installed Axios for API call `npm i axios`
- configured reminder class with base url `https://jsonplaceholder.typicode.com`
- added methods: `getReminders, addReminder, removeReminder`
- exported the instance of the class to make it easy for usage: `export default new ReminderService()`

## UI Logic

- implemented delete from UI with filter: `setReminder(reminders.filter((r) => r.id !== id));`
- make sure all logic is separated from UI components logic, App.tsx is copling the serivices with the param functions.
- in the submitForm, the validation is important: `if (!title) return;` so nothing is sent to the http class if the title is not truty.

## About Typescript with React good practices

- make sure to anotate `JSX.Element` as return type for components to ensure compilation detects erros when not returning elements as expected

## TODO:

- sync with github repo (done)
- deploy to vercel (done)
- make Notion project page for personal portfolio
