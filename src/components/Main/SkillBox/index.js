import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

class SkillBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.interval = null;
    this.scrollDistance = 0;
    this.data = null;
    this.scrolling = false;
    
    this.startScrolling = this.startScrolling.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.scrollingAnimationFrame = this.scrollingAnimationFrame.bind(this);
    this.calculateData = this.calculateData.bind(this);
  }
  
  
  calculateData() {
    let data = {
      stackHeight: 0,
      children: []
    };
    let $subSkillList = ReactDOM.findDOMNode(this.refs.subSkillList);
    let $subSkills = $subSkillList.children;
    
    data.parentHeight = $subSkillList.getBoundingClientRect().height;
    
    for(let subSkill of $subSkills) {
      let child = {};
      let rect = subSkill.getBoundingClientRect();
      
      
      child.node = subSkill;
      child.minTop = rect.height * -1;
      child.currentTop = data.stackHeight;
      data.stackHeight += rect.height;
      data.children.push(child);
    }
    
    console.log(data);
    this.data = data;
  }

  
  componentDidMount() {
    // Waits for first paint
    // Problem seems to be delay caused by absolute positioning in the stylesheet...
    setTimeout(this.calculateData);
  }

  
  scrollingAnimationFrame() {
    for(let child of this.data.children) {
      child.currentTop -= .5;

      if(child.currentTop < child.minTop) {
        // Send child to bottom of stack
        child.currentTop += this.data.stackHeight;
      }

      requestAnimationFrame(() => {
        child.node.style.setProperty("top", child.currentTop + "px");
      });
    }
  }
  
  
  startScrolling() {
    this.scrolling = true;
    this.interval = setInterval(this.scrollingAnimationFrame, 1000/60);
  }
  
  
  focusHandler() {
    if(!this.scrolling) {  
      this.startScrolling();
    }
  }
  
  
  stopScrolling() {
    clearInterval(this.interval);
    this.scrolling = false;    
  }
  
  
  blurHandler() {
    this.stopScrolling();
  }
  
  
  render() { 
    return (
      <section className={styles.skillBox} >
        <Link to={this.props.slug} onMouseEnter={this.focusHandler} onFocus={this.focusHandler} onMouseOut={this.blurHandler} onBlur={this.blurHandler}>
          <h1>{this.props.title}</h1>
        </Link>
        <ul ref="subSkillList">
          {this.props.subSkills.map((subSkill, key) => (<li key={key}>{subSkill}</li>))}
        </ul>
      </section>
    );
  }
};

export default SkillBox;