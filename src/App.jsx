
import './App.css';
import MovieDashboard from './pages/admin/moviemanagement/MovieDashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import FormAddMovie from './components/adminComponents/movie/FormAddMovie';



export default function App()
{
  return (
    <>
      <Provider store={ store }>
        <MovieDashboard />
      </Provider>
    </>
  );
}
