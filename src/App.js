import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app-side'></div>
      <div className='app-main'>
        <BrowserRouter basename='Terrafirst'>
          <Routes>
            <Route path='/' element={<Main />}/>
          </Routes>
        </BrowserRouter>
      </div>
      <div className='app-side'></div>
    </div>
  );
}

export default App;
