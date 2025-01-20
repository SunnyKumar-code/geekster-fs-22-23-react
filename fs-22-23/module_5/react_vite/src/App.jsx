import React from "react";
import Child from "./components/20-01-2025/Child";

class App extends React.Component {

  constructor() {
    super(); // Interview question => Initializing parent class i.e React.Component
    console.log("Constructor");
    this.state = {
      counter: 0,
      loading: false,
      name: ""
    }
  }

  static getDerivedStateFromProps(prevState, nextProps) {
    // Todo: Derive/calculate new values for state using arguments
    if (prevState.counter == 2) {
      return {
        // New state
      }
    }
  }

  componentDidMount() {
    // Todo: API Call
    console.log("Component did mount")
  }

  componentDidUpdate() {
    console.log("Component did update")
    // this.setState({ counter: this.state.counter + 1 }) // Inifinite loop
  }

  onCounterClick = () => {
    // console.log("Increase btn clicked")
    // this.state.counter = this.state.counter + 1 // Mutating the original object
    this.setState({ counter: this.state.counter + 1 }) // Correct way to update the data in state object
    // console.log(this.state.counter)
  }

  onBtnClick = (data) => {
    this.setState({})
  }

  componentWillUnmount() {
    console.log("Component did unmount")
  }

  render() {
    console.log("Render");
    return (
      <>
        <h1>This is class based component</h1>
        counter = {this.state.counter}
        <button onClick={this.onCounterClick}>Click Here</button>
        <Child name={"ABCD"} counter={this.state.counter} onBtnClick={this.onBtnClick} />
      </>
    )
  }
}

export default App
