import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Preview from './pages/Preview';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Preview />} />
                    <Route path='/document' element={<Preview/>} />
                    <Route path='/detail' element={<Preview/>} />
                    <Route path='/sop' element={<Preview/>} />
                    <Route path='/interview' element={<Preview/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
