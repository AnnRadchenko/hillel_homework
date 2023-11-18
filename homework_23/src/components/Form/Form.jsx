import React, { useState } from "react";
import "./Form.css";
import { API } from "../../shared/constants";

function Form({ liftingUser }) {
  const [userName, setUserName] = useState(``);
  const [isUserMarried, setIsUserMarried] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let request = await fetch(API, {
          method: `POST`,
          body: JSON.stringify({ name: userName, married: isUserMarried }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      liftingUser(response);
      setUserName(``);
      setIsUserMarried(false);
    } catch (err) {
      console.log(`in ${err}`);
    }
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleIsUserMarriedChange = (event) => {
    setIsUserMarried(event.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input className="underline" type="text" value={userName} onChange={handleUserNameChange} />
      </label>
      <label>
        Married:{" "}
        <input type="checkbox" checked={isUserMarried} onChange={handleIsUserMarriedChange} />
      </label>
      <button disabled={userName.trim().length === 0}>Add contact</button>
    </form>
  );
}

export default Form;
