import React from "react";

export function Page1() {
  if (typeof window === "undefined") {
    console.log("---node---");
  }
  return <div>hello world 1</div>;
}
