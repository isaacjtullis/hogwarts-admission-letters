import React from 'react';

const UserForm = (props) => {
  let selected = ""
  let notSelected = ""
  if (props.applicationNotice === "accepted"){
    selected = "accepted"
  } else {
    notSelected = "rejected"
  }

  return(
    <div className="row">
      <div className="small-6 small-centered columns">
        <input
          type="text"
          placeholder="Name of Addressee"
          value={props.name}
          onChange={props.handleChange}
        />
        <div className="input-group-button">
          <div className={selected}>
            <button type="button" onClick={props.handleApplicationAcceptClick}>Accept</button>
          </div>
        </div>
        <div className="input-group-button">
          <div className={notSelected}>
            <button type="button" onClick={props.handleApplicationRejectClick}>Rejected</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserForm;
