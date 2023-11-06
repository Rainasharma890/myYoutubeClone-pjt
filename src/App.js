import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './Video';

function App() {
  return (
    <div className="App">
      {/* <p>My name is Raina Sharma. I study in Roorkee Institute of Technology.</p>
      <Homepage /> */}
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>}>
          </Route>
          <Route exact path="/video" element={<Video/>}></Route>
          </Routes></BrowserRouter>

    </div>
  );
}

export default App;
