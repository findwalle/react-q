// Regular DOM manipulation
// returns this instead of object
// <h1 class="header">VanillaJS is the imperative way to program!</h1>

// const header = document.createElement('h1');
// header.textContent = "VanillaJS is the imperative way to program!";
// header.className = "header";
// document.getElementById("root").appendChild(header);
// console.log(header)

// JSX - more like a function that returns an object that React can intepret

// const element = <h1 className = "header">This is JSX</h1>
// ReactDOM.render(element, document.getElementById("root"))
// console.log(element)

// if you try to render more than 2 elements, you either need to wrap them in a 
// parent element or fragment element

// ReactDOM.render(
//     <div>
//         <h1 className = "header">Hello, React!</h1>
//         <p>Wrapped</p>
//     </div>, document.getElementById("root"))

// What if you want to save it as a variable - wrap multiple elements in parens
const page = (
    <div>
        <h1 className = "header">Hello, React!</h1>
        <p>Wrapped</p>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))


