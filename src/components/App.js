import React from 'react';
import UserForm from './UserForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationNotice: "accepted",
    }
    this.handleApplicationAcceptClick = this.handleApplicationAcceptClick.bind(this)
    this.handleApplicationRejectClick = this.handleApplicationRejectClick.bind(this)
  };

  handleApplicationAcceptClick() {
    this.setState({applicationNotice: "accepted"})
  }
  handleApplicationRejectClick() {
    this.setState({applicationNotice: "rejected"})
  }

  render() {
    if (this.state.applicationNotice === "accepted") {
      return (
        <div>
          <UserForm handleApplicationAcceptClick={this.handleApplicationAcceptClick} handleApplicationRejectClick={this.handleApplicationRejectClick}/>
          <div className="letter-body">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" id="hogwarts-logo"/>
            <h1>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h1>
            <br />
            <h3 id="headmaster-name">Headmaster: Albus Dumbledore</h3>
            <p id="merlin-order">
              (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)
            </p>
            <br />
            <p>Dear Addressee,</p>
            <div>
              <p>
                We are pleased to inform you that you have a place at Hogwarts School of
                Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
                equipment.
              </p>
            </div>
            <p>Yours sincerely,</p>
            <br />
            <h3>Minerva McGonagall</h3>
            <h3>Deputy Headmistress</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <UserForm handleApplicationAcceptClick={this.handleApplicationAcceptClick} handleApplicationRejectClick={this.handleApplicationRejectClick}/>

          SORRY!
        </div>
      );
    }
  };
};

export default App;
