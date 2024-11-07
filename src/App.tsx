import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieCard } from './components/MovieCard';
import { Footer } from './components/Footer';

const trendingMovies = [
  {
    title: "Heretic (2024)",
    rating: 7.2,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    genre: "Horror, Thriller",
    duration: "1h 50m",
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Red One (2024)",
    rating: 6.7,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZmFkMjE4NjQtZTVmZS00MDZjLWE2ZmEtZTkzODljNjhlNWUxXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    genre: "Action, Adventure, Comedy",
    duration: "2h 3m", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Paddington in Peru (2024)",
    rating: 7.8,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzMyNWZlYmYtZDgxMC00ZTU3LWFiYzctNGE0ZDc0OTlhZTRlXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    genre: "Adventure, Comedy, Family",
    duration: "1h 46m", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Gladiator II (2024)",
    rating: 7.5,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOGU1ZjcyZmItZDZiMC00YzQ5LWE2NzEtMjNlYzE4MWIxNGYyXkEyXkFqcGc@._V1_.jpg",
    genre: "Action, Drama, History",
    duration: "2h 28m", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Blitz (2024)",
    rating: 6.5,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMGI5ZjBkNDktOGMyMC00ZmYzLThmYjctYmViMmVkNDY3ZjExXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
    genre: "Drama, War",
    duration: "2h", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Wicked (2024)",
    rating: 8.0,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_QL75_UX190_CR0,10,190,281_.jpg",
    genre: "Fantasy, Musical",
    duration: "2h 40m", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Moana 2 (2024)",
    rating: 8.2,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZDUxNThhYTUtYjgxNy00MGQ4LTgzOTEtZjg1YTU5NTcwNThlXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    genre: "Animation, Adventure",
    duration: "1h 40m", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Y2K (2024)",
    rating: 6.8,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYTQxNWJmYTEtZTMzMS00MDk1LTlkMTgtYmRhOTRmMjdkOGRiXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg",
    genre: "Comedy, Drama",
    duration: "1h 33m", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Kraven the Hunter (2024)",
    rating: 7.4,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZDU0YTI5ODAtN2NmMS00YTg3LTgyNDItN2RmOWEzOTkzZjcyXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    genre: "Action, Adventure",
    duration: "2h 10m", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
  },
  {
    title: "Mufasa: The Lion King (2024)",
    rating: 7.9,
    year: 2024,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjg1YzI5ZmQtZjZkOC00ZDMzLWI4YjYtMmY5MzZjYWE3YzhjXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    genre: "Animation, Adventure, Drama",
    duration: "2h", // Tambahkan koma di sini
    playUrl: "https://chikraighotoops.com/4/8476602",
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
            {trendingMovies.slice(0, 5).map((movie) => (
              <MovieCard key={movie.title} {...movie} /> // Gunakan title sebagai key
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">Watch Early</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {trendingMovies.slice(5, 10).map((movie) => (
              <MovieCard key={movie.title} {...movie} /> // Gunakan title sebagai key
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;