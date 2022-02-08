import React, {useEffect}  from "react";
import './App.scss';
import Home from './pages/Home';
import ReactGA from 'react-ga';
import { useMatomo } from '@datapunt/matomo-tracker-react'

function App() {
const { trackPageView, trackEvent } = useMatomo()

  // Track page view
useEffect(() => {
    trackPageView()
  }, [])

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

export default App;
