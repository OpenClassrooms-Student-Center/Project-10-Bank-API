import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import './style/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<h1>Page not yet available</h1>}/>
            <Route path="/*" element={<h1>404 Page not found</h1>}/>
        </Routes>
    </BrowserRouter>
);
