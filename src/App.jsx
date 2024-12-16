import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";
import Feed from "./components/Feed";

function App() {
  document.documentElement.setAttribute("data-theme", "dark");
  
  return (
    <>
    <Provider store ={appStore}>
    <BrowserRouter basename="/">
    <Routes>
    
    <Route path="/" element={<Body/>}>
    <Route path="/feed" element={<Feed/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<div>Profile</div>}/>
    </Route>
    
    </Routes>
    </BrowserRouter>
    </Provider>
    
    </>
  )
}

export default App
