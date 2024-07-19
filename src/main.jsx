import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loading from './components/clientComponents/Loading.jsx';
import routes from './routes/index.js';
import MovieDetail from './pages/client/movieDetail/MovieDetail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        {/* <StrictMode> */ }
        <Suspense fallback={ <Loading /> }>
            {/* <RouterProvider router={ routes } /> */ }
            <App />
        </Suspense>
        {/* </StrictMode> */ }
    </>
);
