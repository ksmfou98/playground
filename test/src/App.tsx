import Lala from "Lala";
import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "stores";
import "./test.scss";

function App() {
  const user = useSelector((state: rootState) => state.user);

  return (
    <div className="App">
      {user.name}

      <Lala />
    </div>
  );
}

export default App;
