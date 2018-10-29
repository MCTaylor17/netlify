import React from "react";
import skillBox from "./skill-box.jpg";
import skillBoxTech from "./skill-box-tech.jpg";
import skillBoxPrototype from "./skill-box-prototype.jpg";
import SkillBox from "./SkillBox";
import skills from "./skill-data";

const Home = () => (
  <article>
    <h1>Hi there,</h1>
    <p>My name is Mike Taylor and I'm a Frontend developer and User Experience expert living in Vancouver, BC.  My work is informed by a formal background in Marketing Managementment which means I have a heightened concern for both the user and business objectives.  I have a general preference for iterative design, starting with a workable solution and slowly zeroing in on a better product.</p>
  
    <h2>Under Construction</h2>
    <h3>Problem:</h3>
    <p>How can I best present the wide range of skills attained through education and work experience?</p>
    <h3>Solution</h3>
    <p>The image below explores the concept for a "skill-box":</p>
    <img src={skillBox} />
    <p>When a user hovers over one the skill categories, a list of subskills will begin to scroll within the box.  This will allow a user to explore the higher levels of a category before delving deeper into more verbose descriptions</p>
    <p>The following image breaks down how the skill-box might operate under the hood:</p>
    <img src={skillBoxTech} />
    <p>The image translates to the following:</p>
    <ul>
      <li>Use mask to obscures the sub-skills</li>
      <li>On click, link to associate content</li>
      <li>On hover, reveal sub-skills</li>
      <li>Utilize upper and lower masks to create a fade-in/fade-out effect.</li>
      <li>If the sub-skill list is larger than the box displaying it, begin scrolling
        <ul>      
          <li>Use JS to decrease the 'top' value of each list item at a set speed</li>
          <li>Once the 'top' value is less than the heigth of a list item, send it to the bottom by adding the height of the entire list of items</li>
        </ul>
      </li>
    </ul>
    <p>Some considerations:</p>
    <ul>
      <li>Ensure it's known the user can click through to find more info</li>
      <li>Start scrolling the list with the top set to the height of the box</li>
      <li>Are there any skill lists that will be too short to require scrolling</li>
      <li>Show an icon that changes state when hovered to reinforce the ability to click through</li>
    </ul>
    <h3>Prototype</h3>
    <p>The following is a partial implementation with very basic styles.  Also, the scrolling effect is hacked together by changing the "top" position of the list-items with an interval.  Optimizations would come in some combination of:</p>
    <ul>
      <li>requestAnimationFrame</li>
      <li>React state management</li>
      <li>CSS animations</li>
    </ul>
    <p>The first one is the lowest hanging fruit while the latter two seem more complicated to implement based on the need to use rendered height calculations that respect sibling order.  Or it's easy and I just come up with an elegant solution yet.</p>
  
    <img src={skillBoxPrototype} />
  
    <h3>Production Component</h3>
    <p>As the concept was validated with a working prototype, further development seemed warranted so some finishing styles were added.  Here's the current product:</p> 
  
    <div>
    {skills.map((skill, key) => <SkillBox key={key} slug={"./" + skill.abbr} title={skill.title} subSkills={skill.subSkills} />)}
    </div>

    <p>It now uses requestAnimationFrame to optimize the animation, but it still operates directly on the DOM which is not exactly idiomatic React.  I started refactoring it to use pure-React state-management, but ran into some complications.  Before investing too much time into this, I need to confirm that using the 'setState' method at 60fps is both workable and sane.</p>

    <h2>Irrelevant facts about me:</h2>
    <ul>
      <li>I began longboarding in my 30's just to see if I could (it turns out I can only kinda)</li>
      <li>I bike commuted 25km a day all the way through Vancouver's 2017 winter which had 1,083mm of rainfall</li>
    </ul>
  </article>
)

export default Home;