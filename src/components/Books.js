import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import mind from "../assets/the power of subconscious mind.jpg";

export default function Books() {
  return (
    <div>
      <NavBar />
      <div className="book-store dark:bg-gray-900">
        <div className="main-wrapper">
          <div className="books-of">
            <div className="week">
              <div className="author-title">Author of the week</div>
              <div className="author">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  className="author-img"
                />
                <div className="author-name">Sebastian Jeremy</div>
              </div>
            </div>
            <div className="week year">
              <div className="author-title">Books of the year</div>
              <div className="year-book">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
                  alt=""
                  className="year-book-img"
                />
                <div className="year-book-content">
                  <div className="year-book-name">Disappearing Earth</div>
                  <div className="year-book-author">by Julia Phillips</div>
                </div>
              </div>
            </div>
            {/* <div className="overlay dark:bg-gray-900" /> */}
          </div>
          <div className="popular-books">
            <div className="main-menu dark:bg-gray-900">
              <div className="genre">Popular by Genre</div>
              <div className="book-types">
                <Link to="#" className="book-type active">
                  {" "}All Genres
                </Link>
                <Link to="#" className="book-type">
                  {" "}Business
                </Link>
                <Link to="#" className="book-type">
                  {" "}Science
                </Link>
                <Link to="#" className="book-type">
                  {" "}Fiction
                </Link>
                <Link to="#" className="book-type">
                  {" "}Philosophy
                </Link>
                <Link to="#" className="book-type">
                  {" "}Biography
                </Link>
              </div>
            </div>
            <div className="book-cards dark:bg-gray-900">
              <div className="book-card dark:bg-gray-800">
                <div className="content-wrapper">
                  <img src={mind} alt="" className="book-card-img" />
                  <div className="card-content">
                    <div className="book-name">Changes Are</div>
                    <div className="book-by">by Richard Russo</div>
                    <div className="rate" />
                    <div className="book-sum card-sum">
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s books
                      for years.{" "}
                    </div>
                  </div>
                </div>
              </div>

              {/* another complete card with liked people and ratings */}
              {/* <div className="book-card dark:bg-gray-800">
                <div className="content-wrapper">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/7167iiDUeAL.jpg"
                    alt=""
                    className="book-card-img"
                  />
                  <div className="card-content">
                    <div className="book-name">Dominicana</div>
                    <div className="book-by">by Angie Cruz</div>
                    <div className="rate">
                      <fieldset className="rating book-rate">
                        <input
                          type="checkbox"
                          id="star-c6"
                          name="rating"
                          value="5"
                        />
                        <label className="full" htmlFor="star-c6" />
                        <input
                          type="checkbox"
                          id="star-c7"
                          name="rating"
                          value="4"
                        />
                        <label className="full" htmlFor="star-c7" />
                        <input
                          type="checkbox"
                          id="star-c8"
                          name="rating"
                          value="3"
                        />
                        <label className="full" htmlFor="star-c8" />
                        <input
                          type="checkbox"
                          id="star-c9"
                          name="rating"
                          value="2"
                        />
                        <label className="full" htmlFor="star-c9" />
                        <input
                          type="checkbox"
                          id="star-c10"
                          name="rating"
                          value="1"
                        />
                        <label className="full" htmlFor="star-c10" />
                      </fieldset>
                      <span className="book-voters card-vote">
                        1.987 voters
                      </span>
                    </div>
                    <div className="book-sum card-sum">
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s books
                      for years.{" "}
                    </div>
                  </div>
                </div>
                <div className="likes">
                  <div className="like-profile">
                    <img
                      src="https://randomuser.me/api/portraits/women/63.jpg"
                      alt=""
                      className="like-img"
                    />
                  </div>
                  <div className="like-name">
                    <span>Kimberly Jones</span> like this
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
