import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@rmwc/theme";

import { TopBar } from "./TopBar";
import { MainPage } from "./MainPage";

import "./styles.css";
import "normalize.css/normalize.css"
import "@material/theme/dist/mdc.theme.css";
import "@material/typography/dist/mdc.typography.css";

const App = () => (
  <>
    <ThemeProvider
      options={{
        primary: "black",
        secondary: "blue"
      }}
    >
      <TopBar title="MyRssFeeder" />
      <MainPage />
    </ThemeProvider>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
