import React, { Component } from "react";
import '../global.css'

class TipButton extends Component {
  state = {
    modalOpen: true,
    amount: "0",
    wallet: false,
    accountId: null
  }

  // Open and close the modal
  toggleModal = () => this.setState(state => ({
    modalOpen: !state.modalOpen
  }))

  // Update the amount of Near to send
  updateAmount = amount => this.setState({ amount: amount.toString() });

  render() {
    const {
      receiver,
      sendNear
    } = this.props;
    const {
      amount,
      } = this.state;

    return (
      <>
        <button onClick={() => this.updateAmount(0.1)} className="val1" >
              1
            </button>
            <button onClick={() => this.updateAmount(14)} className="val2" >
              2
            </button>
            <button onClick={() => this.updateAmount(7*4)} className="val3">
              MAX
            </button>
            <button
            className="mintbutton"
              onClick={() => sendNear(amount, receiver)}
              disabled={amount === "0"}
              
            >
              Mint
            </button>
 
        <div>
        </div>
      </>
    );
  }
}

export default TipButton;
