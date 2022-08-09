import React from "react";
import Links from "./Links"

// const filterP = (props) => {
//     if ({props.bio} !== '') {
//       return <p>{props.bio}</p>
//     } else if ({props.bio} ==='') {
//       return null
//     } else {
//       return null
//     }
//   }

function About(props) {
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio === '' ? null : <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links links= {props.links} />
    </div>
  );
}

export default About;
