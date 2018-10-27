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
    
    this.startScrolling = this.startScrolling.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
  }
  
  componentDidMount() {

  }
  
  
  startScrolling() {
    clearTimeout(this.interval);
    // get list items
    let $subSkillList = ReactDOM.findDOMNode(this.refs.subSkillList);
    let $subSkills = $subSkillList.children;
    
    let data = {};
    
    console.log($subSkillList.getBoundingClientRect());
    
    data.parentHeight = $subSkillList.getBoundingClientRect().height;
    data.stackHeight = 0;
    data.children = [];
    
    for(let subSkill of $subSkills) {
      let child = {};
      let rect = subSkill.getBoundingClientRect();
      
      data.children.push(child);
      
      child.node = subSkill;
      child.minTop = rect.height * -1;
      child.currentTop = data.stackHeight;// + data.parentHeight;
      data.stackHeight += rect.height;
      subSkill.style.setProperty("top", child.currentTop + "px");
      //subSkill.style.setProperty("top", "50px");
    }
    
    
    
    this.interval = setInterval(() => {
      for(let child of data.children) {
        child.currentTop -= 1;
        
        if(child.currentTop < child.minTop) {
          child.currentTop += data.stackHeight;
        }
        
        child.node.style.setProperty("top", child.currentTop + "px");
        //child.node.style.top = child.currentTop + "px";
      }
    },50);
  }
      
  focusHandler() {
    if(true) {
      this.startScrolling();
    }
  }
  
  blurHandler() {
    clearTimeout(this.interval);
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