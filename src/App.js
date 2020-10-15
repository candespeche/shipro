import React from 'react';
import Landing from "./Components/Landing/Landing"
import FAQs from "./Components/FAQs/FAQs"
import Demo from "./Components/Demo/DemoContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Thanks from './Components/Demo/Thanks';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/faqs" component={FAQs} home={false} />
          <Route exact path="/solicitar-demo" component={Demo} />
          <Route exact path="/thankyou" component={Thanks} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
