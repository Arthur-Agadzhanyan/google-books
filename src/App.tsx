import React, { FC } from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App: FC = () => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Main />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
