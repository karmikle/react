// ReactDOM.render(React.createElement("input", {
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over")
// }), document.getElementById("app"))


const inputClick = () => console.log("Clicked");
const mouseOver = () => console.log("Mouse Over");

const helpText = "Help Text!"

const elements = (<div className="name">
    <h1>{helpText}</h1>
    <input placeholder={helpText}
    onClick={inputClick} 
    onMouseEnter={mouseOver}/>;
    <p>{helpText === "Help Text!" ? "yes" : "no"}</p>
    </div>
)

const app = document.getElementById("app");

ReactDOM.render(elements, app);