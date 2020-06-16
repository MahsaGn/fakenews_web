import React, { Profiler } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/pages/homePage";
import { Provider } from "react-redux";
import store from "./store";

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      {/* <Route path="/travellouge/:id" component={Travellouge} /> */}
    </BrowserRouter>
  </Provider>
);

export default App;
