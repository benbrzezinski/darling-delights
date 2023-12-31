import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader/index.tsx";
import store from "./redux/store.ts";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store.store}>
          <PersistGate persistor={store.persistor} loading={<Loader />}>
            <App />
          </PersistGate>
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
