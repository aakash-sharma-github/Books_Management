import React, { useState, useRef } from "react";
import axios from "axios";
import { Toast } from "primereact/toast";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Contact() {
  const toast = useRef(null);
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  };

  const [contact, setContact] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const validate =
        contact.firstname === "" ||
        contact.lastname === "" ||
        contact.email === "" ||
        contact.phone === "" ||
        contact.subject === "" ||
        contact.message === "";

      if (!validate) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/contact/",
          contact
        );
        console.log(response.data);
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Message Sent",
          life: 3000
        });
      } else if (validate) {
        toast.current.show({
          severity: "warn",
          summary: "Warning",
          detail: "Please fill in all fields",
          life: 3000
        });
      }
    } catch (error) {
      console.log(error);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Something went wrong",
        life: 3000
      });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-12 text-2xl tracking-tight font-bold lg:text-5xl text-primary-600 dark:text-gray-500">
            Let&#8217;s get in touch&#8228;
          </h1>
        </div>
        <Toast ref={toast} />
        <form
          className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                forhtml="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="firstname"
                value={contact.firstname}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                name="lastname"
                value={contact.lastname}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="company"
                name="subject"
                value={contact.subject}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="write something fruitfull..."
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="99999 88888"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              value={contact.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your messages here..."
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
