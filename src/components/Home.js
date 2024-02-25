import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book6.webp";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";

const cardItems = [
  {
    id: 1,
    book: book1,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  },
  {
    id: 2,
    book: book2,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  },
  {
    id: 3,
    book: book3,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  },
  {
    id: 4,
    book: book4,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  }
];

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <button className="w-full max-w-[48rem] flex-row bg-white dark:bg-gray-500">
              <Link to="/adminadd">add admin</Link>
            </button>
            {cardItems.map(item =>
              <div
                key={item.id}
                // className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-900 rounded-lg p-8 md:p-12"
              >
                <Card className="w-full max-w-[48rem] flex-row bg-white dark:bg-gray-500">
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                  >
                    <img
                      src={item.book}
                      alt="card"
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h4" color="gray" className="mb-2">
                      {item.title}
                    </Typography>
                    <Typography color="stone" className="mb-8 font-normal">
                      {item.description}
                    </Typography>
                    <Link to="#" className="inline-block">
                      <Button
                        variant="text"
                        className="flex items-center gap-2"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>
            )}

            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
