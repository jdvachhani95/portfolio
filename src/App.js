import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Contact from './Contact';
class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/contact/:no" component={Contact} />
              {/* <Route path="/progressbar" component={Progressbar} />
                <Route path="/piechart" component={PieChart} /> */}
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
