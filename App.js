import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Layout from './hoc/Layout';
import Pages from './Pages/Pages.js';


class App extends Component {
  render() {
    return (
      <Aux>
          <Layout>
              <Pages/>
          </Layout>
      </Aux>
    );
  }
}

export default App;
