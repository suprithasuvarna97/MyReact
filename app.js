//const heading = React.createElement("h1", {}, "Hello world from react!");


/*Create a single children within child */
/*const parent = React.createElement(
    "div",{id : "parent"},
    React.createElement(
        "div",{id: "child" },
        React.createElement(
            "div",{},"Hello Supritha"
        )
    )
);*/

/*Create a 2 childrens within the child using array*/ 
const parent =  React.createElement(
    "div" , {id : "parent"},
    React.createElement(
        "div", {id:"child"},[
        React.createElement(
            "div",{},"Hello Sandeep"),
        React.createElement("div",{},"Hello Supritha"),
        ]
        )
    );


const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);