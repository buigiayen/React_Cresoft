import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Login from "./login";
import Main from "./Main";
export function Redict_Pages() {

  if (!localStorage.getItem("userToken") && !localStorage.getItem("UserName")) {
    return <Login />
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' ><Login /></Route>
          <Route exact path='/main'><Main /></Route>
        </Switch>

      </BrowserRouter>
    </div>
  )
}