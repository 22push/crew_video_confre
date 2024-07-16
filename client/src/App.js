import './App.css';
import Homepage from './Dashboard/home/home';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { useSelector ,connect} from 'react-redux';
import Loginhandler from './Dashboard/login/loginhandler';
import Profile from './Dashboard/userdetails/profile';
import MeetingRoom from './Dashboard/meetingroom/joinroom';
import JoiningScreen  from './Dashboard/precallsetup/precall';
function App() {
  const meetingId = useSelector((state) => state.meeting.meetingid);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path={'/login'} element = {<Loginhandler/>}/>
      <Route path={'/profile'} element = {<Profile/>}/>
      <Route path={'/meeting'} element = {<MeetingRoom meetingid={meetingId}/>}/>
      <Route path={'/joining'} element = {<JoiningScreen />}/>
    </Routes>
    </BrowserRouter>
  );
}
const mapStateToProps = ({ user }) => ({
  ...user
});
export default connect(mapStateToProps)(App);
// export default App;
