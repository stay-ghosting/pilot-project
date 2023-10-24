'use client';
import React, { component } from 'react';
import { TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Navbar from "./navbar"
import "./globals.css"
import Home from '@/pages/home';
import About from '@/pages/about';
import todoList from '@/pages/toDoList';
import images from '@/pages/images';

function app() {
  let component
  switch (window.location.pathname) {
    case "/":

      component = <Home />
      break;
    case "/about":

      component = <About />
      break;

    case "/toDoList":

      component = <toDoList />
      break;

    case "/images":
      component = <images />
    default:
      break;
  }
}
export default function page() {
  return (
    <>

      <div className='container'>
        {component}
      </div>

    </>
  );
}