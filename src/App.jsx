import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Spin } from 'antd';

import List from 'containers/List'
import Favorit from 'containers/Favorit'

const Loading = () => <div className="loading-page">
  <Spin size="large" />
</div>

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={<Loading />}>
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
