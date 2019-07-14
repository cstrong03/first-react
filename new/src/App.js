import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const hello = (props)=>{
  return(
    <div className="Hello">
    <p>Hello, my name is {props.person.personName}</p>
    <p>I live in {props.person.personCity}</p>
    <p>I like
    <ul>{props.person.favorites.map(animal =>{
      return <li>{animal}</li>
    })}</ul>
    </p>
  </div>
)
}

export default hello;
