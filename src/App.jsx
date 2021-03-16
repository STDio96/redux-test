import React from 'react'
import { Provider } from 'react-redux'
import Album from './components/Album/Album.jsx';
import MainPage from './components/MainPage/MainPage.jsx'
import SinglePhoto from './components/SinglePhoto/SinglePhoto.jsx';
import store from './store.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path='/'>
              <MainPage />
            </Route>
            <Route path='/photo/:id'>
              <SinglePhoto />
            </Route>
            <Route path='/album/:id'>
              <Album />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
