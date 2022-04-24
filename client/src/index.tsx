import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import './style/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<h1>Cette page n'est pas encore disponible</h1>}/>
            <Route path="/user" element={<h1>Cette page n'est pas encore disponible</h1>}/>
        </Routes>
    </BrowserRouter>
);
