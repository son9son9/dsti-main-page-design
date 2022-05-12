import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './layout/Header';
import StyledSpeedDial from './layout/StyledSpeedDial';
import ChannelService from './components/ChannelService';

const CHANNELIO_PLUGIN_KEY = "82af07a0-c4f4-4e0d-8295-03b91ef138cf"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <StyledSpeedDial /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ChannelService.boot pluginKey={CHANNELIO_PLUGIN_KEY} />
      </Router>
    </div>
  );
}

export default App;
