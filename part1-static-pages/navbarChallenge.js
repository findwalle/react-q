// const page = (
//     <div>
//         <h1 className = "header">Hello, React!</h1>
//         <p>Wrapped</p>
//     </div>
// )

/*
Challenge:

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing", "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const nav = (
    <nav>
        <h1>Java Beans</h1>
        <ul>
            <li>Beans</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById("root"));