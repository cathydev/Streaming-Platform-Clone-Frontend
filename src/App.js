import React, {useEffect}  from "react";
import './App.scss';
import Home from './pages/Home';
import ReactGA from 'react-ga';
import track from "react-tracking";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-157390602-1");
    ReactGA.pageview('../pages/Home');
  }, []);
 
  return (
    <div >
      <Home />
    </div>
  );
}

const TrackedApp = track(
  // app-level tracking data
  { app: "my-app" },

  // top-level options
  {
    // custom dispatch to console.log in addition to pushing to dataLayer[]
    dispatch: data => {
      console.log(data);
      (window.dataLayer = window.dataLayer || []).push(data);
    }
  }
)(App);

export default App;
