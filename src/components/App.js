import React from 'react';
import UserForm from './UserForm.js'
import LetterList from './LetterList.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationNotice: "accepted",
      addresse: 'Addresse'
    }
    this.handleApplicationAcceptClick = this.handleApplicationAcceptClick.bind(this)
    this.handleApplicationRejectClick = this.handleApplicationRejectClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  };

  handleApplicationAcceptClick() {
    this.setState({applicationNotice: "accepted"})
  }

  handleApplicationRejectClick() {
    this.setState({applicationNotice: "rejected"})
  }

  handleChange(event){
    let name = event.target.value
    if (name === '') {
      name = 'Addressee'
    }
    this.setState({ addresse: name });
  }

  render() {
    return (
      <div>
        <UserForm
          handleChange={this.handleChange}
          handleApplicationAcceptClick={this.handleApplicationAcceptClick}
          handleApplicationRejectClick={this.handleApplicationRejectClick}
        />
        <LetterList applicationNotice={this.state.applicationNotice} addresse={this.state.addresse}/>
      </div>
    );
  }
};

export default App;
