import './App.css';
import {useEffect, useState} from 'react';
import Movie from './Movie';
import Filter from './Filter';
import {motion, AnimatePresence} from 'framer-motion';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c60b6e60520c0f718e581346d0fe42&language=en-US&page=1');
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className='popular-movies'>
        <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie}/>;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
