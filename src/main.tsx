import AppRouter from "@routes/AppRouter";
import React from "react";
import ReactDOM from "react-dom/client";
// redux
import store from "@store/index";
import { Provider } from "react-redux";
// styles
import "@styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </React.StrictMode>
);
