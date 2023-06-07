import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App(props) {
  return (   
    <BrowserRouter>
  <div className='app-wrapper'>
   <Header/>
   <Sidebar state={props.state.sidebar}/>  
   <div className='app-content'>
     <Routes> 
  <Route path='/profile'  element=
 {<Main profilePage={props.state.profilePage} dispatch={props.dispatch}
   />}/>
  <Route path='/dialogs/*' element=
    {<Dialogs store={props.store} />}/>
  <Route path='/news' element={<News/>}/>
  <Route path='/music' element={<Music/>}/>
  <Route path='/setting' element={<Setting/>}/>
  </Routes>
  </div> 
  </div>
  </BrowserRouter>
  );
}


export default App;
