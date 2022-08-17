import { instantiateStreaming } from "@assemblyscript/loader";

interface API {
  add(a: number, b: number): number;
  [index: string]: unknown;
}

const imports: any = {};

const loadFun = async () => {
  return await fetch("./as-api.wasm")
};

export default instantiateStreaming<any>(loadFun(), imports);
