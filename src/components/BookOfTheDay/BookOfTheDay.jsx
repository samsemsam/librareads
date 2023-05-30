import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImg from "../../images/cover_not_found2.jpg";
import './BookOfTheDay.css';
import { Link } from 'react-router-dom';

const BookOfTheDay = () => {
  const [bookOfTheDay, setBookOfTheDay] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchBookOfTheDay() {
      try {
        const searchKeywords = [
    "fantasy",
    "mystery",
    "adventure",
    "romance",
    "science fiction",
    "architecture",
    "art instruction",
    "art history",
    "dance",
    "design",
    "fashion",
    "film",
    "graphic design",
    "music",
    "music theory",
    "painting",
    "photography",
    "bears",
    "cats",
    "kittens",
    "dogs",
    "puppies",
    "fiction",
    "fantasy",
    "historical fiction",
    "horror",
    "humor",
    "literature",
    "magic",
    "mystery and detective stories",
    "plays",
    "poetry",
    "romance",
    "science fiction",
    "short stories",
    "thriller",
    "young adult",
    "science & mathematics",
    "biology",
    "chemistry",
    "mathematics",
    "physics",
    "programming",
    "business & finance",
    "management",
    "entrepreneurship",
    "business economics",
    "business success",
    "finance",
    "children's",
    "kids books",
    "stories in rhyme",
    "baby books",
    "bedtime books",
    "picture books",
    "history",
    "ancient civilization",
    "archaeology",
    "anthropology",
    "world war II",
    "social life and customs",
    "cooking",
    "cookbooks",
    "mental health",
    "exercise",
    "nutrition",
    "self-help",
    "biography",
    "autobiographies",
    "history",
    "politics and government",
    "world war II",
    "women",
    "kings and rulers",
    "composers",
    "artists",
    "anthropology",
    "religion",
    "political science",
    "psychology",
    "brazil",
    "india",
    "indonesia",
    "united states",
    "textbooks",
    "history",
    "mathematics",
    "geography",
    "psychology",
    "algebra",
    "education",
    "business & economics",
    "science",
    "chemistry",
    "english language",
    "physics",
    "computer science"
  ];
        const randomKeyword = searchKeywords[Math.floor(Math.random() * searchKeywords.length)];
        const response = await fetch(`https://openlibrary.org/search.json?subject=${randomKeyword}`);
        const data = await response.json();

        if (data.docs && data.docs.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.docs.length);
          const selectedBookData = data.docs[randomIndex];

          const selectedBook = {
            id: selectedBookData.key.replace(/^\/works\//, ""),
            title: selectedBookData.title,
            author: selectedBookData.author_name || [],
            cover_id: selectedBookData.cover_i,
            edition_count: selectedBookData.edition_count,
            first_publish_year: selectedBookData.first_publish_year,
          };

          if (selectedBook.cover_id) {
            selectedBook.cover_img = `https://covers.openlibrary.org/b/id/${selectedBook.cover_id}-L.jpg`;
          } else {
            selectedBook.cover_img = coverImg;
          }

          setBookOfTheDay(selectedBook);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchBookOfTheDay();
  }, []);

  const handleLinkClick = () => {
    navigate(`/book/${bookOfTheDay.id}`);
  };

  return (
    <div className="book-of-the-day">
      <h2>Book of the Day</h2>
      {loading ? (
        <p>Loading...</p>
      ) : bookOfTheDay ? (
        <div className="book-container">
          <Link to={`/book/${bookOfTheDay.id}`} onClick={handleLinkClick}>
            <img src={bookOfTheDay.cover_img} alt="cover" />
          </Link>
          <div className="book-info">
            <Link to={`/book/${bookOfTheDay.id}`} onClick={handleLinkClick}>
              <h3>{bookOfTheDay.title}</h3>
            </Link>
            <p>Author: {bookOfTheDay.author.join(", ")}</p>
            <p>Editions: {bookOfTheDay.edition_count}</p>
            <p>First Publish Year: {bookOfTheDay.first_publish_year}</p>
          </div>
        </div>
      ) : (
        <p>No books found for the selected subject.</p>
      )}
    </div>
  );
};

export default BookOfTheDay;