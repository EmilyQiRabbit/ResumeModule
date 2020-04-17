import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";

export function ClientRender() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
