import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import { router } from "./Routes/routes";

function App() {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  return (
    <div className="max-w-[1440px] mx-auto">
      {loading ? <Spinner /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
