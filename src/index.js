import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/tailwind.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>...loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
