import React from 'react';
import Landing from "./Components/Landing/Landing"
import FAQs from "./Components/FAQs/FAQs"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/faqs" component={FAQs} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
