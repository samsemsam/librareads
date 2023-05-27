import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BookOfTheDay from '../../components/BookOfTheDay/BookOfTheDay';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [showBookOfTheDay, setShowBookOfTheDay] = useState(true);

  const hideBookOfTheDay = () => {
    setShowBookOfTheDay(false);
  };

  return (
    <main>
      <Header />
      {showBookOfTheDay && location.pathname === 'bookoftheday' && <BookOfTheDay />}
      <Outlet hideBookOfTheDay={hideBookOfTheDay} />
    </main>
  );
};

export default Home;