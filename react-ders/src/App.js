import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  //sabit değişkenler

  //stateler
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(null);

  //lifecycle methodları
  useEffect(() => {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users", { method: "get" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setUsers(data);
        }, 3000);
      })
      .catch((err) => console.log(err));
  }, []);

  //render

  if (users === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Header username={username} />
      {users.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

// JSX
