import React from "react";
import styles from "./styles.scss";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.intervalSeconds = this.props.interval/2/1000 + "s"
    this.bgTimeout = null;
    this.colors = this.props.colors.split(",");
    this.colorIndex = 0;
    this.state = {
      bgColor: this.colors[0]
    }
    this.colorChange = this.colorChange.bind(this);
  }
  
  componentDidMount() {
    this.bgTimeout = setInterval(this.colorChange,this.props.interval);
  }
  
  componentWillUnmount() {
    clearInterval(this.bgTimeout);
  }
  
  colorChange() {
    this.colorIndex++;
    if(this.colorIndex === this.colors.length) {
      this.colorIndex = 0;
    }
    console.log(this.colors[this.colorIndex]);
    this.setState({bgColor: this.colors[this.colorIndex]})
  }
  
  render() {
    let bgStyles = {
      backgroundColor: this.state.bgColor,
      transitionDuration: this.intervalSeconds,
      backgroundImage: `url(${this.props.img})`
    };
    
    return (
      <div style={bgStyles} className={styles.background} />
    );
  }
};

export default Background;