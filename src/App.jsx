import React from 'react'
import { Provider } from 'react-redux'
import AlbumPage from './components/AlbumPage/AlbumPage.jsx';
import MainPage from './components/MainPage/MainPage.jsx'
import SinglePhoto from './components/SinglePhoto/SinglePhoto.jsx';
import store from './store.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GoBackButton from './components/Buttons/GoBackButton.jsx';

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
              <GoBackButton />
              <SinglePhoto />
            </Route>
            <Route path='/album/:id'>
              <GoBackButton />
              <AlbumPage />
            </Route>
            <Route path='/'>
              Nothing found :(
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
