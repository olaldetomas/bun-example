import { $ } from "bun";

const filename = "response.json";
const res = await fetch("https://api.github.com/users/octocat");
const jsonRes = await res.json();
await $`touch ${filename} | echo ${JSON.stringify(jsonRes)} > ${filename}`;
