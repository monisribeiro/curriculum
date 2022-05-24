import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';


import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Links from './components/Links';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import MoreInfo from './components/MoreInfo';

function App() {
  return (
    <Stack gap={3} className="App">
      <Navbar />
      <Profile />
      <Links />
      <WorkExperience />
      <Education />
      <MoreInfo />
    </Stack>
  );
}

export default App;
