import "./App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;
//links socket to backend
const PORT = "localhost:3001/";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");

  //establishes connection to socket
  useEffect(() => {
    socket = io(PORT);
  }, [PORT]);

  const connectToRoom = () => {
    socket.emit("join_room", room);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <div className="logIn">
          <h1 className="header">React Chat</h1>
          <br />
          <div className="logInInputs">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room..."
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>

          <button onClick={connectToRoom}>Enter Chat</button>
        </div>
      ) : (
        <h1>Logged in</h1>
      )}
    </div>
  );
}

export default App;
