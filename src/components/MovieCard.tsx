import React from 'react';
import { Play, Plus, Clock, Star } from 'lucide-react';

interface MovieCardProps {
  title: string;
  rating: number;
  year: number;
  imageUrl: string;
  genre: string;
  duration: string;
  playUrl: string;
}

export function MovieCard({ title, rating, year, imageUrl, genre, duration, playUrl }: MovieCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-transform hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="h-[300px] w-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-1 flex items-center text-sm text-gray-300">
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 text-yellow-500" />
              <span>{rating}</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-400">{genre}</p>
          
          <div className="mt-4 flex space-x-2">
      <button
        className="rounded-full bg-red-600 p-2 hover:bg-red-700"
        onClick={() => window.location.href = playUrl}
      > 
        <Play className="h-4 w-4" />
      </button>
            <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}