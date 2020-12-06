import React from "react";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

function App() {
  return (
    <React.Fragment>
      <JumbotronContainer />
      <FooterContainer />
    </React.Fragment>
  );
}

export default App;
