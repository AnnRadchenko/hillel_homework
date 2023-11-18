import React, { useState } from "react";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";

function App() {
  const [user, setUser] = useState({});

  const getUser = (value) => setUser(value);

  return (
    <>
      <Form liftingUser={getUser} />
      <Table user={user} />
    </>
  );
}

export default App;
