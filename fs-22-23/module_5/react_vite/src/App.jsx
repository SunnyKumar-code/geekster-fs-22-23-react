import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Footer = () => {
  return (
    <ul>
      <li>Copyright</li>
      <li>About Us</li>
      <li>Portfolio</li>
    </ul>
  )
};

const Child1 = () => {
  return (
    <h4>Child 1 Component</h4>
  )
};

const Child2 = () => {
  return (
    <h4>Child 2 Component</h4>
  )
};

const MyComponent = () => {
  return (
    <>
      <h3>This is my component</h3>
      <Child2 />
      <Child2 />
      <Child2 />
      <Child2 />
      <Child2 />
      <Child2 />
      <Child2 />
      <Footer />
      <Footer />
      <Footer />
    </>
  )
};

const App = () => {
  const name = "ABCD";
  return (
    <div>
      <h2>This is app component</h2>
      <MyComponent />
    </div>
  )
}

export default App
