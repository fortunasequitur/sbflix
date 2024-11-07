import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieCard } from './components/MovieCard';
import { Footer } from './components/Footer';

const trendingMovies = [
  {
    title: "Heretic",
    rating: 7.2,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1505699261378-c372af38134c?auto=format&fit=crop&w=1770&q=80",
    genre: "Horror, Thriller",
    duration: "1h 50m"
  },
  {
    title: "Red One",
    rating: 6.7,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1770&q=80",
    genre: "Action, Adventure, Comedy",
    duration: "2h 3m"
  },
  {
    title: "Paddington in Peru",
    rating: 7.8,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=1770&q=80",
    genre: "Adventure, Comedy, Family",
    duration: "1h 46m"
  },
  {
    title: "Gladiator II",
    rating: 7.5,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?auto=format&fit=crop&w=1770&q=80",
    genre: "Action, Drama, History",
    duration: "2h 28m"
  },
  {
    title: "Blitz",
    rating: 6.5,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1569098272587-7be1e4fb8187?auto=format&fit=crop&w=1770&q=80",
    genre: "Drama, War",
    duration: "2h"
  },
  {
    title: "Wicked",
    rating: 8.0,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=1770&q=80",
    genre: "Fantasy, Musical",
    duration: "2h 40m"
  },
  {
    title: "Moana 2",
    rating: 8.2,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?auto=format&fit=crop&w=1770&q=80",
    genre: "Animation, Adventure",
    duration: "1h 40m"
  },
  {
    title: "Y2K",
    rating: 6.8,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1533677960219-eab5a4ed9258?auto=format&fit=crop&w=1770&q=80",
    genre: "Comedy, Drama",
    duration: "1h 33m"
  },
  {
    title: "Kraven the Hunter",
    rating: 7.4,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1770&q=80",
    genre: "Action, Adventure",
    duration: "2h 10m"
  },
  {
    title: "Mufasa: The Lion King",
    rating: 7.9,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1770&q=80",
    genre: "Animation, Adventure, Drama",
    duration: "2h"
  },
  {
    title: "Wallace & Gromit: Vengeance Most Fowl",
    rating: 8.4,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1548247661-3d7905940716?auto=format&fit=crop&w=1770&q=80",
    genre: "Animation, Comedy, Family",
    duration: "1h 19m"
  },
  {
    title: "Sonic the Hedgehog 3",
    rating: 7.6,
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1770&q=80",
    genre: "Action, Adventure, Family",
    duration: "2h"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero movie={trendingMovies[3]} /> {/* Featuring Gladiator II */}
      
      <main className="mx-auto max-w-7xl px-4 py-16">
        <section>
          <h2 className="mb-8 text-2xl font-bold">Trending Now</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {trendingMovies.slice(0, 5).map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">Coming Soon</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {trendingMovies.slice(5, 10).map((movie, index) => (
              <MovieCard key={`coming-${index}`} {...movie} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;