import './App.css';
import { Header } from './components/Header';
import { Routes, Route} from "react-router-dom";
import { MoviesPage } from './views/MoviesPage';
import { AboutPage } from './views/AboutPage';
import { MovieDetailsPage } from './views/MovieDetailsPage';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MoviesPage />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="movie/:movieId" element={<MovieDetailsPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
