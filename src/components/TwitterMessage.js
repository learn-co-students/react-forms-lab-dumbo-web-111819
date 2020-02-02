import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };
  }

  handleInput = (e) => {
    // console.log(e.target.value)
    // console.log(newValue)
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    // console.log('props from twittermessage: ', this.props)
    // console.log(this.props.maxChars - this.state.inputValue.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={this.handleInput} 
          value={this.state.inputValue} 
          type="text" 
          name="message" 
          id="message" 
        />
        {this.props.maxChars-this.state.inputValue.length}
        {/* <p>{`remaining characters: ${this.props.maxChars - this.state.inputValue.length}`}</p> */}
      </div>
    );
  }
}

export default TwitterMessage;


// + `   remaining: ${this.props.maxChars - this.state.inputValue.length}`