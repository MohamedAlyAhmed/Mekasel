import React from "react";
import AppRouter from "@routes/AppRouter";
import ReactDOM from "react-dom/client";
// styles
import "@styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
