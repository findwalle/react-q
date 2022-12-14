/*
Challenge: Starting from scratch, build and render the HTML for our section project.

We will add the styling later
*/

const page = (
    <div>
        <img width = '40px' height = '40px' src = './reactLogo.png'></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobiles apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"));