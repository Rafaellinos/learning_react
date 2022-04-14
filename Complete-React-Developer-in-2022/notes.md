born in 2013

bofore react: js / html / css | jquery

The birth of SPA - Single Page Application
Ajax

2010 - AngularJS - Google
 Allow organize folder - MVC

2013 - React Facebook

# Declarative vs Imperative

Imperative is interacting directly with the DOM.
Ex: If the user login, change the icon on the page.
Problem: Difficult to see the relation between the events, many things happening at the same time on the page, and one event triggers another.
Also, manipulating a DOM is a heavy operation, repainting the page and recalculating the order of elements (DOM is actually a tree structure)

Declarative approach
Declare what the app looks like and REACT take care of the manipulation of the DOM.

- REACT find the best way.
- Based on States.
- We don't manipulate the DOM directly.
- Build like Lego blocks. Small components
- Components containing components
- Components examples: Bootstrap react, material design etc (Share components)
- Creates a virtual DOM (State, JSX, Components)
- The states propagate thought the children's components
- AngularJS is a framework, that has everything. React only works with the view, more like a ui library than a framework.


###########################


# Explaning the folder structure in 'src'
- The entrypoint of every react app is the file index.js
- react and react-dom the main import libs (React engine, the core)
- index.json <React.StrictMode></React.StrictMode> throw warnings like deprecated
- public folder, base file, has the html root <div id="root"></div>
- React uses the root div to render things
- babel converts to old js for all the browsers
- webpack -> makes the code efficient, creates chunks of the js, for example only sends the js related to the front page when the used access it, modulate the js
- react script build -> yarn build -> makes on file with all necessariry code, optmize and mimified
- react script test -> yarn test -> runs all tests, in App.js
- react script eject -> yarn eject -> spits the file if babel and webpack and u can modify.
- setupTests.json -> imports the testing libary
- manifest.json -> A way for people use your app without the browser? (not sure), pregressevi app.



# What is npx
- npm vs npx
- included within npm 5.2 and later
- Tools that is used 
- When u install something using npm install package, it will be in the local folder
- If u want to use the package in multiple projects, use -g


# NPM commands:
- npm i (abbreviation of install)
- npm -g (abbreviation of global, used with 'i' to install)
- npm list package (show location of the package LOCALLY, which means that doesn't work with the global package)
- npm list -g package (show location of global package)
- npm uninstall (-g if global) package (deletes package)

# Npx commands
- npx cowsay (package) hello (install cowsay and use the command hello and deletes the package, DOES NOT INSTALL)
- 

# yarn commands
- yarn start call the command start
    * This yarn command trigger the action in scripts
    * It's possible to see the comands in package.json, ex:
    ```Json
     "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    }
    ```


# How react works
- App.js contain the entire application
- function App() is an component
- Component is a pice of code (js class ou function) that accept inputs and properties(propos) and returns a React element (section of UI)
- When React Render:
    * The moment the user can interact, is when the rendering process has finished.
    * JSX is a sintax extension for JS. Looks like HTML but it's not.
    * JSX ia a sugar way to tell the JS what we want to render.


# Classes vs Hooks: [PENDING]
- Hooks: 
- Classes: 
Function components:
    * function App()
    * returns the JSX

Class components:
    * The same thing, how to render on the UI
    * instead of function App() -> class App extends Component
    * Component class must be imported from import { Component } from 'react';
    * overwrite the render method to return the JSX.


# Components State

- localstate: State that only the component can read and write and has access to it
- To use state on class component, use:
    ```javascript
        constructor() {
            super();
            this.state = {
            name: 'Rafael'
            }
        }
    ```
- To access the state, use this.state.name on the JSX
- It's possible to change the name, when the state change it's re-render
- onClick is one event to use in button
- to update state, use setState
- React changes the state when the objeto is a completely new objeto,
not changed, by using setState
- setState updates the object and triggers the rerender, it's a shallow merge
- When the page is reloaded, the state is reseted.
- It's possible to pass two funcions this.setState(() => {}, () => {}), the first one is the state and the last one the callback func.

# Javascript

- To deepcopy a objeto, use Object.assign({}, obj1), where obj1 é the template

# SPA - React
- NonSPA - multiple request for each JS/CSS/HTML file.
    * Ex: change the path for /info and the page will ask the server for the files for that page.
    * Each time the browser requests the server it took time to get the response wich mean lower performance


# lifecicle of app
- componentDidMount => runs the code inside the function whenever the component mounts
- mounting is the first time when the lifecicli started
