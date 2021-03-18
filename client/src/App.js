import "./App.css";
import { useState } from "react";

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn ? <h1>Not logged in!</h1> : <h1>Logged in</h1>}
      <h1></h1>
    </div>
  );
}

export default App;
