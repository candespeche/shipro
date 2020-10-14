import React from 'react';
import Landing from "./Components/Landing/Landing"
import FAQs from "./Components/FAQs/FAQs"
import Demo from "./Components/Demo/DemoContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/faqs" component={FAQs} home={false} />
          <Route exact path="/solicitar-demo" component={Demo} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
