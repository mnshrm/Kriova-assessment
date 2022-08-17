import React, { useState } from "react";
import Form from "./Forms/Forms";
import HomeScreen from "./HomeScreen/HomeScreen";
const App = () => {
  const [loggedIn, setLoggedIn] = useState({ isLoggedIn: false, user: {} });

  const url = "http://localhost:4000/employee";

  const getUserData = async function (credentials) {
    const response = await fetch(url + `/${credentials.email}`);
    const [data] = await response.json();

    if (credentials.password === data.password)
      setLoggedIn({ isLoggedIn: true, user: data });
    else setLoggedIn({ isLoggedIn: true, user: undefined });
  };

  const unLogUser = () => {
    setLoggedIn({ isLoggedIn: false, user: {} });
  };

  return (
    <>
      {loggedIn.isLoggedIn ? (
        <HomeScreen userData={loggedIn.user} logOut={unLogUser} />
      ) : (
        <Form onAuthentication={getUserData} />
      )}
    </>
  );
};

export default App;
