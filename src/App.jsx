import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import List from 'containers/List'
import Favorit from 'containers/Favorit'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback="Loading">
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/favorite" component={Favorit} />
          </Switch>
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
