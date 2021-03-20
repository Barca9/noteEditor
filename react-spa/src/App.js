import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import {NotesList} from "./pages/NotesList";


function App() {
  return (
      <BrowserRouter>
      <div className="container pt-4">
        <Switch>
            <Route path={'/'} exact component={NotesList}/>

        </Switch>
      </div>
      </BrowserRouter>

  );
}

export default App;
