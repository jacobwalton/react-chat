import "./App.css";
import { useState } from "react";

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn ? (
        <div className="logIn">
          <h1 className="header">React Chat</h1>
          <br />
          <div className="logInInputs">
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Room..." />
          </div>

          <button>Enter Chat</button>
        </div>
      ) : (
        <h1>Logged in</h1>
      )}
      <h1></h1>
    </div>
  );
}

export default App;
