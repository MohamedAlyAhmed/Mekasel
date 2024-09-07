import AppRouter from "@routes/AppRouter";
import React from "react";
import ReactDOM from "react-dom/client";
// redux
import { persistor, store } from "@store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// styles
import "@styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
