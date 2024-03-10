import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/books.png";
import logo from "../assets/svg/logo.svg";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaDiscord,
  FaGithubSquare,
  FaInstagramSquare
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <div className="mb-6 md:mb-0 sm:flex sm:items-center sm:justify-between">
              <Link to="/" className="flex items-center">
                <img src={logo} className="h-16 me-8" alt="Books Logo" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center mb-6 sm:mb-0">
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://www.linkedin.com/in/aakash-sharma-918447178/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-4xl"
              >
                <BiLogoLinkedinSquare />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://github.com/aakash-sharma-github"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-4xl"
              >
                <FaGithubSquare />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://twitter.com/mrsky5256"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-4xl"
              >
                <FaSquareXTwitter />
                <span className="sr-only">X</span>
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://discord.gg/HH6JY7HG7u"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-4xl"
              >
                <FaDiscord />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://www.instagram.com/mr.sky__56/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-4xl"
              >
                <FaInstagramSquare />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://www.facebook.com/profile.php?id=100047117551153"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-4xl"
              >
                <FaFacebookSquare />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Books™
            </Link>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
