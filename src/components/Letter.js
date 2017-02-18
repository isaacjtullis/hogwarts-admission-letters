import React from 'react';

const Letter = (props) => {
  return (
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
      <div>{props.letterContent}</div>
      <p>Yours sincerely,</p>
      <br />
      <h3>Minerva McGonagall</h3>
      <h3>Deputy Headmistress</h3>
    </div>
  );
};

export default Letter;
