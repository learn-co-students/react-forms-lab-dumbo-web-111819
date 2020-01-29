import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }

  updateContent = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  remainingCharacters = () => {
    let charactersRemaining = this.props.maxChars - this.state.content.length
    return charactersRemaining
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event=>this.updateContent(event)}type="text" name="message" id="message" value={this.state.content} />
        <p>Characters Remaining: {this.remainingCharacters()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
