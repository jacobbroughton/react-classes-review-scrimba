import React from "react";
import "./App.css";

// export default function App() {
//   return (
//     <div>
//       <Header username="Jacob"/>
//       <Greeting />
//     </div>
//   );
// }

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Jacob" />
        <Greeting />
      </div>
    );
  }
}

// function Header(props) {
//   return (
// <header>
//   <p>Welcome, {props.username}!</p>
// </header>
//   );
// }

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}

// function Greeting() {
// const date = new Date();
// const hours = date.getHours();
// let timeOfDay;

// if (hours < 12) {
//   timeOfDay = "morning";
// } else if (hours >= 12 && hours < 17) {
//   timeOfDay = "afternoon";
// } else {
//   timeOfDay = "night";
// }
// return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
// }

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
}
