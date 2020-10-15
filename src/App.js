import React from 'react';
import Landing from "./Components/Landing/Landing"
import FAQs from "./Components/FAQs/FAQs"
import Demo from "./Components/Demo/DemoContainer"
import Thanks from './Components/Demo/Thanks';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import ReactPixel from 'react-facebook-pixel';

const history = createBrowserHistory();
const trackingId = "UA-178304597-1";
ReactGA.initialize(trackingId, { //obligatorio
  debug: true
});
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});


const options = {
  autoConfig: true,
  debug: false,
};
ReactPixel.init('610050959688626', options);
ReactPixel.pageView();


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
