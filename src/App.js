import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
