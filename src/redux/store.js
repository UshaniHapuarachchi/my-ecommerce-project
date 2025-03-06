import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import App from '../App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
