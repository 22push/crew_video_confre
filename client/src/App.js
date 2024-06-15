import './App.css';
import LandingPage from './pages/landingpage';
import MeetingPage from './pages/meetingpage';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/room' element={<MeetingPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
