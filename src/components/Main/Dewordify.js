import React from "react";
import Helmet from "react-helmet";

const Child1 = () => (
  <div>
    <Helmet>
      <title>Dewordify.js</title>
    </Helmet>
    <h1>Dewordify.js</h1>
    <p>When I started my first contract with BCIT.  At the time of my arrival, the online course production process was largely manual in nature.  The task was to convert a Microsoft Word document into HTML for upload into our Learning Management System (LMS).  This largely consisted of opening the document, selecting a page worth of content, and then pasting it into Adobe Dreamweaver (cringe) which performed a less than adequate conversion.</p>

    <p>This process had two major challenges:</p>
    <ol>
      <li>Cluttered HTML</li>
      <li>Inconsistency of source documents</li>
    </ol>
    
    <p>I recognized very early that a large portion of my time was spent addressing these two problems.  Based on my experience in some high productivity environments, I knew that small optimizations to highly repetitive tasks could result in large time savings.  As a result, I quickly started working on a solution to help speed things up.</p>
    
    <h2>Overcoming the Challenges</h2>
    <h3>Cluttered HTML</h3>
    <p>When Dreamweaver converts MS Word content, it does so in a very literal fashion.  In essence, it creates a 1-to-1 representation of the content, worts and everything.   The result is HTML cluttered with unnecessary tags, attributes, and entities.  These had both a direct impact on the rendered page, as well as indirect impacts such as reducing the readability of the code.</p>

    <p>I quickly began to streamline my own processes into a ritualistic series of steps.  For example, removing all of the anchor tags used internally by MS Word.  Another example was cleaning up all of the HTML entities using a series of "replace all" commands to update them with their UTF8 equivalents.  </p>

    <p>After about a month of this, I had my own processes well refined, but started to grow tired of the repetitiveness.  Having recently completed a web development course, I decided to take the first step towards automating this work.  In a small fit of rage, I quietly created a javascript file called "dewordify.js" and began developing a series of scripts that would effectively perform my rituals for me.</p>

    <p>This initial script was quite rudimentary and required rendering the content in a browser in order to copy and paste the newly transformed HTML from the developer tools.  But not only was it a good proof of concept, it also resulted in significant time savings.  So much so that I was able to reinvest my time into making further improvements, a cycle that turned into a snowball effect.</p>
    
    <h3>Inconsistency of source documents</h3>
    <p>It’s important to understand that the conversion of documents is the very last stage of a very long period of course development.  During that process, the documents are passed back and forth between at least one Subject Matter Expert (SME), an Instructional Design Consultant (IDC) and, provided there was time, an Instructional Material Developer (IMD) for detailed editing.  The department had approximately 10 IDCs who sometimes worked on multiple online courses at once.  </p>

    <p>Unfortunately, there was little coordination between project teams which meant that each project adapted its own set of conventions.  As a result, there was little consistency between documents, and sometimes even within documents.  This wouldn’t be so bad except that project teams tended to submit all of their course content into production around the same time in hopes of having it converted in time for term start.  The only effective way to triage the courses in this scenario was to rapidly switch between courses ensuring the first several weeks of each course was available in time.</p>

    <p>Around this time, I had began to investigate the various incarnations of the mustache flavoured templating languages.  One of the conventions there was to create fences using `#` to start and `/` to end.  Because the majority of formatting inconsistencies pertained to representing nested content blocks in MS Word’s non-hierarchical structure, I saw this as a potential solution.  By normalizing incoming documents from some variant of "Insert callout here" and "End of callout" to simply "#callout" and "/callout", I was able to offload another large chunk of my work to a scripted process.  </p>

    <p>At this point Dewordify had evolved from a client-side script into a small Node.js CLI tool that would handle most of the conversion, including the pagination of HTML into the separate files.  Unfortunately, it was still crude enough that my colleagues remained skeptical that it was worth adopting.  That was until a particular project came in at the 11th hour before Christmas break in advance of January term start.  </p>

    <p>Recognizing the stress and frustration, I suggested this would be a perfect opportunity put Dewordify to work.  My colleague and the IDC coordinated to ensure the documents would be delivered in the necessary format.  As soon as she was done formating, she would pass it to him for conversion.  The process worked so well that it completely avoided what would otherwise have required unwanted overtime during the winter break.</p>

    <h2>Dewordify v2.0</h2>
    <p>Shortly after Dewordify had been adopted by my colleagues, I was seconded to a work on an accessibility conversion of 42 courses for Public Health Agency of Canada.  At this point, I had become more comfortable with using Node.js for traversing and transforming static pages of HTML.  This lent itself very well to the demands of this new project which only served to accelerate my learning.</p>

    <p>By the time I had finished the accessibility conversion project, I had a refined my vision for what Dewordify could become.  I approached the new supervisor of the course production team with a plan to iron out some of the kinks in Dewordify in order to fully operationalize it in the course production process.  Having already experienced the enormous potential of Dewordify as well as it’s apparent limitations, he immediately jumped at the opportunity.</p>

    <p>One of the first major improvements was to include a library called Mammoth.js in order to perform the initial MS Word document conversion.  Not only did it eliminate our dependence on Dreamweaver, it also produced cleaner HTML, allowed for custom style mappings, and helped identify unusual structures often pasted into the documents.  Another innovation was the ability to include an HTML template and/or a configuration file in the project folder allowing for easily managed course level customizations.</p>

    <p>Later updates were added to extend the abilities of Dewordify to match the needs of the course production team.  For example, it could find files associated with the HTML and rename them to match our established naming conventions (mainly avoiding errors caused by the mismatch of filenames and their URI encoded counterparts).  Another example was ability to analyse the document and report statistics that could be used to estimate the total conversion time (work required after the initial conversion).</p>
    
    <h2>Reflection on the Experience</h2>
    <p>While automation sometimes comes with negative connotations, Dewordify was a little different.  Yes, it significantly reduced the amount of work required to convert a course, but that time has been reinvested into increasing the sophistication of the course production process.  One project aimed to reconcile the diverse language used for describing common educational elements.  Now, all course developers have a single unified language which allows them to more effectively communicate with each other and the course production team.  That language was then used in the creation of an education focused CSS/JS framework.  We then created a "Conversion Guide" to provide content creators with a simple way of including the features from our framework into their MS Word documents.</p>

    <p>Now, that isn’t to say we didn’t face any challenges.  This is a classical example of a disruptive technology.  I personally made the mistake of wanting to move too quickly on more than one occasion, but that’s the nature of working on contract.  I believe most of the hesitation came from the perception that we were the tail that was wagging the dog.</p>

    <p>One of the biggest objections seemed to be the strange #hashtag syntax.  The interesting thing is that it actually came about organically.  Firstly on my computer, then on a project team, then on someone else’s project team and so on.  By the time we started formalizing and building out the documentation, we had considered it a , we never considered tended to be the ones who hadn’t used it yet.  As a result, it slowly gained acceptance, one by one.  In fact, it was became so natural that it suddenly became the hammer with which to hit all things.</p>

    <p>Buy-in came with proof.  Our team went from an entire month of stress leading up to term-start, to sailing through the stormiest times of year.  </p>

    <p>In general, Dewordify unshackled the course production team from the tedious, stressful, and labour intensive work in order to focus on creating new value and innovations.</p>

  </div>
)

export default Child1;