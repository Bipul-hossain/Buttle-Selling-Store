import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Buttles from "./Component/Buttles/Buttles";

const buttleData = fetch(
  "https://raw.githubusercontent.com/Bipul-hossain/buttoles/refs/heads/main/bottles.json"
).then((res) => res.json());

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Buy Water Buttle.</h1>
      <Suspense fallback={<h2>Buttole Loading......</h2>}>
        <Buttles buttleData={buttleData}></Buttles>
      </Suspense>
    </>
  );
}

export default App;
