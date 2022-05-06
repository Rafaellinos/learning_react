born in 2013

before react: js / html / css | jquery

The birth of SPA - Single Page Application
Ajax

2010 - AngularJS - Google
 Allow organizing folder - MVC

2013 - React Facebook

# Declarative vs Imperative

Imperative is interacting directly with the DOM.
Ex: If the user login, change the icon on the page.
Problem: Difficult to see the relation between the events, many things happening at the same time on the page, and one event triggers another.
Also, manipulating a DOM is a heavy operation, repainting the page and recalculating the order of elements (DOM is a tree structure)

Declarative approach
Declare what the app looks like and REACT take care of the manipulation of the DOM.

- REACT find the best way.
- Based on States.
- We don't manipulate the DOM directly.
- Build like Lego blocks. Small components
- Components containing components
- Components examples: Bootstrap react, material design, etc (Share components)
- Creates a virtual DOM (State, JSX, Components)
- The states propagate thought the children's components
- AngularJS is a framework, that has everything. React only works with the view, more like a UI library than a framework.


###########################


# Explaning the folder structure in 'src'
- The entrypoint of every react app is the file index.js
- react and react-dom the main import libs (React engine, the core)
- index.json <React.StrictMode></React.StrictMode> throw warnings like deprecated
- public folder, base file, has the html root <div id="root"></div>
- React uses the root div to render things
- babel converts to old js for all the browsers
- webpack -> make the code efficient, creates chunks of the js, for example only sends the js related to the front page when the user access it, modulates the js
- react script build -> yarn build -> makes on file with all necessary code, optimize and minifier
- react script test -> yarn test -> runs all tests, in App.js
- react script eject -> yarn eject -> spits the file if babel and webpack and u can modify.
- setupTests.json -> imports the testing libary
- manifest.json -> A way for people to use your app without the browser? (not sure), progressive app.



# What is npx
- npm vs npx
- included within npm 5.2 and later


# NPM commands:
- npm i (abbreviation of install)
- npm -g (abbreviation of global, used with 'i' to install)
- npm list package (show location of the package LOCALLY, which means that doesn't work with the global package)
- npm list -g package (show location of global package)
- npm uninstall (-g if global) package (deletes package)
- When u install something using npm install package, it will be in the local folder
- If u want to use the package in multiple projects, use -g

# Npx commands
- npx cowsay (package) hello (install cowsay and use the command hello and deletes the package, DOES NOT INSTALL)

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
- App.js contains the entire application
- function App() is an component
- Component is a piece of code (js class ou function) that accepts inputs and properties(propos) and returns a React element (section of UI)
- When React Render:
    * The moment the user can interact, is when the rendering process has finished.
    * JSX is a syntax extension for JS. Looks like HTML but it's not.
    * JSX ia a sugar way to tell the JS what we want to render.


# Classes vs Hooks: [PENDING]
- Hooks
    * useState -> const [ valueExtract, setValueFunc ] = useState(initialValue)
    * useEffect -> useEffect(() => {}, []), when the value of dependencies (second argument) changes, runs the callback again (first argument), onMount will run useEffect and if anything changes on the array, re-run 
- Classes: 
Function components:
    * uses hooks
    * function App()
    * returns the JSX
    * functions receives props
    * no need of constructor
    * there is no lifecycle, just functions and side effects
    * useState is the most basic hook at our disposal, gives the ability to encapsulate the local state in a functional component
    * const [ valueToStore, setFuncion ] = useState(startValue); // doing unpacking, because useState return an array
    * valueToStore = same thing as creating a new attribute in this.state object inside the constructor method, the value will be the one defined on useState function.
    * startValue = the first state of the valueToStore
    * WARNING -> When the state of the component changes, the entire function component gets re-rendered. That's why u should avoid declaring all functions that u need inside the components, all of then u get re-created.

Class components:
    * The same thing, how to render on the UI
    * instead of function App() -> class App extends Component
    * Component class must be imported from import { Component } from 'react';
    * overwrite the render method to return the JSX.
    * componentDidMount // whenever the component mounts
    * constructor // use to incialize the state
    * this.setState // use to update the state and re-render
    * render() // return the html


# Components State
- Extends the Component class from react, meant to reuse some parts of the code
- A component cannot have more than 1 html tag at the same level, each component represents 1 root "html"
    * EX:
    ```javascript
        render() {
        return <div>
            Hello i'm the card list component
        </div>
        <div>WRONG, wont work<div/>
    }
    ```
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
- onClick is one event to use in the button
- to update state, use setState
- React changes the state when the object turns into a new object,
not changed, by using setState
- setState updates the object and triggers the rerender, it's a shallow merge
- When the page is reloaded, the state is reset.
- It's possible to pass two functions this.setState(() => {}, () => {}), the first one is the state and the last one the callback func.

# Javascript
- To deepcopy a objeto, use Object.assign({}, obj1), where obj1 é the template
- const { nome }= {nome: 'rafael', idade: 32} it's possible to extract field from object

# SPA - React
- NonSPA - multiple request for each JS/CSS/HTML file.
    * Ex: change the path for /info and the page will ask the server for the files for that page.
    * Each time the browser requests the server it took time to get the response which means lower performance


# lifecycle of app
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- Mounting -> constructur -> render -> update DOM -> mounting first time -> componentDidmount
- Updating -> new props / setState/ foceUpdate -> render -> update dom -> componentDidUpdate
- unmounting -> componentWillUnmount
- componentDidMount => runs the code inside the function whenever the component mounts
- Mounting is the first time when the lifecycle start
WARNING -> Becarefull with componentDidMount, when u update the state, the render will be called again
- construtor -> render -> componentDidMount -> (if state gets update -> re-render)
- Components rerenders when the setState is called and when the props is update.

# props
- It objects that can be passed through components. Ex: <ComponentXY anyPropsName={object}>
- All propos will be inside this.props
- components will re-render when the props change, and any child component, nested component are rendered aswell

# input types
- type='search' creates the X button to delete the search

# CSS
- All css files applies to the entire website, even css in components
- Developers only import css in components to be easier to understand the structure, because the project could have a lot of css and it's hard to find which class in css belongs to each components.

# Pure and Impure functions
- Hooks are impure functions
- Pure
    * should aways return the same output when given the same input
        ex:
        ```javascript
        const pureFunc = (a, b) = > {
            return a + b;
        }
        pureFunc(2, 4); // aways the same output, no matter how many times u call the func
        ```
- Impure
    * Need something outside of the func
        ex: 
        ```javascript
        let c = 5
        const pureFunc = (a, b) = > {
            return a + b + c;
        }
        pureFunc(2, 4); // depends on c value which is outside of the funcion
        ```
    * side effects => Affect external objects, for example changing another variable outside of the scope of the function.


# React.StrictMode
* Gives warnings for deprecated methods, best practices, etc
* StrictMode double render everything to catch any weird behaviors
* May impact the performance