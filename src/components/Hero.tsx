import React from 'react';
import { Play, Info, Clock, Star } from 'lucide-react';

interface Movie {
  title: string;
  rating: number;
  year: number;
  imageUrl: string;
  genre: string;
  duration: string;
}

interface HeroProps {
  movie: Movie;
}

export function Hero({ movie }: HeroProps) {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="relative flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 pt-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {movie.title}
          </h1>
          <div className="mt-4 flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 text-yellow-500" />
              <span>{movie.rating}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{movie.duration}</span>
            </div>
            <span>•</span>
            <span>{movie.genre}</span>
          </div>
          <p className="mt-4 max-w-xl text-xl text-gray-300">
            Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome.
          </p>
          
          <div className="mt-8 flex space-x-4">
            <button className="flex items-center rounded-md bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </button>
            <button className="flex items-center rounded-md bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-gray-700">
              <Info className="mr-2 h-5 w-5" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}