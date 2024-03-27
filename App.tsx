import React from 'react';
import {Provider} from 'react-redux';
import {store} from './_redux/store';
import Game from './Screen/Game';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
