import React from "react";
import Autocomplete from "./Autocomplete";
import {data} from "./Data";

const App = () => {
  return (
    <div>
      <h1 className="headline">Autocomplete Demo</h1>
      <Autocomplete data={data} />
    </div>
  );
};

export default App;
