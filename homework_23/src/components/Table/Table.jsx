import React, { useState, useEffect } from "react";
import "./Table.css";
import TableRow from "../TableRow/TableRow";
import { API } from "../../shared/constants";

const nameOfCollumn = [`Name`, `Married`, `Actions`];

function Table({ user }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let request = await fetch(API),
          response = await request.json();

        setUsers(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (Object.keys(user).length) {
      setUsers((prevState) => [...prevState, user]);
    }
  }, [user]);

  const handleDeleteUser = async (id) => {
    try {
      let request = await fetch(`${API}/${id}`, {
        method: `DELETE`,
      });
      console.log(request);

      if (request.ok) {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => {
            if (user.id !== id) return user;
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveChanges = async (user) => {
    try {
      let request = await fetch(`${API}/${user.id}`, {
          method: `PUT`,
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setUsers((prevState) =>
        prevState.map((element) => (element.id === response.id ? response : element))
      );
    } catch (err) {
      console.log(`in ${err}`);
    }
  };

  return users.length ? (
    <table>
      <thead>
        <tr>
          {nameOfCollumn.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            user={user}
            handleSaveChanges={handleSaveChanges}
            handleDeleteUser={handleDeleteUser}
          />
        ))}
      </tbody>
    </table>
  ) : null;
}

export default Table;
