import MainPage from './commponents/view/MainPage/MainPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import StorePaper from './commponents/view/StorePaper/StorePaper';
import StorePaint from './commponents/view/StorePaint/StorePaint';
import StoreElse from './commponents/view/StoreElse/StoreElse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/storepaper' element={<StorePaper />} />
        <Route path='/storepaint' element={<StorePaint />} />
        <Route path='/storeelse' element={<StoreElse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
