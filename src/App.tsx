import React from "react";
import API from "./as-api";
import "./App.css";
import { getFactorialJS, getFactorialFibJS } from "./utils";

const App: React.FC = () => {
  const [api, setAPI] = React.useState<any>(null);

  React.useEffect(() => {
    const get = async () => {
      setAPI(await API);
    };
    get();

    return () => {
      setAPI(null);
    };
  }, []);

  const factorialJS = React.useCallback(async () => {
    console.time("getFactorialJS");
    const result = getFactorialJS(30);
    console.timeEnd("getFactorialJS");

    console.log("factorialJS", result);
  }, []);

  const factorialWasm = React.useCallback(async () => {
    console.time("getFactorialWasm");
    const result = api?.exports.getFactorialWasm(30);
    console.timeEnd("getFactorialWasm");

    console.log("factorialWasm:", result);
  }, [api]);

  const factorialFibJS = React.useCallback(async () => {
    console.time("factorialFibJS");
    const result = getFactorialFibJS(40);
    console.timeEnd("factorialFibJS");

    console.log("result:", result);
  }, []);

  const factorialFibWasm = React.useCallback(async () => {
    console.time("factorialFibWasm");
    console.log("🚀 ~ api", api);
    const result = api?.exports?.getFactorialFibWasm(40);
    console.timeEnd("factorialFibWasm");

    console.log("factorialFibWasm:", result);
  }, [api]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={factorialJS}>Get Factorial in Js</button>
        <br />
        <button onClick={factorialWasm}>Get Factorial in Wasm</button>

        <br />
        <br />

        <button onClick={factorialFibJS}>Get Factorial Fibo in Js</button>
        <br />
        <button onClick={factorialFibWasm}>Get Factorial Fibo in Wasm</button>
      </header>
    </div>
  );
};

export default App;
