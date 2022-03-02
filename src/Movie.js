import React from 'react';
import {motion} from 'framer-motion';

export default function Movie({ movie }) {
  return (
    <motion.div
        layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        exit={{ opacity: 0, scale: 0.5 }}
    >
        <h2>{movie.title}</h2>
        <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
        />
    </motion.div>
  )
}
