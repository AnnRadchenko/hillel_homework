import React, { useState } from "react";

function TableRow(props) {
  const [userName, setUserName] = useState(props.user.name);
  const [isUserMarried, setIsUserMarried] = useState(props.user.married);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleIsUserMarriedChange = (event) => {
    setIsUserMarried(event.target.checked);
  };

  const handleSaveChangesClick = () => {
    const updatedUser = {...props.user, name: userName, married: isUserMarried};

    props.handleSaveChanges(updatedUser);
  }

  const isSaveChangesDisebled =
    props.user.name === userName && props.user.married === isUserMarried;

  return (
    <tr key={props.user.id}>
      <td>
        <input type="text" value={userName} onChange={handleUserNameChange} />
      </td>
      <td>
        <input
          className="checkbox"
          type="checkbox"
          checked={isUserMarried}
          onChange={handleIsUserMarriedChange}
        />
      </td>
      <td>
        <button
          disabled={isSaveChangesDisebled}
          onClick={handleSaveChangesClick}
        >
          Save changes
        </button>
        <button onClick={() => props.handleDeleteUser(props.user.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;
