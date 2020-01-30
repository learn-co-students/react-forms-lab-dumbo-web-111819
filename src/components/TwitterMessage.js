import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    let newMessage = event.target.value
    this.setState({
      message: newMessage
    })
  }

  displayRemainingChars = () => {
    // console.log(this.props)
    let maxChar = this.props.maxChars
    let currentLength = this.state.message.length

    let remainingChars = maxChar - currentLength

    return remainingChars
  }


  render() {
    // console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.handleChange} type="text" name="message" id="message" />
        <p><em>remaining count:</em> {this.displayRemainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
