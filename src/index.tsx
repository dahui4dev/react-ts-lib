// export function sayHello(name: string) {
//   return `Hey ${name}, say hello to TypeScript.`;
// }

import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, say hello to TypeScript.</div>
);

export default SayHello;
