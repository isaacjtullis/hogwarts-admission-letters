import React from 'react';

const UserForm = (props) => {
  return(
    <div class="row">
      <button type="button" onClick={props.handleApplicationAcceptClick}>Accept</button>
      <button type="button" onClick={props.handleApplicationRejectClick}>Reject</button>
    </div>
  );
}
export default UserForm;
