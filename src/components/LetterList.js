import React from 'react';
import Letter from './Letter.js';

const LetterList = (props) => {
  let letterContent = ""
    if (props.applicationNotice === "accepted") {
      letterContent = <p>We are pleased to inform you that you have a place at
        Hogwarts School of Witchcraft and Wizardry.
        Please find enclosed a list of all necessary books and equipment.</p>
    } else {
      letterContent = <p>We regret to inform you that we are unable to offer you
         a place at Hogwarts School of Witchcraft and Wizardry. After reviewing
         your application and Github profile, we recognize that you are indeed a
          "coding wizard". Unfortunately, we have concluded that you do not
          have actual magical abilities, which you must have to be admitted into
          Hogwarts.</p>
    }

  return(
    <div>
      <Letter letterContent={letterContent} />
    </div>
  )
}

export default LetterList;
