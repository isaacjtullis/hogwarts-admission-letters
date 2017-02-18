import React from 'react';
import UserForm from './UserForm.js'
import LetterList from './LetterList.js'

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
    return (
      <div>
        <UserForm handleApplicationAcceptClick={this.handleApplicationAcceptClick} handleApplicationRejectClick={this.handleApplicationRejectClick}/>
        <LetterList applicationNotice={this.state.applicationNotice}/>
      </div>
    );
  }
};

export default App;
