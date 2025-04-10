import React from "react";
import "./App.css";

// export default function App() {
//   const [goOut, setGoOut] = React.useState("Yes");

//   function toggleGoOut() {
//     setGoOut((prevState) => {
//       return prevState === "Yes" ? "No" : "Yes";
//     });
//   }

//   return (
//     <div>
//       <h1>Should I go out tonight?</h1>
//       <div onClick={toggleGoOut}>
//         <h1>{goOut}</h1>
//       </div>
//     </div>
//   );
// }

export default class App extends React.Component {
  constructor() {
    // calls constructor method of the parent class that we are extending from, gives us ability to use this.setState
    super();
    this.state = {
      goOut: "Yes",
    };

    // ensures the function exists within 'this'
    this.toggleGoOut = this.toggleGoOut.bind(this);
  }

  // class method
  // use arrow function if it uses this.setstate
  toggleGoOut = () => {
    this.setState((prevState) => {
      return {
        goOut: prevState.goOut === "Yes" ? "No" : "Yes",
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Should I go out tonight?</h1>
        <div onClick={this.toggleGoOut}>
          <h1>{this.state.goOut}</h1>
        </div>
      </div>
    );
  }
}
