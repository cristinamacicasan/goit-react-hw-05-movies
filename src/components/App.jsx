import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';




export const App = () => {
  

  return (
    <div>
      <Home />
      <Movies />
      <MovieDetails />
      <Cast />
      <Reviews />
    </div>
  );
};

export default App;
