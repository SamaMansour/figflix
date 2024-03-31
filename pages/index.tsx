// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data for movie posters
  const movies = [
    { title: 'Movie 1', image: '/movie1.jpg' },
    { title: 'Movie 2', image: '/movie2.jpg' },
    // Add more movie objects here...
  ];

  return (
    <>
      <Head>
        <title>Figflix - Stream Unlimited Movies and Shows</title>
        <meta name="description" content="Watch unlimited movies and TV shows on Figflix. Anywhere, anytime." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Figflix</h1>
        <div>
          <select className="bg-transparent border border-gray-500 mr-4 p-2 rounded">
            <option value="en">English</option>
            {/* Additional language options */}
          </select>
          <button className="bg-red-600 hover:bg-red-700 transition duration-200 px-4 py-2 rounded font-semibold">
            Sign in
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="my-8">
          <input
            type="text"
            placeholder="Search movie..."
            className="w-full p-4 bg-white rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie, index) => (
            <div key={index} className="w-full">
              <Image
                src={movie.image}
                alt={movie.title}
                width={200} // these values are just placeholders
                height={300} // these values are just placeholders
                className="rounded hover:opacity-75 transition duration-200"
              />
              <h2 className="mt-2 text-white">{movie.title}</h2>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
