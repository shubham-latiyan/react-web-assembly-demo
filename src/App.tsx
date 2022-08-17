import React from "react";
import API from "./as-api";
import "./App.css";
import { getFactorializeJS, getFactorializeFibJS } from "./utils";

function useAsyncEffect(
  fn: () => Promise<void | (() => void)>,
  dependencies?: React.DependencyList
) {
  return React.useEffect(() => {
    const destructorPromise = fn();
    return () => {
      destructorPromise.then((destructor) => destructor && destructor());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

const App: React.FC = () => {
  console.log('API:', API)
  // const [api, setAPI] = React.useState<any>(async () => await API);
  // console.log('api:', api)

  // const [factorializeJS, setFactorializeJS] = React.useState(0);
  // const [factorializeWasm, setFactorializeWasm] = React.useState(0);

  useAsyncEffect(async () => {
    // setAPI(await API);
  }, []);


  const getFactorialJS = React.useCallback(async () => {
    console.time('getFactorialJS');
    const result = getFactorializeJS(200);
    // setFactorializeJS(result);
    console.timeEnd('getFactorialJS');
  }, []);

  const getFactorialWasm = React.useCallback(async () => {
    console.time('getFactorialWasm');
    // const result = api?.exports.getFactorializeWasm(200);
    // console.log('result:', result)
    // setFactorializeWasm(result);
    console.timeEnd('getFactorialWasm');
  }, []);


  const factorializeFibJS = React.useCallback(async () => {
    console.time('factorializeFibJS');
    const result = getFactorializeFibJS(30);
    console.log('result:', result)
    // setFactorializeJS(result);
    console.timeEnd('factorializeFibJS');
  }, []);

  const factorializeFibWasm = React.useCallback(async () => {
    // console.log('api:', await api)
    console.time('factorializeFibWasm');
    // const result = await api?.exports?.getFactorializeFibWasm(30);
    // console.log('result:', result)
    console.timeEnd('factorializeFibWasm');
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getFactorialJS}>Get Factorial in Js</button>
        <br />
        <button onClick={getFactorialWasm}>Get Factorial in Wasm</button>

        <br /><br />

        <button onClick={factorializeFibJS}>Get Factorial Fibo in Js</button>
        <br />
        <button onClick={factorializeFibWasm}>Get Factorial Fibo in Wasm</button>
      </header>
    </div>
  );
};

export default App;
