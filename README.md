# HACS-OpenSource-WebSite  
React based website for the Hispanic Association of Computer Scientists. Allowing our members to be able to contribute to the website and gain experience with industry tools.  

# Pre-Setup Setup
You will need:  
- node.js
- yarn
- git
- a text editor of your choice or IDE. Brackets, VSCode, and Webstorm are all great.

You can get node.js from https://nodejs.org/en/. MacOS can also get it using `homebrew`.
That should also have installed `npm` for you.
You can find `git` if you don't have it already at https://git-scm.com/downloads .
If you aren't familiar with `git`, check out [this tutorial.](http://noodle.med.yale.edu/hdtag/notes/git_tut.pdf).

# Quick Start
Clone the repo. Put it somewhere more permanent than the Downloads folder. Navigate in terminal/powershell to the project and use
>npm install

This installs all packages/libraries you currently needed for this project locally. You can start the development server with
>npm start

This is a script in the package.json file. It's function is to start up webpack and a developer server where your changes will be watched and automatically recompiled so you can see them live. If a tab isn't opened automatically, you can go to
`http://localhost:8080/`
Feel free to mess around with the code and see what happens.

# How to Contribute
Check out the "Issues" tab at the top of the page! These are features or bugs that we want to work on. 
Feel free to assign yourself to any issue that hasn't been claimed, or message Chris Nunes in the slack if you want to work on something different.

If there is an issue that you want to work on that someone else is working on, feel free to message them and see if they want any help!

With any questions, feel free to reach out to Chris Nunes! 



This is our tentative [sitemap](https://www.gloomaps.com/RpcFrFsN4s)

## Rules for Branching

In order to have a consistent flow with developer branches we need to implement a naming convention on new branches, as well as a step by step approach to merging and pull requests.

### Branch Naming Convention

```bash
developerName-feature

# Example
robert-announcement-queries
```

### Merging and Pull Requests

1. Push your branch's code to GitHub.
2. Create a new Pull Request.
3. Set the base branch to 'master' and the compare branch to your personal branch.
4. Request others to review your code.
5. After review, your code will be merged by designated Git Master.


# Todo:
- Finish fleshing out the how to contribute section

#People:

- Jesus Palos
- Andrew Marquez
- Jesus Luna
- Earl Potts
- Manuel Ponce
- Alberto Aviles-Correa
- Pamela Vazquez
- Santiago Cortes
- Chris Nunes




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn dev`
Starts up both local backend server and the app in development mode.
Compatible with macOS and linux machines.

### `yarn win:dev`
Starts up both local backend server and the app in development mode.
Compatible with Windows machines.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
