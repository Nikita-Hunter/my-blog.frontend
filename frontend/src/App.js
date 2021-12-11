import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import MasterLayout from "./layouts/frontend/masterLayout";
import AdminIndexLayout from "./layouts/admin/indexlayout";
import FrontendHome from "./layouts/frontend/index";
function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route exact path="/" component={FrontendHome} />
            <Route path="/admin" name="Admin" render={(props) => <AdminIndexLayout {...props} /> } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
