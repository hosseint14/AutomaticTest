import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText ? <Output>It's Good to See you</Output> : <Output>changed!</Output>}
      <button onClick={changeTextHandler}>change text</button>
    </div>
  );
};

export default Greeting;
