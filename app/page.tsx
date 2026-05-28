import { readFileSync } from "node:fs";
const data = readFileSync("package.json", "utf-8");
export default function Page() {
  return <main><h1>Vrai — {data.length}</h1></main>;
}