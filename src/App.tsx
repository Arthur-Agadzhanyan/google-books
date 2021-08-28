import React, { FC } from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "./pages/Book";

const App: FC = () => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Main />
        </Route>

        <Route path='/books/:id' exact>
          <Book />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
