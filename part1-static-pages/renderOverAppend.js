/*
Challenge: find out what happens if we try to append JSX
to our div#rot using .append() instead of ReactDOM

1. Create a sample page in JSX (>= 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append your JSX
3. See if you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows in up the browser
*/

const page = (
    <div>
        <h1>An introduction the Coffee</h1>
        <ul>
            <li>Brief History
                <p> Coffee has been around for a long time</p>
            </li>
            <li>About
                <p>We like drinking coffee</p>
            </li> 
        </ul>
        <h2>The end</h2>
    </div>
)

// document.getElementById("root").append(page);

// I believe that our page element will be appended onto root to the bottom as another
// element

// What really happened?
// It appended an Object that contained Objects (Typically how React components are created)

/*
Challenge: fix our code!

If you are not using CDNs anymore, you have to import ReactDOM to our page
Given we are still using CDNs, we can just use ReactDOM.render
*/

ReactDOM.render(page, document.getElementById("root"))