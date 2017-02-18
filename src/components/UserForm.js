import React from 'react';

const UserForm = (props) => {
  return(
    <div class="row">
      <input
        type="text"
        placeholder="Name of Addressee"
        value={props.name}
        onChange={props.handleChange}
      />
      <button type="button" onClick={props.handleApplicationAcceptClick}>Accept</button>
      <button type="button" onClick={props.handleApplicationRejectClick}>Reject</button>
    </div>
  );
}
export default UserForm;
