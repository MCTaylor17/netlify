import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => (
  <article>
    <h1>Fictionally Asked Questions</h1>
    <h2>Hey Mike, why does this website suck?</h2>
    <p>Great question.  The reality is, everything has to start somewhere and circumstances required me to develop this one <a href="https://github.com/MCTaylor17/netlify">in the open</a>.  Also, despite dabbling with React for a few years, I wanted to take the opportunity to try and build out an application from the ground up.  On top of that, I'm building this as a serverless JAMstack site deployed on Netlify.  If that wasn't enough, I'm not using any boilerplate for the Webpack configuration (or anything else for that matter).</p>
    <p>As you can imagine, there's a lot of tinkering and troubleshooting in the back without much work in the front.  React is also a slight shift from the "on page load, let the jQuery magic happen" paradigm that I'm used to.  It's a learning experience and over time you'll start to see some of the creative interactions that I'm known for building.</p>
    
    <h2>Hey Mike, why is your Github mostly empty?</h2>
    <p>Great question.  While working at BCIT, I spent a couple years as the sole developer on the team.  Back then, things were simple and I was working with a "fast and cheap" mindset.  As the sophistication of my work increased and team members were recruited to contribute, we started version control in a private instance of Stash (aka Bitbucket Server).  Later, we wanted to better separate courses and development from application development at which point all of my work was moved into a private instance of Gitlab.  This also gave us the opportunity to take advantage of all the continuous integration (CI) features built into Gitlab, which helped to further streamline our processes.</p>
    <p>We did open source one of the main tools that I developed at BCIT.  It's an MS-Word to HTML conversion tool called Dewordify.  If you're interested, I wrote a <Link to="/dewordify">story of how it came to be</Link> and some of the challenges faced in the process.</p>
      
    <h2>Hey Mike, why don't you have a larger portfolio</h2>
    <p>Great question.  While working for BCIT, my strengths in coding and problem solving were quickly pulled towards the backend development of automation tools.  Even though I prefer working on the frontend, there simply weren't many opportunities to work on the frontend of things.  For example, at one point I was put in charge of developing a AA WCAG 2.0 compliant framework for the Public Health Agency of Canada's online courses.  The frontend came together rather quickly with glowing reviews from the clients.  At that point, we had to figure out how to effectively update the thousands of static HTML pages spread across their 42 courses.  At that point, CSS and jQuery took a back seat to Node.js as I built out tooling for scanning and automatically mapping old crufty HTML into our shiny new template.  This was basically a recurring theme over my 4 years.  As fun as it was, I would have greatly preferred building a plethora of awe-inspring portfolio pieces.  Oh well, such is life.</p>
  </article>
)

export default FAQ;