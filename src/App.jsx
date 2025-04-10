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
  state = {
    goOut: "Yes",
  };

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
