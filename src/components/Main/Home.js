import React from "react";
import skillBox from "./skill-box.jpg";

const Home = () => (
  <article>
    <h1>Hi there,</h1>
    <p>My name is Mike Taylor and I'm a Frontend developer and User Experience expert living in Vancouver, BC.  My work is informed by a formal background in Marketing Managementment which means I have a heightened concern for both the user and business objectives.  I have a general preference for iterative design, starting with a workable solution and slowly zeroing in on a better product.</p>
  
    <h2>Under Construction</h2>
    <img src={skillBox} />
    
    <p>Irrelevant facts about me:</p>
    <ul>
      <li>I began longboarding in my 30's just to see if I could (it turns out I can only kinda)</li>
      <li>I bike commuted 25km a day all the way through Vancouver's 2017 winter which had 1,083mm of rainfall</li>
    </ul>
  </article>
)

export default Home;