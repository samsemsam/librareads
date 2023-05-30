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
                const response = await fetch("http://openlibrary.org/search.json?title=book");
                const data = await response.json();

                if (data.docs) {
                    const bookList = data.docs.map((book) => ({
                        id: book.key.replace(/^\/works\//, ""),
                        title: book.title,
                        author: book.author_name || [],
                        cover_id: book.cover_i,
                        edition_count: book.edition_count,
                        first_publish_year: book.first_publish_year
                    }));

                    const randomIndex = Math.floor(Math.random() * bookList.length);
                    const selectedBook = bookList[randomIndex];

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
            {bookOfTheDay ? (
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
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BookOfTheDay;