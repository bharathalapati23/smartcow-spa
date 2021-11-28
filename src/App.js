import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import LoginRegisterComponent from './Components/LoginRegisterComponent/LoginRegisterComponent'
import DashboardComponent from './Components/DashboardComponent/DashboardComponent'
import VideoComponent from './Components/VideoComponent/VideoComponent'
import GalleryComponent from './Components/GalleryComponent/GalleryComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Background /> */}

      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
            <Route path='/' exact>
              <LoginRegisterComponent />
            </Route>
            <Route path='/dashboard' exact>
              <DashboardComponent />
            </Route>
            <Route path='/gallery' exact>
              <GalleryComponent />
            </Route>
            <Route path='/video-edit' exact>
              <VideoComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
