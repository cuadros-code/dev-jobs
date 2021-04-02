import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../firebase";
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavBar } from "../components/NavBar";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRoutes";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateJob from "../pages/CreateJob";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

export const AppRouter = () => {

  const [user, loading] = useAuthState(auth)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    user ? setIsAuth(true) : setIsAuth(false)
  }, [user])

  if (loading) {
    return <CircularProgress color="secondary" />
  }

  return (
    <Router>
      <NavBar />
      <Switch>

        <Route exact path="/" component={Home} />

        <PublicRouter
          isAuthenticated={isAuth}
          path="/auth"
          component={PublicRouterContainer}
        />

        <PrivateRouter
          isAuthenticated={isAuth}
          path="/profile"
          component={PrivateRouterContainer}
        />
      </Switch>
    </Router>
  )
}


const PrivateRouterContainer = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/profile/dashboard" component={Dashboard} />
        <Route exact path="/profile/my-account" component={Profile} />
        <Route exact path="/profile/create-job" component={CreateJob} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

const PublicRouterContainer = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  )
}