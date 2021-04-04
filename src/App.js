import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './views/dist/css/scss/app.css';
import Layout from './views/components/layout/index';
import Home from './views/components/pages/home/index';
import Cart from './views/components/products/cart';
import Single from './views/components/products/index';
import Shop from './views/components/pages/shop';
import Default from './views/components/error/index';

function App() {
  return (
    <Layout>
      <Route history={useHistory()}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:name/:id" component={Single} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={Default} />
        </Switch>
      </Route>
    </Layout>
  );
}

export default App;
