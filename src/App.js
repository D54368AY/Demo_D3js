import './App.css';
import {Box} from '@mui/material';
import LeftDrawer from './views/Sidebar/LeftDrawer';
import NavBar from './views/Navbar/NavBar';
import Dashboard from './views/Dashboard/Dashboard';
function App() {
  return (
    <Box>
      <LeftDrawer />
      <NavBar />
      <Box sx={{ml:'220px'}}>
      <Dashboard />
      </Box>
      </Box>
  );
}

export default App;
