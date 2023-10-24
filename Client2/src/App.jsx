import { useState } from 'react'
import './globals.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/About'
import TodoList from './pages/ToDoList'
import Images from './pages/Images'


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />

      break;
    case "/images":
      component = <Images />
      break;
    case "/about":

      component = <About />
      break;

    case "/toDoList":
      component = <TodoList />
      break;
    default:
      component = <Home />
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  )
}

export default App
